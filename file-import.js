/* Local file import helpers for Roleport.
 * PDF/DOCX contents are processed entirely in the browser.
 */
(() => {
  'use strict';

  const IMPORT_VERSION = '2.2';
  const MAX_FILE_SIZE = 12 * 1024 * 1024;
  const MAX_TEXT_LENGTH = 10000;
  const SCRIPT_BASE = (() => {
    const current = document.currentScript;
    if (current?.src) return new URL('.', current.src).href;
    const script = [...document.scripts].find((item) => item.src.includes('file-import.js'));
    return script?.src ? new URL('.', script.src).href : document.baseURI;
  })();
  const assetUrl = (path) => new URL(path, SCRIPT_BASE).href;

  const tooLarge = () => {
    const error = new Error('FILE_TOO_LARGE');
    error.code = 'FILE_TOO_LARGE';
    return error;
  };
  const unsupported = (code = 'UNSUPPORTED_TYPE') => {
    const error = new Error(code);
    error.code = code;
    return error;
  };

  const isCjk = (value) => /[\u3400-\u9fff]/.test(value);
  const cleanLine = (value) => value
    .replace(/\s+/g, ' ')
    .replace(/\s+([，。；：！？、,.!?;:])/g, '$1')
    .trim();

  function reconstructPageText(items) {
    const textItems = items
      .filter((item) => typeof item.str === 'string' && item.str.trim())
      .map((item) => ({
        str: item.str,
        x: Number(item.transform?.[4]) || 0,
        y: Number(item.transform?.[5]) || 0,
        width: Number(item.width) || 0,
        height: Number(item.height) || Math.abs(Number(item.transform?.[3])) || 10
      }));
    if (!textItems.length) return '';

    textItems.sort((a, b) => (b.y - a.y) || (a.x - b.x));
    const lines = [];
    textItems.forEach((item) => {
      const tolerance = Math.max(2, Math.min(item.height, 12) * 0.28);
      let line = lines[lines.length - 1];
      if (!line || Math.abs(line.y - item.y) > Math.max(tolerance, Math.min(line.height, item.height) * 0.35)) {
        lines.push({ y: item.y, height: item.height, items: [item] });
      } else {
        line.items.push(item);
        line.y = (line.y * (line.items.length - 1) + item.y) / line.items.length;
        line.height = Math.max(line.height, item.height);
      }
    });

    return lines
      .map((line) => {
        const ordered = [...line.items].sort((a, b) => a.x - b.x);
        let text = '';
        let previous = null;
        ordered.forEach((item) => {
          const value = item.str.replace(/\s+/g, ' ');
          if (!text) {
            text = value;
          } else {
            const gap = item.x - (previous.x + previous.width);
            const needsSpace = gap > Math.max(1.5, item.height * 0.08)
              && !isCjk(previous.str.slice(-1))
              && !isCjk(value.charAt(0));
            text += needsSpace ? ` ${value}` : value;
          }
          previous = item;
        });
        return { text: cleanLine(text), y: line.y, height: line.height };
      })
      .filter((line) => line.text)
      .reduce((result, line, index, all) => {
        if (index > 0) {
          const previous = all[index - 1];
          const verticalGap = previous.y - line.y;
          result += verticalGap > Math.max(previous.height, line.height) * 1.75 ? '\n\n' : '\n';
        }
        return result + line.text;
      }, '');
  }

  const decodeBase64 = (base64) => {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  };

  class EmbeddedCMapReaderFactory {
    constructor() { this.cache = new Map(); }
    async fetch({ name }) {
      if (!name) throw new Error('CMap name must be specified.');
      if (!window.ROLEPORT_CMAP_DATA || !window.ROLEPORT_CMAP_DATA[name]) {
        throw new Error(`CMap not bundled: ${name}`);
      }
      if (!this.cache.has(name)) this.cache.set(name, decodeBase64(window.ROLEPORT_CMAP_DATA[name]));
      return { cMapData: this.cache.get(name), compressionType: 1 };
    }
  }

  async function extractPdf(file) {
    if (!window.pdfjsLib) throw unsupported('PDF_LIBRARY_MISSING');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = assetUrl('vendor/pdf.worker.min.js');
    const buffer = await file.arrayBuffer();
    const loadingTask = window.pdfjsLib.getDocument({
      data: buffer,
      cMapUrl: assetUrl('vendor/cmaps/'),
      cMapPacked: true,
      CMapReaderFactory: window.ROLEPORT_CMAP_DATA ? EmbeddedCMapReaderFactory : undefined,
      standardFontDataUrl: assetUrl('vendor/standard_fonts/')
    });
    const pdf = await loadingTask.promise;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent({ includeMarkedContent: false });
      pages.push(reconstructPageText(content.items).trim());
      page.cleanup();
    }
    await pdf.destroy();
    const text = pages.join('\n\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
    if (text.replace(/\s/g, '').length < 20) throw unsupported('PDF_NO_TEXT');
    return text;
  }

  async function extractDocx(file) {
    if (!window.fflate) throw unsupported('DOCX_LIBRARY_MISSING');
    const data = new Uint8Array(await file.arrayBuffer());
    const zip = window.fflate.unzipSync(data);
    const documentXml = zip['word/document.xml'];
    if (!documentXml) throw unsupported('DOCX_INVALID');
    const xml = window.fflate.strFromU8(documentXml);
    const dom = new DOMParser().parseFromString(xml, 'application/xml');
    if (dom.querySelector('parsererror')) throw unsupported('DOCX_INVALID');
    const paragraphs = [...dom.getElementsByTagNameNS('*', 'p')]
      .map((paragraph) => [...paragraph.getElementsByTagNameNS('*', 't')].map((node) => node.textContent || '').join(''))
      .map((text) => text.trim())
      .filter(Boolean);
    const text = paragraphs.join('\n').trim();
    if (!text) throw unsupported('DOCX_EMPTY');
    return text;
  }

  async function extractFile(file) {
    if (!(file instanceof File)) throw unsupported();
    if (file.size > MAX_FILE_SIZE) throw tooLarge();
    const extension = (file.name.split('.').pop() || '').toLowerCase();
    let text;
    if (extension === 'txt' || extension === 'md') text = await file.text();
    else if (extension === 'pdf') text = await extractPdf(file);
    else if (extension === 'docx') text = await extractDocx(file);
    else if (extension === 'doc') throw unsupported('DOC_NOT_SUPPORTED');
    else throw unsupported('UNSUPPORTED_TYPE');
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
    const truncated = text.length > MAX_TEXT_LENGTH;
    const cjkCount = (text.match(/[\u3400-\u9fff]/g) || []).length;
    return {
      text: text.slice(0, MAX_TEXT_LENGTH),
      originalLength: text.length,
      cjkCount,
      truncated,
      extension,
      version: IMPORT_VERSION
    };
  }

  window.ROLEPORT_FILE_IMPORT_VERSION = IMPORT_VERSION;
  window.RoleportFileImport = { extractFile, MAX_TEXT_LENGTH, version: IMPORT_VERSION };
})();







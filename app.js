(() => {
  'use strict';

  const jobs = Array.isArray(window.ROLEPORT_JOBS) ? window.ROLEPORT_JOBS : [];
  const state = {
    language: document.documentElement.dataset.lang === 'en' ? 'en' : 'zh',
    query: '',
    workplace: 'all',
    salary: 'all',
    jobType: 'all',
    activeJobId: null,
    lastFocusedElement: null,
    closeTimer: null,
    toastTimer: null
  };

  const translations = {
    zh: {
      documentTitle: 'Roleport · Web3 求职岗位',
      metaDescription: 'Roleport 聚合整理 Web3 求职岗位，支持搜索、办公模式、薪资和职位类型筛选。',
      skipToJobs: '跳到岗位列表',
      pageTitle: 'Web3 求职岗位',
      subtitle: '聚合多个公开来源，查看岗位详情、公司信息与原始投递入口。',
      listTitle: '岗位列表',
      searchPlaceholder: '搜索岗位或公司',
      search: '搜索',
      workplaceAll: '办公模式：全部',
      workplaceRemote: '办公模式：远程',
      workplaceOnsite: '办公模式：实地',
      salaryAll: '薪资：不限',
      salaryUnder50k: '年薪：5 万美元以下',
      salary50kTo100k: '年薪：5–10 万美元',
      salary100kTo150k: '年薪：10–15 万美元',
      salary150kPlus: '年薪：15 万美元以上',
      salaryNegotiable: '薪资：面议',
      jobTypeAll: '职位类型：全部',
      jobTypeFullTime: '职位类型：全职',
      jobTypePartTime: '职位类型：兼职',
      jobTypeInternship: '职位类型：实习',
      clearFilters: '清除筛选',
      tableJob: '岗位名称',
      tableCompany: '公司',
      tableWorkplace: '办公模式',
      tableJobType: '职位类型',
      tableSalary: '薪资',
      tableAction: '操作',
      view: '查看',
      countTemplate: '共 {count} 个岗位',
      emptyTitle: '没有找到匹配的岗位',
      emptyDescription: '换一个关键词，或调整筛选条件。',
      footerNote: '岗位信息为演示数据，请以原始招聘页面为准',
      jobDetails: '岗位详情',
      shareJob: '分享岗位',
      closeJobDetails: '关闭岗位详情',
      themeToDark: '切换到深色主题',
      themeToLight: '切换到浅色主题',
      remote: '远程',
      onsite: '实地',
      fullTime: '全职',
      partTime: '兼职',
      internship: '实习',
      updatedPrefix: '最近更新',
      workMode: '办公模式',
      jobType: '职位类型',
      salary: '薪资范围',
      source: '信息来源',
      companyWebsite: '公司官网',
      applyNow: '前往申请',
      copyJob: '复制岗位信息',
      jdHeading: '岗位简介 / JD',
      companyOverviewHeading: '公司概况',
      applicationAndContact: '投递入口与联系方式',
      applicationUrl: '投递入口',
      contact: '联系方式',
      readonlyNote: '公开只读页面 · 信息整理自公开来源，请以原始招聘页面为准。',
      copied: '岗位信息已复制，可直接粘贴到 Notion 或飞书',
      shareCopied: '岗位链接已复制',
      shareFailed: '分享失败，请稍后重试'
    },
    en: {
      documentTitle: 'Roleport · Web3 Jobs',
      metaDescription: 'Roleport curates Web3 jobs with search and filters for work mode, salary, and job type.',
      skipToJobs: 'Skip to job list',
      pageTitle: 'Web3 Jobs',
      subtitle: 'A curated view of opportunities with job details, company context, and original application links.',
      listTitle: 'Job list',
      searchPlaceholder: 'Search jobs or companies',
      search: 'Search',
      workplaceAll: 'Work mode: All',
      workplaceRemote: 'Work mode: Remote',
      workplaceOnsite: 'Work mode: On-site',
      salaryAll: 'Salary: Any',
      salaryUnder50k: 'Annual salary: Under $50k',
      salary50kTo100k: 'Annual salary: $50k–$100k',
      salary100kTo150k: 'Annual salary: $100k–$150k',
      salary150kPlus: 'Annual salary: $150k+',
      salaryNegotiable: 'Salary: Negotiable',
      jobTypeAll: 'Job type: All',
      jobTypeFullTime: 'Job type: Full-time',
      jobTypePartTime: 'Job type: Part-time',
      jobTypeInternship: 'Job type: Internship',
      clearFilters: 'Clear filters',
      tableJob: 'ROLE',
      tableCompany: 'COMPANY',
      tableWorkplace: 'WORK MODE',
      tableJobType: 'JOB TYPE',
      tableSalary: 'SALARY',
      tableAction: 'ACTION',
      view: 'View',
      countTemplate: '{count} jobs',
      emptyTitle: 'No matching jobs',
      emptyDescription: 'Try another keyword or adjust the filters.',
      footerNote: 'Sample data only. Always refer to the original job posting.',
      jobDetails: 'JOB DETAILS',
      shareJob: 'Share job',
      closeJobDetails: 'Close job details',
      themeToDark: 'Switch to dark theme',
      themeToLight: 'Switch to light theme',
      remote: 'Remote',
      onsite: 'On-site',
      fullTime: 'Full-time',
      partTime: 'Part-time',
      internship: 'Internship',
      updatedPrefix: 'Updated',
      workMode: 'Work mode',
      jobType: 'Job type',
      salary: 'Salary',
      source: 'Source',
      companyWebsite: 'Company website',
      applyNow: 'Apply now',
      copyJob: 'Copy job details',
      jdHeading: 'Role / JD',
      companyOverviewHeading: 'Company overview',
      applicationAndContact: 'Application & contact',
      applicationUrl: 'Application',
      contact: 'Contact',
      readonlyNote: 'Read-only page · Curated from public sources. Refer to the original posting for final details.',
      copied: 'Job details copied. Paste them into Notion or Feishu.',
      shareCopied: 'Job link copied',
      shareFailed: 'Could not share this job. Please try again.'
    }
  };

  const elements = {
    themeToggle: document.getElementById('themeToggle'),
    languageOptions: [...document.querySelectorAll('[data-language-option]')],
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    workplaceFilter: document.getElementById('workplaceFilter'),
    salaryFilter: document.getElementById('salaryFilter'),
    jobTypeFilter: document.getElementById('jobTypeFilter'),
    clearFilters: document.getElementById('clearFilters'),
    resultCount: document.getElementById('resultCount'),
    jobRows: document.getElementById('jobRows'),
    tableScroll: document.querySelector('.table-scroll'),
    emptyState: document.getElementById('emptyState'),
    resetFilters: document.getElementById('resetFilters'),
    updatedAt: document.getElementById('updatedAt'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    closeDrawer: document.getElementById('closeDrawer'),
    shareJob: document.getElementById('shareJob'),
    drawerContent: document.getElementById('drawerContent'),
    copyToast: document.getElementById('copyToast'),
    themeColor: document.querySelector('meta[name="theme-color"]'),
    metaDescription: document.querySelector('meta[name="description"]')
  };

  const dict = () => translations[state.language];

  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const safeUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
    } catch (_) {
      return '#';
    }
  };

  const localize = (value) => {
    if (value == null) return '';
    if (typeof value === 'string' || typeof value === 'number') return String(value);
    return String(value[state.language] ?? value.zh ?? value.en ?? '');
  };

  const formatDate = (value, withTime = false) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return dict().updatedPrefix;
    const locale = state.language === 'en' ? 'en-US' : 'zh-CN';
    const options = withTime
      ? { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }
      : { month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  const workModeLabel = (job) => job.workplace === 'onsite' ? dict().onsite : dict().remote;
  const jobTypeLabel = (job) => ({
    'full-time': dict().fullTime,
    'part-time': dict().partTime,
    'internship': dict().internship
  })[job.jobType] || job.jobType;

  const companyLogo = (job) => `
    <span class="company-logo tone-${escapeHtml(job.companyTone || 'dark')}" aria-hidden="true">${escapeHtml(job.companyInitial || job.company?.slice(0, 1) || '?')}</span>
  `;

  const countMarkup = (count) => {
    const template = dict().countTemplate;
    return escapeHtml(template).replace('{count}', `<strong>${count}</strong>`);
  };

  const jobRow = (job) => {
    const t = dict();
    return `
      <tr data-job-id="${escapeHtml(job.id)}">
        <td>
          <div class="job-title" title="${escapeHtml(localize(job.title))}">${escapeHtml(localize(job.title))}</div>
        </td>
        <td>
          <div class="company">
            ${companyLogo(job)}
            <span class="company-name">${escapeHtml(job.company)}</span>
          </div>
        </td>
        <td>
          <span class="workplace">${escapeHtml(workModeLabel(job))} · ${escapeHtml(localize(job.location))}</span>
        </td>
        <td><span class="job-type-label">${escapeHtml(jobTypeLabel(job))}</span></td>
        <td><span class="salary">${escapeHtml(localize(job.salary))}</span></td>
        <td>
          <div class="row-action">
            <button class="view-button" type="button" data-open-job="${escapeHtml(job.id)}">${escapeHtml(t.view)}</button>
          </div>
        </td>
      </tr>
    `;
  };

  const getFilteredJobs = () => {
    const query = state.query.trim().toLocaleLowerCase(state.language === 'en' ? 'en' : 'zh-CN');
    return jobs.filter((job) => {
      const titleZh = localizeObjectValue(job.title, 'zh').toLocaleLowerCase('zh-CN');
      const titleEn = localizeObjectValue(job.title, 'en').toLocaleLowerCase('en');
      const company = String(job.company).toLocaleLowerCase('en');
      const matchesQuery = !query || titleZh.includes(query) || titleEn.includes(query) || company.includes(query);
      const matchesWorkplace = state.workplace === 'all' || job.workplace === state.workplace;
      const matchesSalary = state.salary === 'all' || job.salaryBand === state.salary;
      const matchesJobType = state.jobType === 'all' || job.jobType === state.jobType;
      return matchesQuery && matchesWorkplace && matchesSalary && matchesJobType;
    });
  };

  const localizeObjectValue = (value, language) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return String(value[language] ?? '');
  };

  const renderJobs = () => {
    const filteredJobs = getFilteredJobs();
    elements.jobRows.innerHTML = filteredJobs.map(jobRow).join('');
    elements.resultCount.innerHTML = countMarkup(filteredJobs.length);
    elements.tableScroll.hidden = filteredJobs.length === 0;
    elements.emptyState.hidden = filteredJobs.length !== 0;
    elements.clearFilters.disabled = !hasActiveFilters();
  };

  const hasActiveFilters = () => Boolean(
    state.query.trim()
    || state.workplace !== 'all'
    || state.salary !== 'all'
    || state.jobType !== 'all'
  );

  const clearAllFilters = () => {
    state.query = '';
    state.workplace = 'all';
    state.salary = 'all';
    state.jobType = 'all';
    elements.searchInput.value = '';
    elements.workplaceFilter.value = 'all';
    elements.salaryFilter.value = 'all';
    elements.jobTypeFilter.value = 'all';
    renderJobs();
  };

  const updateUpdatedAt = () => {
    const latest = jobs.reduce((current, job) => {
      const time = new Date(job.updatedAt || job.postedAt || 0).getTime();
      return Math.max(current, Number.isNaN(time) ? 0 : time);
    }, 0);
    if (latest) {
      elements.updatedAt.textContent = `${dict().updatedPrefix} · ${formatDate(latest, true)}`;
    }
  };

  const applyTheme = (theme, persist = true) => {
    document.documentElement.dataset.theme = theme;
    const isDark = theme === 'dark';
    elements.themeToggle.setAttribute('aria-label', isDark ? dict().themeToLight : dict().themeToDark);
    elements.themeToggle.setAttribute('aria-pressed', String(isDark));
    if (elements.themeColor) elements.themeColor.content = isDark ? '#10120f' : '#f5f5f1';
    if (persist) {
      try {
        localStorage.setItem('roleport-theme', theme);
      } catch (_) {
        // Theme switching still works when storage is unavailable.
      }
    }
  };

  const applyStaticTranslations = () => {
    const t = dict();
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (t[key]) element.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (t[key]) element.setAttribute('placeholder', t[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.dataset.i18nAria;
      if (t[key]) element.setAttribute('aria-label', t[key]);
    });
    document.title = t.documentTitle;
    if (elements.metaDescription) elements.metaDescription.content = t.metaDescription;
  };

  const applyLanguage = (language, persist = true) => {
    state.language = language === 'en' ? 'en' : 'zh';
    document.documentElement.dataset.lang = state.language;
    document.documentElement.lang = state.language === 'en' ? 'en' : 'zh-CN';
    elements.languageOptions.forEach((button) => {
      const active = button.dataset.languageOption === state.language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    applyStaticTranslations();
    applyTheme(document.documentElement.dataset.theme, false);
    updateUpdatedAt();
    renderJobs();
    if (state.activeJobId) {
      const job = jobs.find((item) => item.id === state.activeJobId);
      if (job) elements.drawerContent.innerHTML = drawerTemplate(job);
    }
    if (persist) {
      try {
        localStorage.setItem('roleport-language', state.language);
      } catch (_) {
        // Language switching still works when storage is unavailable.
      }
    }
  };

  const drawerTemplate = (job) => {
    const t = dict();
    const title = localize(job.title);
    const website = safeUrl(job.companyWebsite);
    const applyUrl = safeUrl(job.applyUrl);
    return `
      <div class="drawer-body">
        <h2 class="drawer-title" id="drawerTitle">${escapeHtml(title)}</h2>
        <div class="drawer-company">
          ${companyLogo(job)}
          <div class="drawer-company-copy">
            <span class="drawer-company-name">${escapeHtml(job.company)}</span>
            <a class="company-website" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(job.companyDomain)}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5 9.5 2.5M4.2 2.5h5.3v5.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
        <p class="drawer-updated-row">${escapeHtml(t.updatedPrefix)} · ${escapeHtml(formatDate(job.updatedAt || job.postedAt, true))}</p>

        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t.workMode)}</span>
            <span class="meta-value">${escapeHtml(workModeLabel(job))} · ${escapeHtml(localize(job.location))}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t.jobType)}</span>
            <span class="meta-value">${escapeHtml(jobTypeLabel(job))}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t.salary)}</span>
            <span class="meta-value">${escapeHtml(localize(job.salary))}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t.source)}</span>
            <span class="meta-value">${escapeHtml(job.sourceName)}</span>
          </div>
        </div>

        <div class="drawer-actions">
          <a class="primary-link" href="${escapeHtml(applyUrl)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(t.applyNow)}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <button class="secondary-button" type="button" data-copy-job="${escapeHtml(job.id)}">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="5.2" y="5.2" width="8.8" height="8.8" rx="1.8" stroke="currentColor" stroke-width="1.3"></rect>
              <path d="M10.5 5.2V3.8c0-1-.8-1.8-1.8-1.8H3.8C2.8 2 2 2.8 2 3.8v4.9c0 1 .8 1.8 1.8 1.8h1.4" stroke="currentColor" stroke-width="1.3"></path>
            </svg>
            ${escapeHtml(t.copyJob)}
          </button>
        </div>

        <section class="drawer-section">
          <h3>${escapeHtml(t.jdHeading)}</h3>
          <p>${escapeHtml(localize(job.jd))}</p>
        </section>

        <section class="drawer-section">
          <h3>${escapeHtml(t.companyOverviewHeading)}</h3>
          <p>${escapeHtml(localize(job.companyOverview))}</p>
        </section>

        <section class="drawer-section">
          <h3>${escapeHtml(t.applicationAndContact)}</h3>
          <div class="info-list">
            <div class="info-row">
              <span class="info-label">${escapeHtml(t.applicationUrl)}</span>
              <a class="info-link" href="${escapeHtml(applyUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(job.sourceUrl || job.applyUrl)}</a>
            </div>
            <div class="info-row">
              <span class="info-label">${escapeHtml(t.contact)}</span>
              <span class="info-value">${escapeHtml(job.contact)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">${escapeHtml(t.companyWebsite)}</span>
              <a class="info-link" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(job.companyDomain)}</a>
            </div>
          </div>
        </section>

        <div class="readonly-footnote">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="3" y="7" width="10" height="7" rx="1.7" stroke="currentColor" stroke-width="1.2"></rect>
            <path d="M5.4 7V5.2a2.6 2.6 0 0 1 5.2 0V7" stroke="currentColor" stroke-width="1.2"></path>
          </svg>
          <span>${escapeHtml(t.readonlyNote)}</span>
        </div>
      </div>
    `;
  };

  const openDrawer = (jobId) => {
    const job = jobs.find((item) => item.id === jobId);
    if (!job) return;

    clearTimeout(state.closeTimer);
    state.activeJobId = jobId;
    state.lastFocusedElement = document.activeElement;
    elements.drawerContent.innerHTML = drawerTemplate(job);
    elements.drawerOverlay.hidden = false;
    document.body.classList.add('drawer-open');
    requestAnimationFrame(() => {
      elements.drawerOverlay.classList.add('is-open');
      elements.closeDrawer.focus();
    });
  };

  const closeDrawer = () => {
    elements.drawerOverlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    state.activeJobId = null;
    state.closeTimer = window.setTimeout(() => {
      elements.drawerOverlay.hidden = true;
      elements.drawerContent.innerHTML = '';
      if (state.lastFocusedElement instanceof HTMLElement) {
        state.lastFocusedElement.focus();
      }
    }, 220);
  };

  const showToast = (message) => {
    window.clearTimeout(state.toastTimer);
    elements.copyToast.textContent = message;
    elements.copyToast.classList.add('is-visible');
    state.toastTimer = window.setTimeout(() => {
      elements.copyToast.classList.remove('is-visible');
    }, 2200);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
  };

  const jobAsMarkdown = (job) => {
    const t = dict();
    return [
      `# ${localize(job.title)} — ${job.company}`,
      '',
      `- ${t.workMode}: ${workModeLabel(job)} · ${localize(job.location)}`,
      `- ${t.jobType}: ${jobTypeLabel(job)}`,
      `- ${t.salary}: ${localize(job.salary)}`,
      `- ${t.companyWebsite}: ${job.companyWebsite}`,
      '',
      `## ${t.jdHeading}`,
      localize(job.jd),
      '',
      `## ${t.companyOverviewHeading}`,
      localize(job.companyOverview),
      '',
      `## ${t.applicationAndContact}`,
      `- ${t.applicationUrl}: ${job.applyUrl}`,
      `- ${t.contact}: ${job.contact}`
    ].join('\n');
  };

  const copyJobDetails = async (job) => {
    await copyText(jobAsMarkdown(job));
    showToast(dict().copied);
  };

  const shareJob = async () => {
    const job = jobs.find((item) => item.id === state.activeJobId);
    if (!job) return;
    const t = dict();
    const title = localize(job.title);
    const text = `${title} — ${job.company}\n${workModeLabel(job)} · ${jobTypeLabel(job)} · ${localize(job.salary)}\n${job.applyUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: `${title} · Roleport`, text, url: job.applyUrl });
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
      }
    }

    try {
      await copyText(text);
      showToast(t.shareCopied);
    } catch (_) {
      showToast(t.shareFailed);
    }
  };

  const trapDrawerFocus = (event) => {
    if (elements.drawerOverlay.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = [...elements.drawerOverlay.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.offsetParent !== null);

    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  elements.themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  elements.languageOptions.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.languageOption));
  });

  elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    state.query = elements.searchInput.value;
    renderJobs();
  });

  elements.searchInput.addEventListener('input', () => {
    state.query = elements.searchInput.value;
    renderJobs();
  });

  elements.workplaceFilter.addEventListener('change', () => {
    state.workplace = elements.workplaceFilter.value;
    renderJobs();
  });

  elements.salaryFilter.addEventListener('change', () => {
    state.salary = elements.salaryFilter.value;
    renderJobs();
  });

  elements.jobTypeFilter.addEventListener('change', () => {
    state.jobType = elements.jobTypeFilter.value;
    renderJobs();
  });

  elements.clearFilters.addEventListener('click', clearAllFilters);

  elements.resetFilters.addEventListener('click', () => {
    clearAllFilters();
    elements.searchInput.focus();
  });

  elements.jobRows.addEventListener('click', (event) => {
    const target = event.target.closest('[data-open-job], tr[data-job-id]');
    if (!target) return;
    openDrawer(target.dataset.openJob || target.dataset.jobId);
  });

  elements.closeDrawer.addEventListener('click', closeDrawer);
  elements.shareJob.addEventListener('click', shareJob);

  elements.drawerOverlay.addEventListener('click', (event) => {
    if (event.target === elements.drawerOverlay) closeDrawer();
  });

  elements.drawerContent.addEventListener('click', (event) => {
    const copyButton = event.target.closest('[data-copy-job]');
    if (!copyButton) return;
    const job = jobs.find((item) => item.id === copyButton.dataset.copyJob);
    if (job) copyJobDetails(job);
  });

  document.addEventListener('keydown', trapDrawerFocus);

  const initialTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  applyTheme(initialTheme, false);
  applyLanguage(state.language, false);
})();

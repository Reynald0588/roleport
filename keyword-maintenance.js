/*
 * Roleport 日常关键词维护文件
 * ------------------------------------------------------------
 * 只改这个文件即可新增关键词、同义词和证据规则，不需要修改主逻辑。
 *
 * 1. keywordLines：一行一个关键词
 *    格式：分类|中文名|英文名|别名1;别名2;...|权重(1-5)
 *    英文名会自动生成 id，例如 Recruiting Operations -> recruiting-operations
 *
 * 2. aliasAdditions：给已有词条补同义词
 *    左侧可以填词条 id、中文名或英文名。
 *
 * 3. evidenceGroups：为证据覆盖增加规则
 *    key 必须与新词条的 id 一致；每组至少要求两个证据组命中更稳健。
 *
 * 修改后打开 tests/keyword-maintenance-test.html 一键检查。
 */
window.ROLEPORT_KEYWORD_MAINTENANCE = {
  version: '2026.10.24.1',

  // 保留空行或 # 开头的注释行不会被解析。
  keywordLines: `
business|招聘运营|Recruiting Operations|recruiting operations;recruiting ops;招聘运营;招聘流程运营|2
  `,

  aliasAdditions: {
    'community-management': ['社群运营专员', '社区运营专员', 'Community Operations Specialist']
  },

  evidenceGroups: {
    'recruiting-operations': {
      minimumGroups: 2,
      groups: [
        { label: { zh: '招聘场景', en: 'Recruiting context' }, any: ['招聘', '候选人', 'recruiting'] },
        { label: { zh: '运营动作', en: 'Operations actions' }, any: ['运营', '流程', '优化', '协调'] }
      ]
    }
  }
};

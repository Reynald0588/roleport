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
 *    partialNote 可选，用于解释“部分覆盖”具体缺少什么证据。
 *    hardCondition 可标记需要本人确认的硬性条件。
 *
 * 修改后打开 tests/keyword-maintenance-test.html 一键检查。
 */
window.ROLEPORT_KEYWORD_MAINTENANCE = {
  version: '2026.10.28.2',

  // 保留空行或 # 开头的注释行不会被解析。
  keywordLines: `
business|招聘运营|Recruiting Operations|recruiting operations;recruiting ops;招聘运营;招聘流程运营|2
soft|学习力|Learning Ability|学习力;学习能力;快速学习;learning ability;fast learner|2
data|数据敏感度|Data Sensitivity|数据敏感度;数据敏感;对数据敏感;data sensitivity|2
data|数据驱动问题解决|Data-driven Problem Solving|通过数据发现并解决问题;数据驱动决策;数据驱动;data-driven problem solving;data-driven decision making|3
business|上线验收|Launch Acceptance|上线验收;产品验收;上线测试;需求验收;launch acceptance;go-live acceptance;release acceptance|3
business|全职实习期限|Full-time Internship Availability|全职实习;实习期限;实习时长;每周到岗;每周实习;可实习;full-time internship;internship availability|3
  `,

  aliasAdditions: {
    'community-management': ['社群运营专员', '社区运营专员', 'Community Operations Specialist'],
    'crm': ['CRM 产品逻辑', 'CRM产品逻辑', 'CRM product logic', '客户关系管理系统']
  },

  evidenceGroups: {
    'recruiting-operations': {
      minimumGroups: 2,
      groups: [
        { label: { zh: '招聘场景', en: 'Recruiting context' }, any: ['招聘', '候选人', 'recruiting'] },
        { label: { zh: '运营动作', en: 'Operations actions' }, any: ['运营', '流程', '优化', '协调'] }
      ]
    },
    'crm': {
      minimumGroups: 2,
      partialNote: {
        zh: '社群维护、成员答疑等用户服务经历可以作为相关背景，但不能单独证明 CRM 产品使用经验。',
        en: 'Community support and member Q&A are relevant background, but they do not by themselves prove CRM product experience.'
      },
      groups: [
        { label: { zh: '客户或用户场景', en: 'Customer or user context' }, any: ['客户', '用户', '社群', '社区', '成员', 'customer', 'user', 'community'] },
        { label: { zh: 'CRM 工具或系统', en: 'CRM tooling' }, any: ['CRM', 'Salesforce', 'HubSpot', '客户关系管理系统', '客户管理系统', 'customer relationship management'], required: true }
      ]
    },
    'data-visualization': {
      minimumGroups: 2,
      partialNote: {
        zh: '表格整理和基础记录属于数据工作经验，但还不能证明数据看板监控、异常分析或业务机会识别能力。',
        en: 'Spreadsheet cleanup and basic records are relevant data experience, but they do not yet prove dashboard monitoring, anomaly analysis, or opportunity identification.'
      },
      groups: [
        { label: { zh: '数据记录', en: 'Data records' }, any: ['数据', '表格', '记录', '整理', '统计', '项目进度', '任务记录'] },
        { label: { zh: '看板或可视化', en: 'Dashboard or visualization' }, any: ['可视化', '图表', '看板', 'dashboard', '报表', 'Tableau', 'Power BI', 'Looker'], required: true },
        { label: { zh: '分析场景', en: 'Analysis context' }, any: ['分析', '异常', '指标', '监控', '洞察', '机会点'] }
      ]
    },
    'launch-acceptance': {
      minimumGroups: 2,
      partialNote: {
        zh: '个人项目的部署和基础测试可以作为相关测试经验，但不等同于正式产品需求、团队协作与完整上线验收。',
        en: 'Personal-project deployment and basic testing are relevant testing experience, but they are not the same as formal product requirements, team coordination, and full launch acceptance.'
      },
      groups: [
        { label: { zh: '产品或需求场景', en: 'Product or requirements context' }, any: ['产品', '需求', '版本', '功能', 'product', 'requirement', 'feature'], required: true },
        { label: { zh: '测试或验收', en: 'Testing or acceptance' }, any: ['测试', '验收', '用例', 'test', 'testing', 'acceptance', 'QA'] },
        { label: { zh: '上线或发布', en: 'Launch or release' }, any: ['上线', '发布', '部署', '交付', 'release', 'deploy', 'launch'] }
      ]
    },
    'full-time-internship-availability': {
      minimumGroups: 2,
      unstatedIfMissing: true,
      hardCondition: true,
      partialNote: {
        zh: '简历提到了实习或到岗信息，但没有给出足够明确的实习期限或每周可投入时间，请本人确认。',
        en: 'The resume mentions internship or availability information, but not enough duration or weekly availability detail. Please confirm it yourself.'
      },
      groups: [
        { label: { zh: '实习或到岗', en: 'Internship or availability' }, any: ['全职实习', '实习期', '实习时长', '每周到岗', '每周实习', '可实习', 'internship', 'available'], required: true },
        { label: { zh: '期限或频率', en: 'Duration or frequency' }, any: ['六个月', '6个月', '半年', '三个月', '3个月', '长期', '每周', '每周天数', 'months', 'weeks'] }
      ]
    }
  }
};
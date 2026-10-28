/* Roleport keyword dictionary.
 * Format: category|zh|en|aliases separated by ;|weight
 * Duplicate canonical names are merged automatically, including aliases.
 * Add new rows below to expand the dictionary.
 */
window.KEYWORD_DICTIONARY_VERSION = '2026.10.28.3';

window.KEYWORD_DICTIONARY = (() => {
  'use strict';
  const raw = String.raw`tech|Python|Python|python;py|3
tech|JavaScript|JavaScript|javascript;js|3
tech|TypeScript|TypeScript|typescript;ts|3
tech|Java|Java|java|2
tech|Go|Go|golang;go language|2
tech|Rust|Rust|rust|2
tech|C++|C++|c++;cpp|2
tech|C#|C#|c#;c sharp|2
tech|PHP|PHP|php|2
tech|Ruby|Ruby|ruby|2
tech|Kotlin|Kotlin|kotlin|2
tech|Swift|Swift|swift;swiftui|2
tech|Scala|Scala|scala|1
tech|R|R|r language;r programming|1
tech|MATLAB|MATLAB|matlab|1
tech|Perl|Perl|perl|1
tech|Lua|Lua|lua|1
tech|Dart|Dart|dart|2
tech|Elixir|Elixir|elixir|1
tech|Haskell|Haskell|haskell|1
tech|Bash|Bash|bash;shell script|2
tech|PowerShell|PowerShell|powershell|2
tech|HTML|HTML|html;html5|2
tech|CSS|CSS|css;css3|2
tech|Sass|Sass|sass;scss|1
tech|WebAssembly|WebAssembly|webassembly;wasm|1
tech|React|React|react;react.js;reactjs|3
tech|Vue|Vue|vue;vue.js;vuejs|2
tech|Angular|Angular|angular;angularjs|2
tech|Svelte|Svelte|svelte;sveltekit|2
tech|Next.js|Next.js|next.js;nextjs|2
tech|Nuxt|Nuxt|nuxt;nuxt.js;nuxtjs|1
tech|Remix|Remix|remix;remix.js|1
tech|Redux|Redux|redux|2
tech|Zustand|Zustand|zustand|1
tech|React Native|React Native|react native;react-native|2
tech|Flutter|Flutter|flutter|2
tech|Electron|Electron|electron;electron.js|1
tech|Tailwind CSS|Tailwind CSS|tailwind;tailwind css;tailwindcss|2
tech|Bootstrap|Bootstrap|bootstrap|1
tech|Material UI|Material UI|material ui;mui|1
tech|Ant Design|Ant Design|ant design;antd|1
tech|Vite|Vite|vite|1
tech|Webpack|Webpack|webpack|2
tech|Rollup|Rollup|rollup|1
tech|Babel|Babel|babel|1
tech|ESLint|ESLint|eslint|1
tech|Jest|Jest|jest|2
tech|Vitest|Vitest|vitest|1
tech|Cypress|Cypress|cypress|2
tech|Playwright|Playwright|playwright|2
tech|Storybook|Storybook|storybook|1
tech|Node.js|Node.js|node.js;nodejs;node|3
tech|Express|Express|express;express.js;expressjs|2
tech|NestJS|NestJS|nestjs;nest.js|2
tech|Django|Django|django|2
tech|Flask|Flask|flask|1
tech|FastAPI|FastAPI|fastapi|2
tech|Spring Boot|Spring Boot|spring boot;springboot|2
tech|Laravel|Laravel|laravel|1
tech|Ruby on Rails|Ruby on Rails|ruby on rails;rails|1
tech|ASP.NET|ASP.NET|asp.net;aspnet|1
tech|GraphQL|GraphQL|graphql|2
tech|REST API|REST API|rest api;restful api;restful|3
tech|gRPC|gRPC|grpc|2
tech|WebSocket|WebSocket|websocket;web socket|2
tech|Microservices|Microservices|microservices;microservice;微服务|2
tech|Serverless|Serverless|serverless;无服务器|2
tech|Kafka|Kafka|kafka;apache kafka|3
tech|RabbitMQ|RabbitMQ|rabbitmq|2
tech|Redis|Redis|redis|2
tech|PostgreSQL|PostgreSQL|postgresql;postgres;pg|3
tech|MySQL|MySQL|mysql|2
tech|MongoDB|MongoDB|mongodb;mongo|2
tech|SQLite|SQLite|sqlite|1
tech|Elasticsearch|Elasticsearch|elasticsearch;elastic search|2
tech|Nginx|Nginx|nginx|2
tech|Git|Git|git|3
tech|GitHub|GitHub|github|2
tech|GitLab|GitLab|gitlab|2
tech|Linux|Linux|linux;unix|2
tech|Docker|Docker|docker;容器化;containerization|3
tech|Kubernetes|Kubernetes|kubernetes;k8s|3
tech|CI/CD|CI/CD|ci/cd;ci cd;cicd;continuous integration;continuous delivery|3
tech|Jenkins|Jenkins|jenkins|2
tech|GitHub Actions|GitHub Actions|github actions|2
tech|GitLab CI|GitLab CI|gitlab ci;gitlab-ci|2
tech|Terraform|Terraform|terraform;基础设施即代码;infrastructure as code;iac|2
tech|Ansible|Ansible|ansible|2
tech|AWS|AWS|aws;amazon web services|3
tech|Azure|Azure|azure;microsoft azure|2
tech|GCP|GCP|gcp;google cloud;google cloud platform|2
tech|Firebase|Firebase|firebase|1
tech|Supabase|Supabase|supabase|1
tech|Vercel|Vercel|vercel|1
tech|Netlify|Netlify|netlify|1
tech|Cloudflare|Cloudflare|cloudflare|1
tech|OpenAPI|OpenAPI|openapi;swagger|2
tech|OAuth|OAuth|oauth;oauth2|2
tech|JWT|JWT|jwt;json web token|2
tech|SSO|SSO|sso;single sign-on;单点登录|2
tech|单元测试|Unit testing|unit testing;unit test;单元测试|2
tech|集成测试|Integration testing|integration testing;integration test;集成测试|2
tech|端到端测试|E2E testing|e2e testing;e2e test;end-to-end testing;端到端测试|2
tech|测试驱动开发|TDD|tdd;test-driven development;测试驱动开发|1
tech|系统设计|System design|system design;系统设计|3
tech|分布式系统|Distributed systems|distributed systems;distributed system;分布式系统|3
tech|性能优化|Performance optimization|performance optimization;performance tuning;性能优化|2
tech|可观测性|Observability|observability;可观测性|2
tech|代码审查|Code review|code review;code reviews;代码审查|1
tech|清洁代码|Clean code|clean code;代码规范;code standards|1
tech|响应式设计|Responsive design|responsive design;响应式设计|1
tech|网页安全|Web security|web security;application security;appsec;网页安全|2
tech|微前端|Microfrontends|microfrontend;microfrontends;微前端|1
data|数据分析|Data analysis|data analysis;data analytics;数据分析|3
data|数据科学|Data science|data science;数据科学|2
data|机器学习|Machine learning|machine learning;ml;机器学习|3
data|深度学习|Deep learning|deep learning;dl;深度学习|2
data|人工智能|Artificial intelligence|artificial intelligence;ai;人工智能|3
data|自然语言处理|NLP|nlp;natural language processing;自然语言处理|3
data|计算机视觉|Computer vision|computer vision;cv;计算机视觉|2
data|大语言模型|Large language models|large language model;large language models;llm;llms;大语言模型|3
data|检索增强生成|RAG|rag;retrieval augmented generation;检索增强生成|2
data|提示工程|Prompt engineering|prompt engineering;prompt design;提示工程|1
data|数据可视化|Data visualization|data visualization;data visualisation;数据可视化|2
data|数据清洗|Data cleaning|data cleaning;data cleansing;数据清洗|2
data|数据建模|Data modeling|data modeling;data modelling;数据建模|2
data|数据仓库|Data warehouse|data warehouse;数据仓库|2
data|数据湖|Data lake|data lake;数据湖|1
data|统计分析|Statistics|statistics;statistical analysis;统计分析|2
data|假设检验|Hypothesis testing|hypothesis testing;假设检验|1
data|回归分析|Regression analysis|regression analysis;regression;回归分析|1
data|分类模型|Classification|classification;分类模型|1
data|聚类分析|Clustering|clustering;聚类分析|1
data|时间序列|Time series|time series;时间序列|1
data|预测模型|Forecasting|forecasting;forecast;预测模型|1
data|推荐系统|Recommendation systems|recommendation system;recommendation systems;推荐系统|2
data|A/B 测试|A/B testing|a/b testing;a/b test;ab testing;ab test;ab测试;ab 测试|3
data|漏斗分析|Funnel analysis|funnel analysis;漏斗分析|2
data|用户分群|Customer segmentation|customer segmentation;user segmentation;用户分群;用户分层|2
data|SQL|SQL|sql|3
data|Pandas|Pandas|pandas|2
data|NumPy|NumPy|numpy|1
data|Scikit-learn|Scikit-learn|scikit-learn;sklearn|2
data|TensorFlow|TensorFlow|tensorflow|2
data|PyTorch|PyTorch|pytorch|2
data|Keras|Keras|keras|1
data|XGBoost|XGBoost|xgboost|1
data|LightGBM|LightGBM|lightgbm|1
data|Tableau|Tableau|tableau|2
data|Power BI|Power BI|power bi;powerbi|2
data|Looker|Looker|looker;looker studio|1
data|Metabase|Metabase|metabase|1
data|Excel|Excel|excel;电子表格;spreadsheet|2
data|Google Sheets|Google Sheets|google sheets;谷歌表格|1
data|Spark|Apache Spark|spark;apache spark|2
data|Hadoop|Hadoop|hadoop|1
data|Airflow|Airflow|airflow;apache airflow|2
data|dbt|dbt|dbt;data build tool|1
data|Snowflake|Snowflake|snowflake|1
data|BigQuery|BigQuery|bigquery;google bigquery|1
data|Redshift|Redshift|redshift;amazon redshift|1
data|Databricks|Databricks|databricks|1
data|ETL|ETL|etl;extract transform load|2
data|数据治理|Data governance|data governance;数据治理|1
data|指标体系|Metrics framework|metrics framework;metric system;指标体系|2
product|产品管理|Product management|product management;产品管理|3
product|产品经理|Product manager|product manager;产品经理|3
product|产品策略|Product strategy|product strategy;产品策略|2
product|产品路线图|Product roadmap|product roadmap;roadmap;产品路线图|2
product|需求分析|Requirements analysis|requirements analysis;requirement analysis;需求分析|2
product|用户故事|User stories|user story;user stories;用户故事|2
product|产品需求文档|PRD|prd;product requirements document;产品需求文档|2
product|用户研究|User research|user research;user interview;用户研究;用户访谈|3
product|用户画像|Personas|persona;personas;用户画像|1
product|用户旅程|Journey mapping|journey map;journey mapping;用户旅程|1
product|可用性测试|Usability testing|usability testing;usability test;可用性测试|2
product|交互设计|Interaction design|interaction design;交互设计|2
product|UI 设计|UI design|ui design;user interface design;界面设计;ui设计|2
product|UX 设计|UX design|ux design;user experience design;用户体验设计;ux设计|2
product|视觉设计|Visual design|visual design;视觉设计|1
product|产品设计|Product design|product design;产品设计|2
product|设计系统|Design systems|design system;design systems;设计系统|2
product|信息架构|Information architecture|information architecture;ia;信息架构|1
product|线框图|Wireframes|wireframe;wireframes;线框图|1
product|原型设计|Prototyping|prototype;prototyping;原型设计|2
product|无障碍设计|Accessibility|accessibility;a11y;无障碍设计|1
product|响应式设计|Responsive design|responsive design;响应式设计|1
product|移动端设计|Mobile design|mobile design;移动端设计|1
product|网页设计|Web design|web design;网页设计|1
product|品牌设计|Brand design|brand design;品牌设计|1
product|字体设计|Typography|typography;字体设计|1
product|敏捷开发|Agile|agile;敏捷开发|2
product|Scrum|Scrum|scrum|2
product|看板|Kanban|kanban;看板|1
product|冲刺计划|Sprint planning|sprint planning;冲刺计划|1
product|项目管理|Project management|project management;项目管理|2
product|需求优先级|Prioritization|prioritization;priority setting;需求优先级|1
product|用户增长|User growth|user growth;growth;用户增长|2
product|转化率优化|Conversion rate optimization|conversion rate optimization;cro;转化率优化|2
product|Figma|Figma|figma|3
product|Sketch|Sketch|sketch|1
product|Adobe XD|Adobe XD|adobe xd|1
product|Photoshop|Photoshop|photoshop;ps|1
product|Illustrator|Illustrator|illustrator;ai design tool|1
product|InDesign|InDesign|indesign|1
product|After Effects|After Effects|after effects;ae|1
product|Jira|Jira|jira|2
product|Confluence|Confluence|confluence|1
product|Notion|Notion|notion|1
product|Miro|Miro|miro|1
web3|区块链|Blockchain|blockchain;block chain;区块链|3
web3|以太坊|Ethereum|ethereum;eth;以太坊|3
web3|Solidity|Solidity|solidity|3
web3|EVM|EVM|evm;ethereum virtual machine;以太坊虚拟机|3
web3|智能合约|Smart contracts|smart contract;smart contracts;智能合约|3
web3|DeFi|DeFi|defi;decentralized finance;去中心化金融|2
web3|NFT|NFT|nft;non-fungible token;非同质化代币|1
web3|DAO|DAO|dao;decentralized autonomous organization;去中心化自治组织|1
web3|Layer 2|Layer 2|layer 2;layer2;l2;二层网络|2
web3|零知识证明|Zero-knowledge proofs|zero knowledge;zero-knowledge;zkp;zk;零知识证明|2
web3|账户抽象|Account abstraction|account abstraction;aa;账户抽象|2
web3|跨链|Cross-chain|cross-chain;cross chain;跨链|2
web3|预言机|Oracle|oracle;区块链预言机;链下数据|2
web3|链上分析|On-chain analysis|on-chain analysis;onchain analysis;链上分析|2
web3|代币经济|Tokenomics|tokenomics;token economics;代币经济|1
web3|密码学|Cryptography|cryptography;密码学|2
web3|共识机制|Consensus|consensus;consensus mechanism;共识机制|2
web3|节点运营|Node operations|node operations;node operation;节点运营|1
web3|质押|Staking|staking;质押|1
web3|钱包|Crypto wallets|crypto wallet;wallets;钱包|1
web3|MetaMask|MetaMask|metamask|1
web3|ethers.js|ethers.js|ethers.js;ethers|2
web3|web3.js|web3.js|web3.js;web3js|1
web3|Hardhat|Hardhat|hardhat|2
web3|Foundry|Foundry|foundry|2
web3|Truffle|Truffle|truffle|1
web3|IPFS|IPFS|ipfs;interplanetary file system|1
web3|The Graph|The Graph|the graph;subgraph;subgraphs|1
web3|Chainlink|Chainlink|chainlink|1
web3|跨链桥|Bridge|bridge;cross-chain bridge;跨链桥|1
web3|Rollup|Rollup|rollup;rollups|2
web3|ZK Rollup|ZK Rollup|zk rollup;zk-rollup|1
web3|Optimism|Optimism|optimism;op mainnet|1
web3|Arbitrum|Arbitrum|arbitrum|1
web3|安全审计|Security audit|security audit;smart contract audit;安全审计|2
web3|Dune|Dune|dune;dune analytics|1
web3|Etherscan|Etherscan|etherscan|1
business|业务分析|Business analysis|business analysis;业务分析|2
business|商业分析|Business analytics|business analytics;商业分析|2
business|运营管理|Operations management|operations management;运营管理|2
business|业务流程|Business process|business process;business processes;业务流程|1
business|流程优化|Process improvement|process improvement;process optimization;流程优化|1
business|供应链管理|Supply chain management|supply chain;supply chain management;供应链管理|2
business|采购|Procurement|procurement;采购|1
business|供应商管理|Vendor management|vendor management;供应商管理|1
business|客户成功|Customer success|customer success;客户成功|2
business|客户支持|Customer support|customer support;customer service;客户支持;客户服务|1
business|客户关系管理|CRM|crm;customer relationship management;客户关系管理|2
business|销售|Sales|sales;销售|2
business|商务拓展|Business development|business development;bd;商务拓展|2
business|大客户管理|Account management|account management;key account management;大客户管理|1
business|销售线索|Lead generation|lead generation;leads;销售线索|2
business|线索转化|Lead conversion|lead conversion;线索转化|1
business|商务谈判|Negotiation|negotiation;negotiations;商务谈判;谈判|1
business|合同管理|Contract management|contract management;合同管理|1
business|战略规划|Strategic planning|strategic planning;战略规划|2
business|目标与关键结果|OKR|okr;objectives and key results;目标与关键结果|2
business|关键绩效指标|KPI|kpi;key performance indicator;key performance indicators;关键绩效指标|2
business|预算管理|Budgeting|budgeting;budget management;预算管理|2
business|风险管理|Risk management|risk management;风险管理|2
business|合规|Compliance|compliance;合规|1
business|公司治理|Corporate governance|corporate governance;governance;公司治理|1
business|变更管理|Change management|change management;变更管理|1
business|标准作业流程|SOP|sop;standard operating procedure;标准作业流程|1
business|质量管理|Quality assurance|quality assurance;qa;质量管理|2
business|精益管理|Lean|lean;lean management;精益管理|1
business|六西格玛|Six Sigma|six sigma;六西格玛|1
business|库存管理|Inventory management|inventory management;库存管理|1
business|物流|Logistics|logistics;物流|1
business|企业资源计划|ERP|erp;enterprise resource planning;企业资源计划|1
business|Salesforce|Salesforce|salesforce|2
business|HubSpot|HubSpot|hubspot|2
business|Zendesk|Zendesk|zendesk|1
business|SAP|SAP|sap|1
business|Oracle|Oracle|oracle software|1
business|Microsoft 365|Microsoft 365|microsoft 365;office 365;m365|1
business|Google Workspace|Google Workspace|google workspace;g suite|1
business|B2B|B2B|b2b;business to business|1
business|B2C|B2C|b2c;business to consumer|1
business|SaaS|SaaS|saas;software as a service|2
business|PaaS|PaaS|paas;platform as a service|1
business|IaaS|IaaS|iaas;infrastructure as a service|1
business|商业模式|Business model|business model;商业模式|1
business|收入模型|Revenue model|revenue model;收入模型|1
business|定价策略|Pricing strategy|pricing strategy;定价策略|1
business|竞品分析|Competitive analysis|competitive analysis;competitor analysis;竞品分析|2
business|市场调研|Market research|market research;市场调研|2
business|行业研究|Industry research|industry research;行业研究|2
business|商业计划书|Business plan|business plan;商业计划书|1
business|董事会报告|Board reporting|board reporting;board report;董事会报告|1
business|投资人关系|Investor relations|investor relations;ir;投资人关系|1
business|合作伙伴管理|Partner management|partner management;partnership management;合作伙伴管理|1
business|渠道管理|Channel management|channel management;渠道管理|1
business|客户生命周期|Customer lifecycle|customer lifecycle;客户生命周期|1
business|客户留存|Retention|retention;customer retention;客户留存|2
business|客户获取成本|CAC|cac;customer acquisition cost;客户获取成本|1
business|客户终身价值|LTV|ltv;lifetime value;customer lifetime value;客户终身价值|1
business|净推荐值|NPS|nps;net promoter score;净推荐值|1
business|服务交付|Service delivery|service delivery;服务交付|1
business|服务水平协议|SLA|sla;service level agreement;服务水平协议|1
business|运营效率|Operational efficiency|operational efficiency;运营效率|1
business|成本控制|Cost control|cost control;成本控制|1
business|收入增长|Revenue growth|revenue growth;收入增长|1
business|利润分析|Profitability analysis|profitability analysis;利润分析|1
business|项目管理办公室|PMO|pmo;project management office;项目管理办公室|1
business|利益相关方管理|Stakeholder management|stakeholder management;利益相关方管理|2
business|跨部门协作|Cross-functional collaboration|cross-functional collaboration;cross functional;跨部门协作|2
business|流程自动化|Process automation|process automation;workflow automation;流程自动化|2
business|RPA|RPA|rpa;robotic process automation;机器人流程自动化|1
business|客户体验|Customer experience|customer experience;cx;客户体验|1
business|用户体验|User experience|user experience;ux;用户体验|2
market|数字营销|Digital marketing|digital marketing;数字营销|2
market|内容营销|Content marketing|content marketing;内容营销|2
market|社交媒体营销|Social media marketing|social media marketing;smm;社交媒体营销|2
market|搜索引擎优化|SEO|seo;search engine optimization;搜索引擎优化|3
market|搜索引擎营销|SEM|sem;search engine marketing;搜索引擎营销|2
market|Google Ads|Google Ads|google ads;google adwords;谷歌广告|1
market|Meta Ads|Meta Ads|meta ads;facebook ads;instagram ads|1
market|抖音广告|TikTok Ads|tiktok ads;抖音广告|1
market|邮件营销|Email marketing|email marketing;邮件营销|1
market|营销自动化|Marketing automation|marketing automation;营销自动化|2
market|Google Analytics|Google Analytics|google analytics;ga4;谷歌分析|2
market|转化率优化|CRO|conversion rate optimization;cro;转化率优化|2
market|文案写作|Copywriting|copywriting;copy writer;文案写作|2
market|品牌营销|Brand marketing|brand marketing;品牌营销|2
market|市场活动|Campaign management|campaign management;marketing campaign;市场活动|1
market|网红营销|Influencer marketing|influencer marketing;kol;网红营销|1
market|社区运营|Community management|community management;community manager;社区运营|2
market|公共关系|Public relations|public relations;pr;公共关系|1
market|活动营销|Event marketing|event marketing;活动营销|1
market|增长黑客|Growth hacking|growth hacking;增长黑客|1
market|用户获取|User acquisition|user acquisition;ua;用户获取|2
market|用户激活|Activation|activation;user activation;用户激活|1
market|用户留存|Retention|retention;user retention;用户留存|2
market|用户推荐|Referral|referral;referrals;user referral;用户推荐|1
market|生命周期营销|Lifecycle marketing|lifecycle marketing;生命周期营销|1
market|客户细分|Segmentation|segmentation;customer segmentation;客户细分|1
market|市场定位|Positioning|positioning;market positioning;市场定位|1
market|品牌定位|Brand positioning|brand positioning;品牌定位|1
market|营销漏斗|Marketing funnel|marketing funnel;funnel;营销漏斗|1
market|营销策略|Marketing strategy|marketing strategy;营销策略|2
market|内容策略|Content strategy|content strategy;内容策略|2
market|社交媒体|Social media|social media;社交媒体|1
market|微信公众号|WeChat Official Account|wechat official account;微信公众号|1
market|小红书运营|Xiaohongshu operations|xiaohongshu;小红书;小红书运营|1
market|短视频运营|Short-form video|short video;short-form video;短视频;短视频运营|1
market|直播运营|Live streaming operations|live streaming;livestream;直播;直播运营|1
market|品牌传播|Brand communications|brand communications;品牌传播|1
market|市场分析|Market analysis|market analysis;市场分析|2
market|消费者洞察|Consumer insights|consumer insights;消费者洞察|2
market|产品营销|Product marketing|product marketing;产品营销|2
market|增长策略|Growth strategy|growth strategy;增长策略|1
market|营销数据|Marketing analytics|marketing analytics;营销数据|2
market|SEO 优化|SEO optimization|seo optimization;seo优化;seo 优化|1
market|内容运营|Content operations|content operations;内容运营|2
market|社区增长|Community growth|community growth;社区增长|1
market|活动策划|Event planning|event planning;活动策划|1
market|广告投放|Media buying|media buying;ad buying;广告投放|1
market|广告优化|Ad optimization|ad optimization;广告优化|1
market|品牌管理|Brand management|brand management;品牌管理|1
finance|财务分析|Financial analysis|financial analysis;财务分析|3
finance|财务规划与分析|FP&A|fp&a;financial planning and analysis;财务规划与分析|2
finance|会计|Accounting|accounting;会计|2
finance|记账|Bookkeeping|bookkeeping;记账|1
finance|财务建模|Financial modeling|financial modeling;financial modelling;财务建模|2
finance|估值|Valuation|valuation;估值|2
finance|预算|Budgeting|budgeting;budget;预算|2
finance|预测分析|Forecast analysis|forecast analysis;forecasting;predictive analysis;预测分析;趋势预测|1
finance|差异分析|Variance analysis|variance analysis;差异分析|1
finance|GAAP|GAAP|gaap;us gaap;美国会计准则|1
finance|IFRS|IFRS|ifrs;国际财务报告准则|1
finance|审计|Audit|audit;auditing;审计|1
finance|税务|Tax|tax;taxation;税务|1
finance|资金管理|Treasury|treasury;资金管理|1
finance|现金流|Cash flow|cash flow;cashflow;现金流|2
finance|利润表|P&L|p&l;profit and loss;income statement;利润表|1
finance|资产负债表|Balance sheet|balance sheet;资产负债表|1
finance|成本会计|Cost accounting|cost accounting;成本会计|1
finance|内部控制|Internal controls|internal controls;internal control;内部控制|1
finance|投资分析|Investment analysis|investment analysis;投资分析|2
finance|投资组合管理|Portfolio management|portfolio management;投资组合管理|1
finance|风险管理|Risk management|risk management;风险管理|2
finance|CFA|CFA|cfa;chartered financial analyst|1
finance|CPA|CPA|cpa;certified public accountant|1
finance|ACCA|ACCA|acca|1
finance|财务报告|Financial reporting|financial reporting;财务报告|1
finance|管理会计|Management accounting|management accounting;管理会计|1
finance|成本控制|Cost control|cost control;成本控制|1
finance|盈利能力|Profitability|profitability;盈利能力|1
finance|毛利率|Gross margin|gross margin;毛利率|1
finance|净利润|Net income|net income;net profit;净利润|1
finance|EBITDA|EBITDA|ebitda|1
finance|ROI|ROI|roi;return on investment;投资回报率|2
finance|IRR|IRR|irr;internal rate of return;内部收益率|1
finance|NPV|NPV|npv;net present value;净现值|1
finance|融资|Fundraising|fundraising;financing;融资|2
finance|并购|M&A|m&a;mergers and acquisitions;并购|1
finance|尽职调查|Due diligence|due diligence;尽职调查|1
finance|财务尽职调查|Financial due diligence|financial due diligence;财务尽职调查|1
finance|财务系统|Financial systems|financial systems;财务系统|1
finance|SAP FI|SAP FI|sap fi;sap finance|1
finance|Oracle Financials|Oracle Financials|oracle financials|1
finance|QuickBooks|QuickBooks|quickbooks|1
finance|Xero|Xero|xero|1
finance|银行关系|Banking relationships|banking relationship;银行关系|1
finance|信用分析|Credit analysis|credit analysis;信用分析|1
finance|信用风险|Credit risk|credit risk;信用风险|1
finance|流动性管理|Liquidity management|liquidity management;流动性管理|1
finance|财务合规|Financial compliance|financial compliance;财务合规|1
finance|财务审计|Financial audit|financial audit;财务审计|1
soft|沟通能力|Communication|communication;communications;沟通;沟通能力|3
soft|英文沟通|English communication|english communication;英语沟通;英文沟通|3
soft|中文沟通|Chinese communication|chinese communication;中文沟通|1
soft|团队协作|Teamwork|teamwork;team collaboration;团队协作|2
soft|跨团队协作|Cross-team collaboration|cross-team collaboration;cross functional collaboration;跨团队协作|2
soft|领导力|Leadership|leadership;领导力|2
soft|团队管理|Team management|team management;团队管理|2
soft|问题解决|Problem solving|problem solving;problem-solving;问题解决|2
soft|批判性思维|Critical thinking|critical thinking;批判性思维|1
soft|时间管理|Time management|time management;时间管理|1
soft|适应能力|Adaptability|adaptability;adaptation;适应能力|1
soft|主人翁意识|Ownership|ownership;主人翁意识|1
soft|注重细节|Attention to detail|attention to detail;detail oriented;注重细节|1
soft|演示能力|Presentation skills|presentation;presentation skills;演示能力|1
soft|公开演讲|Public speaking|public speaking;公开演讲|1
soft|谈判能力|Negotiation|negotiation skills;negotiation;谈判能力|1
soft|导师制|Mentoring|mentoring;mentorship;导师制|1
soft|教练|Coaching|coaching;教练|1
soft|技术写作|Technical writing|technical writing;技术写作|2
soft|文档能力|Documentation|documentation;文档能力|1
soft|跨文化沟通|Cross-cultural communication|cross-cultural communication;跨文化沟通|1
soft|项目管理能力|Project coordination|project coordination;项目管理能力|1
soft|组织能力|Organizational skills|organizational skills;组织能力|1
soft|多任务处理|Multitasking|multitasking;多任务处理|1
soft|压力管理|Stress management|stress management;压力管理|1
soft|客户沟通|Client communication|client communication;customer communication;客户沟通|2
soft|商业敏感度|Business acumen|business acumen;商业敏感度|1
soft|分析思维|Analytical thinking|analytical thinking;analytical skills;分析思维|2
soft|战略思维|Strategic thinking|strategic thinking;战略思维|2
soft|创新思维|Innovation|innovation;creative thinking;创新思维|1
soft|自主学习|Self-learning|self-learning;self learning;自主学习|1
soft|远程协作|Remote collaboration|remote collaboration;remote teamwork;远程协作|2
soft|异步沟通|Async communication|async communication;asynchronous communication;异步沟通|1
soft|会议主持|Meeting facilitation|meeting facilitation;meeting host;会议主持|1
soft|冲突解决|Conflict resolution|conflict resolution;冲突解决|1
soft|反馈能力|Giving feedback|feedback;giving feedback;反馈能力|1
soft|客户导向|Customer focus|customer focus;customer oriented;客户导向|1
soft|结果导向|Results orientation|results oriented;results-driven;结果导向|1
soft|主动性|Initiative|initiative;proactive;主动性|1
soft|职业道德|Professional ethics|professional ethics;职业道德|1
soft|保密意识|Confidentiality|confidentiality;保密意识|1
infra|Helm|Helm|helm;helm charts|2
infra|Argo CD|Argo CD|argo cd;argocd|2
infra|CircleCI|CircleCI|circleci|1
infra|Travis CI|Travis CI|travis ci;travisci|1
infra|AWS Lambda|AWS Lambda|aws lambda;lambda|1
infra|AWS ECS|AWS ECS|aws ecs;ecs|1
infra|AWS EKS|AWS EKS|aws eks;eks|1
infra|Google Kubernetes Engine|GKE|gke;google kubernetes engine|1
infra|Azure Kubernetes Service|AKS|aks;azure kubernetes service|1
infra|Amazon S3|Amazon S3|amazon s3;s3|2
infra|CloudFront|CloudFront|cloudfront;amazon cloudfront|1
infra|CDN|CDN|cdn;content delivery network;内容分发网络|2
infra|DNS|DNS|dns;domain name system|1
infra|VPN|VPN|vpn;virtual private network|1
infra|负载均衡|Load balancing|load balancing;load balancer|2
infra|自动扩缩容|Autoscaling|autoscaling;auto scaling;自动扩缩容|1
infra|高可用|High availability|high availability;ha;高可用|2
infra|灾备|Disaster recovery|disaster recovery;dr;灾备|1
infra|站点可靠性工程|SRE|sre;site reliability engineering;站点可靠性工程|2
infra|事故响应|Incident response|incident response;incident management;事故响应|1
infra|监控告警|Monitoring and alerting|monitoring and alerting;monitoring & alerting;监控告警;监控与告警;告警系统|2
infra|日志管理|Log management|log management;logging;日志管理|1
infra|Prometheus|Prometheus|prometheus|2
infra|Grafana|Grafana|grafana|2
infra|Datadog|Datadog|datadog|1
infra|New Relic|New Relic|new relic|1
infra|Sentry|Sentry|sentry|1
infra|OpenTelemetry|OpenTelemetry|opentelemetry;otel|1
infra|ELK|ELK|elk;elasticsearch logstash kibana|1
infra|Splunk|Splunk|splunk|1
infra|容器编排|Container orchestration|container orchestration;容器编排|1
infra|基础设施即代码|Infrastructure as code|infrastructure as code;iac;基础设施即代码|2
infra|蓝绿部署|Blue-green deployment|blue-green deployment;blue green deployment;蓝绿部署|1
infra|金丝雀发布|Canary release|canary release;canary deployment;金丝雀发布|1
infra|滚动发布|Rolling deployment|rolling deployment;rolling release;滚动发布|1
infra|服务网格|Service mesh|service mesh;服务网格|1
infra|Istio|Istio|istio|1
infra|Envoy|Envoy|envoy;envoy proxy|1
infra|API 网关|API gateway|api gateway;api网关|1
infra|消息队列|Message queue|message queue;mq;消息队列|2
infra|Apache Flink|Flink|flink;apache flink|1
infra|Apache Hive|Hive|hive;apache hive|1
infra|Presto|Presto|presto;presto sql|1
infra|Trino|Trino|trino|1
infra|VMware|VMware|vmware|1
infra|Windows Server|Windows Server|windows server|1
infra|Alibaba Cloud|Alibaba Cloud|alibaba cloud;阿里云|1
infra|Tencent Cloud|Tencent Cloud|tencent cloud;腾讯云|1
infra|Huawei Cloud|Huawei Cloud|huawei cloud;华为云|1
tech|OAuth 2.0|OAuth 2.0|oauth 2.0;oauth2.0|1
tech|SAML|SAML|saml|1
tech|Webhooks|Webhooks|webhook;webhooks|1
tech|JSON|JSON|json|1
tech|XML|XML|xml|1
tech|YAML|YAML|yaml|1
tech|Markdown|Markdown|markdown;md|1
tech|正则表达式|Regular expressions|regex;regular expression;regular expressions;正则表达式|2
tech|爬虫|Web scraping|web scraping;scraper;crawler;爬虫|1
tech|数据抓取|Data scraping|data scraping;data extraction;数据抓取|1
tech|命令行|Command line|command line;cli;terminal;命令行|1
tech|版本控制|Version control|version control;版本控制|2
tech|DevOps|DevOps|devops|2
tech|DevSecOps|DevSecOps|devsecops|1
tech|平台工程|Platform engineering|platform engineering;平台工程|1
tech|安全工程|Security engineering|security engineering;安全工程|1
tech|渗透测试|Penetration testing|penetration testing;pen test;渗透测试|1
tech|漏洞管理|Vulnerability management|vulnerability management;漏洞管理|1
tech|加密|Encryption|encryption;加密|1
tech|身份认证|Authentication|authentication;auth;身份认证|2
tech|授权|Authorization|authorization;authz;授权|1
tech|日志分析|Log analysis|log analysis;日志分析|1
tech|故障排查|Troubleshooting|troubleshooting;debugging;故障排查|1
tech|容量规划|Capacity planning|capacity planning;容量规划|1
tech|网络协议|Network protocols|network protocols;tcp/ip;http;网络协议|1
tech|CDN 缓存|CDN caching|cdn caching;edge caching|1
tech|消息中间件|Message middleware|message middleware;消息中间件|1
tech|事件驱动架构|Event-driven architecture|event-driven architecture;event driven architecture;事件驱动架构|1
tech|领域驱动设计|Domain-driven design|domain-driven design;ddd;领域驱动设计|1
tech|设计模式|Design patterns|design patterns;设计模式|1
tech|面向对象编程|Object-oriented programming|object-oriented programming;oop;面向对象编程|1
tech|函数式编程|Functional programming|functional programming;fp;函数式编程|1
tech|代码重构|Refactoring|refactoring;代码重构|1
tech|技术文档|Technical documentation|technical documentation;技术文档|1
business|客户满意度|Customer satisfaction|customer satisfaction;csat;客户满意度|1
business|客户投诉处理|Complaint handling|complaint handling;客户投诉处理|1
business|服务运营|Service operations|service operations;服务运营|1
business|合同谈判|Contract negotiation|contract negotiation;合同谈判|1
business|供应商评估|Vendor evaluation|vendor evaluation;供应商评估|1
business|采购管理|Purchasing|purchasing;采购管理|1
business|业务连续性|Business continuity|business continuity;业务连续性|1
business|质量管理体系|QMS|qms;quality management system;质量管理体系|1
business|数据隐私|Data privacy|data privacy;隐私保护;数据隐私|2
business|GDPR|GDPR|gdpr|1
business|个人信息保护|Personal data protection|personal data protection;个人信息保护|1
market|增长实验|Growth experiments|growth experiment;growth experiments;增长实验|1
market|营销归因|Marketing attribution|marketing attribution;营销归因|1
market|广告归因|Ad attribution|ad attribution;广告归因|1
market|用户反馈|User feedback|user feedback;用户反馈|1
market|口碑营销|Word-of-mouth marketing|word of mouth;word-of-mouth;口碑营销|1
market|内容日历|Content calendar|content calendar;内容日历|1
market|品牌声量|Brand awareness|brand awareness;品牌声量|1
market|线索评分|Lead scoring|lead scoring;线索评分|1
market|营销 ROI|Marketing ROI|marketing roi;营销 roi;营销投资回报率|1
market|客户旅程|Customer journey|customer journey;客户旅程|2
market|社区运营|Community management|community management;community manager;community operations;community ops;community specialist;社区运营;社群运营;社群管理;社区管理|3
market|内容运营|Content operations|content operations;content ops;内容运营;内容管理|3
market|用户运营|User operations|user operations;user ops;用户运营;用户管理;用户维系|3
market|产品运营|Product operations|product operations;product ops;产品运营|3
market|活动运营|Event operations|event operations;event ops;活动运营;活动管理|2
market|数据运营|Data operations|data operations;data ops;数据运营;数据化运营|2
market|私域运营|Private domain operations|private domain operations;private domain ops;私域运营;私域|2
market|会员运营|Membership operations|membership operations;membership ops;会员运营;会员管理|2
market|新媒体运营|New media operations|new media operations;new media ops;新媒体运营;新媒体|2
market|电商运营|E-commerce operations|ecommerce operations;e-commerce operations;电商运营;电商管理|2
market|增长运营|Growth operations|growth operations;growth ops;增长运营;增长策略|2
market|社区管理|Community management|community management;community manager;社区管理;社群管理;社群运营;社区运营|2
data|数据分析|Data analysis|data analysis;data analytics;data insights;数据分析;数据洞察;数据研究|3
data|机器学习|Machine learning|machine learning;ml;machine learning algorithms;机器学习;机器学习算法|3
product|用户研究|User research|user research;user studies;user interviews;用户研究;用户调研;用户访谈|3
product|产品经理|Product manager|product manager;product owner;产品经理;产品负责人|3
product|利益相关方管理|Stakeholder management|stakeholder management;stakeholder communication;利益相关方管理;相关方管理|2
business|跨部门协作|Cross-functional collaboration|cross-functional collaboration;cross functional;cross-functional;跨部门协作;跨职能协作|2
business|客户关系管理|CRM|crm;customer relationship management;客户关系管理;客户管理|2
market|数字营销|Digital marketing|digital marketing;digital marketing strategy;数字营销;数字化营销|2
market|社交媒体营销|Social media marketing|social media marketing;smm;社交媒体营销;社媒营销|2
business|任务执行|Task execution|task execution;execution;execution ability;任务执行;执行力;执行能力|3
business|项目信息跟踪|Project information tracking|project information tracking;project tracking;information tracking;项目信息跟踪;项目跟踪;信息跟踪|2
business|规则研究与分析|Rules research and analysis|rules research;rule research;rules analysis;rule analysis;规则研究;规则分析;规则研究与分析|2
business|结果记录|Result tracking|result tracking;result recording;record results;结果记录;结果跟踪;记录结果|2
business|信息搜集|Information gathering|information gathering;information collection;research gathering;信息搜集;信息收集;资料搜集;资料整理;资料收集|2
business|社区活动执行|Community event execution|community event execution;community events;event execution;社区活动执行;社区活动;活动执行|2
business|内容策划与组织|Content planning and organization|content planning;content organization;content planning and organization;内容策划;内容组织;内容策划与组织|2
business|用户沟通|User communication|user communication;customer communication;用户沟通;客户沟通;沟通协作|2
business|用户反馈与问题收集|User feedback|user feedback;issue collection;feedback collection;用户反馈;问题收集;反馈收集;用户反馈与问题收集|2
business|进度管理|Progress management|progress management;schedule management;project progress;进度管理;项目进度;进度跟踪|2
business|多项目并行跟进|Multi-project coordination|multi-project coordination;multi project coordination;multiple project tracking;多项目并行;多项目跟进;多项目并行跟进|2
business|问题反馈与协作|Issue reporting and collaboration|issue reporting;feedback collaboration;collaboration;问题反馈;反馈协作;问题反馈与协作|1
business|Crypto 行业认知|Crypto industry knowledge|crypto industry knowledge;crypto industry;cryptocurrency industry;crypto sector;加密行业;加密行业认知;crypto行业;加密市场|2
business|Web3 项目实践|Web3 project experience|web3 project experience;web3 projects;web3项目;web3项目实践;区块链项目经验|2
market|用户增长|User growth|user growth;growth marketing;user acquisition;推广拉新;拉新;用户获取;用户增长|3
market|社区运营|Community management|community management;community manager;community operations;community ops;community specialist;社区运营;社群运营;社群管理;社区管理|3
market|内容运营|Content operations|content operations;content ops;内容运营;内容管理|3
market|用户反馈|User feedback|user feedback;feedback collection;用户反馈;问题收集;反馈收集;用户反馈与问题收集|2
market|社交媒体|Social media|social media;social media trends;社交媒体;社媒|2
web3|预测市场|Prediction Market|prediction market;prediction markets;event contracts;预测市场;事件合约|3
web3|Polymarket|Polymarket|polymarket|2
web3|Kalshi|Kalshi|kalshi|2
web3|市场热点追踪|Market trend tracking|market trend tracking;market trends;trend tracking;hot topic tracking;市场热点追踪;热点追踪;市场趋势追踪;趋势追踪|2
web3|事件筛选|Event selection|event selection;event screening;market selection;事件筛选;选题筛选;市场筛选|2
web3|盘口配置|Market configuration|market configuration;odds configuration;market setup;盘口配置;赔率配置;市场配置|2
web3|数据监控与分析|Data monitoring and analysis|data monitoring and analysis;data monitoring;monitoring and analysis;数据监控与分析;数据监控分析;监控与分析|3
web3|潜在交易机会挖掘|Trading opportunity research|trading opportunity research;trading opportunities;opportunity discovery;alpha research;潜在交易机会挖掘;交易机会挖掘;机会挖掘|2
web3|交易激励活动|Trading incentive campaigns|trading incentive campaigns;trading incentives;incentive campaigns;交易激励活动;交易激励;激励活动|2
product|产品体验优化|Product experience optimization|product experience optimization;user experience optimization;ux optimization;产品体验优化;用户体验优化;体验优化|2
soft|英语读写流利|English reading and writing|english reading and writing;english reading;english writing;english proficiency;英语读写流利;英语读写;英文读写流利;英文读写|3
finance|金融市场及全球社交媒体趋势分析|Financial market and global social media trend analysis|financial market and global social media trend analysis;financial markets;global social media trends;market trend analysis;金融市场;全球社交媒体趋势分析;金融市场趋势分析;全球社交媒体趋势|2


market|舆情监测|Public opinion monitoring|public opinion monitoring;opinion monitoring;social listening;舆情监测;舆情监控;舆情监听|3
market|舆情管理|Public opinion management|public opinion management;opinion management;舆情管理;舆情运营|2
market|舆情分析|Public opinion analysis|public opinion analysis;opinion analysis;舆情分析;舆情洞察|2
market|舆情风险|Public opinion risk|public opinion risk;opinion risk;舆情风险;舆情危机|2
market|舆情报告|Public opinion report|public opinion report;opinion report;舆情报告;舆情周报;舆情日报|1
market|舆情事件|Public opinion incident|public opinion incident;opinion incident;舆情事件;突发舆情|2
market|社交媒体监测|Social media monitoring|social media monitoring;social listening;社交媒体监测;社媒监测;社区舆情|2
market|热点事件|Trending topics|trending topics;hot topics;热点事件;行业热点;市场热点|1
market|社交媒体平台|Social media platforms|social media platforms;social platforms;x/twitter;twitter;telegram;reddit;社交媒体平台;社交平台|2
market|社区平台|Community platforms|community platforms;community platform;社区平台;社区社区|1
business|突发事件处理|Incident response|incident response;incident management;crisis response;突发事件处理;突发舆情处理;舆情危机处理|2
business|信息收集|Information gathering|information gathering;information collection;信息收集;情报收集;资料收集;舆情收集|2
soft|轮班制|Shift work|shift work;rotating shifts;shift rotation;三班倒;轮班制;轮班|2
soft|响应及时|Responsiveness|responsiveness;timely response;快速响应;响应及时|1
soft|英语读写|English reading and writing|english reading and writing;english reading;english writing;英语读写;英文读写|2
business|招聘|Recruiting|recruitment;recruiting;talent acquisition;人才招聘;招聘工作;招聘专员|3
business|人才寻访|Talent Sourcing|talent sourcing;candidate sourcing;candidate search;人才搜寻;候选人寻访;人才获取|2
business|简历筛选|Resume Screening|resume screening;cv screening;resume review;简历筛选;简历初筛;简历评估|2
business|面试安排|Interview Coordination|interview scheduling;interview coordination;安排面试;面试协调;面试组织|2
business|招聘渠道|Recruitment Channels|recruitment channels;recruiting channels;sourcing channels;招聘渠道;人才渠道;招聘平台|2
business|雇主品牌|Employer Branding|employer branding;employer brand;雇主品牌;雇主品牌建设|2
business|员工关系|Employee Relations|employee relations;employee relationship;员工关系;劳动关系|2
business|入离职管理|Onboarding and Offboarding|onboarding;offboarding;onboarding and offboarding;入职管理;离职管理;入离职管理|2
business|培训与发展|Training and Development|training and development;learning and development;l&d;培训发展;员工培训;培训体系|2
business|薪酬福利|Compensation and Benefits|compensation and benefits;compensation & benefits;comp and benefits;c&b;薪酬福利;薪资福利;薪酬体系|2
business|绩效管理|Performance Management|performance management;performance review;绩效考核;绩效管理;绩效评估|2
business|人力资源|Human Resources|human resources;hr;人事;人力资源;人力资源管理|2
business|HRBP|HR Business Partner|hr business partner;hrbp;人力资源业务伙伴;人力资源伙伴|2
business|组织发展|Organizational Development|organizational development;organisation development;od;组织发展;组织与人才发展|2
business|劳动法|Labor Law|labor law;labour law;employment law;劳动法;劳动法规;劳动合同法|2
business|员工档案|Employee Records|employee records;personnel files;员工档案;人事档案;员工档案管理|1
business|考勤管理|Attendance Management|attendance management;attendance;time tracking;考勤管理;考勤;出勤管理|1
business|企业文化|Corporate Culture|corporate culture;company culture;企业文化;组织文化|1
business|合同审查|Contract Review|contract review;contract review and negotiation;合同审查;合同审核;审阅合同|2
business|法律合规|Legal Compliance|legal compliance;legal and compliance;regulatory compliance;法律合规;法律法规;法律与合规|2
business|法律检索|Legal Research|legal research;法律检索;法规检索;法律研究|1
business|知识产权|Intellectual Property|intellectual property;intellectual property rights;ipr;知识产权;知识产权管理|2
business|诉讼|Litigation|litigation;lawsuits;dispute resolution;诉讼;诉讼案件;争议解决|2
business|数据合规|Data Compliance|data compliance;privacy compliance;数据合规;数据隐私合规;隐私合规|2
business|隐私政策|Privacy Policy|privacy policy;privacy notice;隐私政策;隐私声明|1
business|反洗钱|Anti-Money Laundering|anti-money laundering;aml;反洗钱;反洗钱合规|2
business|了解你的客户|Know Your Customer|know your customer;kyc;客户尽职调查;了解你的客户|2
business|制裁筛查|Sanctions Screening|sanctions screening;screening sanctions;制裁筛查;制裁名单筛查|2
business|监管沟通|Regulatory Communication|regulatory communication;regulator communication;监管沟通;监管对接;与监管沟通|2
business|行政支持|Administrative Support|administrative support;admin support;行政支持;行政协助;行政事务|1
business|办公室管理|Office Management|office management;office administration;办公室管理;办公管理;办公室运营|1
business|日程安排|Calendar Management|calendar management;calendar scheduling;scheduling;日程安排;日程管理;会议安排|1
business|会议纪要|Meeting Minutes|meeting minutes;meeting notes;会议纪要;会议记录|1
business|差旅安排|Travel Arrangement|travel arrangement;travel management;差旅安排;差旅管理;出差安排|1
business|文档管理|Document Management|document management;file management;文档管理;文件管理;文档整理|1
business|数据录入|Data Entry|data entry;data input;数据录入;录入数据;信息录入|1
business|档案管理|Records Management|records management;record keeping;档案管理;档案整理;资料归档|1
business|客户服务|Customer Service|customer service;client service;客服;客户服务;客户咨询|2
business|售后支持|After-sales Support|after-sales support;aftersales;post-sales support;售后支持;售后服务|2
business|投诉处理|Complaint Handling|complaint handling;complaint management;投诉处理;客户投诉;处理投诉|2
business|客户拜访|Client Visits|client visits;customer visits;客户拜访;拜访客户;客户走访|1
business|销售漏斗|Sales Pipeline|sales funnel;sales pipeline;pipeline management;销售漏斗;销售管道;销售流程|2
business|销售预测|Sales Forecasting|sales forecasting;sales forecast;销售预测;销售预估|1
business|渠道销售|Channel Sales|channel sales;渠道销售;渠道业务|1
business|商务报价|Commercial Quotation|commercial quotation;quotation;商务报价;报价;报价管理|1
business|投标管理|Bid Management|bid management;tender management;bid preparation;投标管理;招投标;投标|2
product|平面设计|Graphic Design|graphic design;visual communication;平面设计;视觉传达|2
product|品牌视觉设计|Brand Visual Design|brand visual design;brand design;brand visual;品牌视觉设计;品牌视觉;品牌设计|2
market|视频剪辑|Video Editing|video editing;video editor;视频剪辑;视频编辑;剪辑|2
product|动效设计|Motion Design|motion design;motion graphics;动效设计;动效;动画设计|2
product|美术指导|Art Direction|art direction;art director;美术指导;艺术指导|2
product|创意设计|Creative Design|creative design;创意设计;创意视觉|1
product|3D 设计|3D Design|3d design;3d modeling;三维设计;3d设计;3d建模|1
product|插画|Illustration|illustration;插画;插画设计|1
product|排版|Typography|typography;typesetting;排版;版式设计;字体排版|1
product|摄影|Photography|photography;photo shooting;摄影;拍摄|1
market|内容创作|Content Creation|content creation;content production;内容创作;内容生产;创作内容|2
market|选题策划|Topic Planning|topic planning;content topic planning;选题策划;内容选题;选题|2
market|脚本撰写|Scriptwriting|scriptwriting;script writing;脚本撰写;脚本创作;写脚本|2
market|编辑|Editing|editing;editor;内容编辑;文字编辑;编辑|1
market|校对|Proofreading|proofreading;proofread;校对;文字校对|1
market|翻译|Translation|translation;translating;翻译;笔译|1
market|本地化|Localization|localization;localisation;本地化;本地化翻译;本地化运营|2
market|视频制作|Video Production|video production;video producing;视频制作;视频创作|1
market|用户互动|User Engagement|user engagement;community engagement;用户互动;社群互动;用户活跃|2
market|内容分发|Content Distribution|content distribution;multi-channel distribution;内容分发;多平台分发;内容推广|1
market|内容审核|Content Moderation|content moderation;content review;内容审核;内容安全;社区审核|2
tech|软件测试|Software Testing|software testing;software test;qa;quality assurance;软件测试;质量保证|2
tech|自动化测试|Test Automation|test automation;automated testing;自动化测试|2
tech|测试用例|Test Cases|test cases;test case;测试用例;测试案例;用例设计|1
tech|缺陷管理|Defect Management|defect management;defect tracking;bug management;缺陷管理;缺陷跟踪;bug管理|1
tech|API 设计|API Design|api design;interface design;api设计;接口设计|1
tech|系统运维|System Operations|system operations;system administration;系统运维;运维;系统管理|2
tech|技术支持|Technical Support|technical support;tech support;技术支持|2
tech|IT 支持|IT Support|it support;desktop support;helpdesk;it支持;桌面支持;信息技术支持|2
data|商业智能|Business Intelligence|business intelligence;bi;商业智能;商业智能分析|2
business|战略分析|Strategic Analysis|strategic analysis;战略分析;战略研究|1
web3|空投|Airdrop|airdrop;airdrop campaign;空投;空投活动;空投任务|2
web3|测试网|Testnet|testnet;test network;测试网;测试网络|1
web3|主网|Mainnet|mainnet;main network;主网;主网络|1
web3|代币发行|Token Generation Event|token generation event;token launch;tge;代币发行;代币发布;代币上线|2
web3|做市|Market Making|market making;market maker;做市;做市商;流动性提供|2
web3|流动性挖矿|Liquidity Mining|liquidity mining;流动性挖矿;流动性激励|2
web3|现货交易|Spot Trading|spot trading;spot market;现货交易;现货市场|1
web3|合约交易|Derivatives Trading|derivatives trading;futures trading;合约交易;衍生品交易;期货交易|2
web3|量化交易|Quantitative Trading|quantitative trading;quant trading;量化交易;量化策略|2
web3|链上数据|On-chain Data|on-chain data;onchain data;链上数据;链上信息|2
web3|女巫检测|Sybil Detection|sybil detection;sybil resistance;sybil analysis;女巫检测;女巫识别;防女巫|2
web3|生态合作|Ecosystem Partnerships|ecosystem partnerships;ecosystem partnership;生态合作;生态伙伴;生态拓展|2
web3|项目研究|Project Research|project research;protocol research;项目研究;项目调研;协议研究|2
business|合同起草|Contract Drafting|contract drafting;draft contracts;contract writing;合同起草;起草合同;合同撰写|2
business|法律咨询|Legal Advisory|legal advisory;legal consultation;legal advice;法律咨询;法律意见;法律支持|2
business|人才盘点|Talent Review|talent review;talent assessment;人才盘点;人才评估|2
business|招聘漏斗|Recruiting Funnel|recruiting funnel;hiring funnel;招聘漏斗;招聘转化|1
business|员工敬业度|Employee Engagement|employee engagement;员工敬业度;员工参与度|1
product|课程设计|Course Design|course design;curriculum design;课程设计;课程开发|2
product|教学设计|Instructional Design|instructional design;teaching design;教学设计;课程教学设计|2
product|学习管理系统|Learning Management System|learning management system;lms;学习管理系统;在线学习平台|1
product|Canva|Canva|canva|1
product|Asana|Asana|asana|1
product|Trello|Trello|trello|1
product|ClickUp|ClickUp|clickup|1
product|Adobe Premiere Pro|Adobe Premiere Pro|adobe premiere pro;premiere pro;pr;pr剪辑|2
product|Final Cut Pro|Final Cut Pro|final cut pro;final cut;fcp|1
product|DaVinci Resolve|DaVinci Resolve|davinci resolve;达芬奇剪辑|1
product|CapCut|CapCut|capcut;剪映|2
market|Hootsuite|Hootsuite|hootsuite|1
market|Buffer|Buffer|buffer app;buffer social|1
market|Sprout Social|Sprout Social|sprout social|1
market|WordPress|WordPress|wordpress|1
tech|Selenium|Selenium|selenium|2
tech|Postman|Postman|postman|1
tech|Workday|Workday|workday|1
business|SAP SuccessFactors|SAP SuccessFactors|sap successfactors;successfactors|1
business|Greenhouse|Greenhouse|greenhouse ats;greenhouse recruiting|1
business|Intercom|Intercom|intercom|1
business|Freshdesk|Freshdesk|freshdesk|1`;
  const dictionary = new Map();
  raw.trim().split(/\r?\n/).forEach((line, index) => {
    const [category, zh, en, aliasText = '', weightText = '1'] = line.split('|').map((value) => value.trim());
    if (!category || !zh || !en) return;
    const id = en.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || `keyword-${index}`;
    const aliases = [...new Set([zh, en, ...aliasText.split(';')].map((value) => value.trim()).filter(Boolean))];
    const weight = Math.min(5, Math.max(1, Number(weightText) || 1));
    if (dictionary.has(id)) {
      const existing = dictionary.get(id);
      const categoryPriority = { tech: 0, infra: 1, data: 2, product: 3, web3: 4, business: 5, market: 6, finance: 7, soft: 8 };
      existing.aliases = [...new Set([...existing.aliases, ...aliases])];
      existing.weight = Math.max(existing.weight, weight);
      if ((categoryPriority[category] || 0) > (categoryPriority[existing.category] || 0)) existing.category = category;
      return;
    }
    dictionary.set(id, { id, canonical: { zh, en }, aliases, category, weight });
  });
  return [...dictionary.values()];
})();
/* Evidence groups turn a keyword into a set of related resume signals.
 * A keyword is evidence-covered when at least minimumGroups distinct groups
 * appear in the resume. This is rule-based and still fully explainable.
 */
window.KEYWORD_EVIDENCE_GROUPS = {
  'public-opinion-monitoring': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '监测与追踪', en: 'Monitoring & tracking' }, any: ['舆情', '监测', '监控', '监听', '追踪', '跟踪', '捕捉', '热点', '趋势', '市场消息', '信息收集', '信息搜集', 'social listening'] },
      { label: { zh: '社交媒体与社区', en: 'Social media & communities' }, any: ['社交媒体', '社媒', '社交平台', '社区', '社群', '群', 'X', 'Twitter', 'Telegram', 'TG', 'Reddit', 'Discord', '聊天室', '频道'] },
      { label: { zh: '整理与输出', en: 'Reporting & synthesis' }, any: ['整理', '报告', '复盘', '数据整理', '内容规划', '内容产出', '推文', '分类'] }
    ]
  },
  'public-opinion-management': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '社群运营', en: 'Community operations' }, any: ['社群', '社区', '社区运营', '社群运营', '社群搭建', '社群管理', '群管理'] },
      { label: { zh: '内容与活动', en: 'Content & events' }, any: ['内容运营', '内容规划', '内容产出', '活动筹备', '活动执行', '交流会', '宣发'] },
      { label: { zh: '沟通协作', en: 'Communication' }, any: ['对接', '反馈', '咨询', '协作', '协调', '合作'] }
    ]
  },
  'public-opinion-risk': {
    minimumGroups: 3,
    groups: [
      { label: { zh: '风险与问题', en: 'Risks & issues' }, any: ['舆情风险', '风险', '危机', '异常', '问题反馈', 'bug反馈', '投诉', '负面'] },
      { label: { zh: '跟进与处理', en: 'Follow-up & handling' }, any: ['跟进', '处理', '响应', '解决', '复盘', '反馈'] },
      { label: { zh: '舆情场景', en: 'Public opinion context' }, any: ['舆情', '社交媒体', '社交平台', '社区', '社群', 'X', 'Twitter', 'Telegram', 'Reddit'], required: true }
    ]
  },
  'public-opinion-incident': {
    minimumGroups: 3,
    groups: [
      { label: { zh: '事件与突发情况', en: 'Incidents' }, any: ['舆情事件', '突发事件', '危机事件', '突发', '负面', '问题集中', 'bug反馈', '问题反馈'] },
      { label: { zh: '响应与复盘', en: 'Response & review' }, any: ['处理', '跟进', '响应', '复盘', '解决'] },
      { label: { zh: '舆情场景', en: 'Public opinion context' }, any: ['舆情', '社交媒体', '社交平台', '社区', '社群', 'X', 'Twitter', 'Telegram', 'Reddit'], required: true }
    ]
  },
  'user-feedback': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '反馈来源', en: 'Feedback signals' }, any: ['用户反馈', '问题反馈', 'bug反馈', '产品咨询', '咨询', '投诉', '反馈'] },
      { label: { zh: '收集与处理', en: 'Collection & handling' }, any: ['收集', '整理', '跟进', '处理', '答疑', '解答'] },
      { label: { zh: '用户场景', en: 'User context' }, any: ['用户', '客户', '社群', '社区', '群', '公测'] }
    ]
  },
  'information-gathering': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '搜集动作', en: 'Research actions' }, any: ['搜集', '收集', '检索', '整理', '捕捉'] },
      { label: { zh: '信息对象', en: 'Information context' }, any: ['信息', '市场消息', '行业热点', '热点', '趋势', '推文', '行业', '公开持仓'] },
      { label: { zh: '整理输出', en: 'Synthesis output' }, any: ['整理', '报告', '分类', '复盘', '数据整理'] }
    ]
  },
  communication: {
    minimumGroups: 2,
    groups: [
      { label: { zh: '沟通动作', en: 'Communication actions' }, any: ['沟通', '对接', '协作', '协调', '合作'] },
      { label: { zh: '沟通对象', en: 'Audience' }, any: ['用户', '客户', 'KOL', '博主', '创作者', '团队', '社群', '社区'] },
      { label: { zh: '沟通场景', en: 'Communication context' }, any: ['咨询', '答疑', '反馈', '交流会', '发布', '跟进'] }
    ]
  },
  'community-management': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '社群与社区', en: 'Community context' }, any: ['社群', '社区', '群', 'Telegram', 'TG', 'Reddit', 'Discord'] },
      { label: { zh: '运营动作', en: 'Operations actions' }, any: ['运营', '搭建', '管理', '维护', '日常'] },
      { label: { zh: '互动与内容', en: 'Engagement & content' }, any: ['话题引导', '内容推广', '创作者对接', '答疑', '活动', '内容规划'] }
    ]
  },
  'community-platforms': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '平台名称', en: 'Platforms' }, any: ['Telegram', 'TG', 'Reddit', 'Discord', 'X', 'Twitter', 'Binance', '币安'] },
      { label: { zh: '社区场景', en: 'Community context' }, any: ['社区', '社群', '群', '频道', '聊天室'] }
    ]
  },
  'crypto-industry-knowledge': {
    minimumGroups: 2,
    groups: [
      { label: { zh: 'Crypto / Web3 上下文', en: 'Crypto / Web3 context' }, any: ['Crypto', 'Web3', '加密', '区块链', 'Binance', '币安', 'Ethereum', 'ETH'] },
      { label: { zh: '行业实践', en: 'Industry practice' }, any: ['项目', '交易所', '空投', '生态', '行业', '智能合约'] }
    ]
  },
  'trending-topics': {
    minimumGroups: 2,
    groups: [
      { label: { zh: '热点信息', en: 'Trend signals' }, any: ['热点', '热门', '趋势', '市场消息'] },
      { label: { zh: '捕捉与追踪', en: 'Tracking actions' }, any: ['捕捉', '追踪', '跟踪', '搜集', '跟进'] },
      { label: { zh: '平台与内容', en: 'Platforms & content' }, any: ['X', 'Twitter', '推文', '社交媒体', '内容'] }
    ]
  },  responsiveness: {
    minimumGroups: 1,
    groups: [
      { label: { zh: '及时响应与跟进', en: 'Responsiveness' }, any: ['响应及时', '及时响应', '快速响应', '跟进', '后续工作', '及时处理'] }
    ]
  },
  'english-reading-and-writing': {
    minimumGroups: 2,
    unstatedIfMissing: true,
    groups: [
      { label: { zh: '英语', en: 'English' }, any: ['英语', '英文', 'English'] },
      { label: { zh: '读写', en: 'Reading & writing' }, any: ['读写', '阅读', '写作', 'reading', 'writing'] }
    ]
  },
  'shift-work': {
    minimumGroups: 1,
    unstatedIfMissing: true,
    groups: [
      { label: { zh: '轮班接受度', en: 'Shift availability' }, any: ['轮班', '三班倒', 'shift work', 'rotating shifts'] }
    ]
  }
};


/* Extra aliases for common job-search wording. */
const EXTRA_KEYWORD_ALIASES = {
  communication: ['沟通协调', '交流', '对接', '协同', '协作', '协调'],
  teamwork: ['团队合作', '配合团队', '协同工作', '团队配合'],
  'cross-team-collaboration': ['跨部门协作', '跨职能协作', '跨团队合作', '多方协作'],
  'team-management': ['带团队', '团队负责人', '人员管理'],
  'time-management': ['时间规划', '时间安排', '任务排期'],
  'problem-solving': ['问题解决能力', '解决问题', '排障'],
  'leadership': ['领导能力', '带领团队', '推动决策'],
  'analytical-thinking': ['分析能力', '分析思维', '逻辑分析'],
  'customer-focus': ['用户导向', '以客户为中心', '客户导向'],
  'client-communication': ['客户沟通', '客户交流', '客户对接'],
  'project-management': ['项目推进', '项目统筹', '项目执行', '项目负责人'],
  'project-coordination': ['项目协调', '项目对接', '项目推进'],
  'product-manager': ['产品负责人', '产品策划'],
  'product-management': ['产品规划', '产品设计与管理'],
  'product-strategy': ['产品规划', '产品方向'],
  'product-roadmap': ['产品规划', '迭代规划'],
  'user-research': ['用户调研', '用户访谈', '用户洞察'],
  'product-design': ['产品体验设计', '产品交互设计'],
  'user-growth': ['推广拉新', '用户获取', '拉新增长'],
  'product-operations': ['产品运营'],
  'user-operations': ['用户维护', '用户管理'],
  'content-operations': ['内容管理', '内容策划'],
  'content-marketing': ['内容传播', '内容获客'],
  'social-media-marketing': ['社媒运营', '社交媒体运营', '社媒营销'],
  'growth-hacking': ['增长实验', '增长策略'],
  'marketing-analytics': ['营销分析', '投放分析'],
  'campaign-management': ['活动运营', '营销活动'],
  'event-marketing': ['活动策划', '活动执行'],
  'event-operations': ['活动运营', '活动执行'],
  'e-commerce-operations': ['电商', '店铺运营'],
  'membership-operations': ['会员管理', '会员增长'],
  'private-domain-operations': ['私域', '私域流量'],
  'new-media-operations': ['新媒体', '新媒体矩阵'],
  'content-strategy': ['内容规划', '内容方向'],
  'operations-management': ['运营体系', '日常运营'],
  'customer-success': ['客户运营', '客户成功管理'],
  'customer-support': ['客户服务', '客服支持'],
  sales: ['销售岗位', '销售业务'],
  'account-management': ['客户维护', '大客户维护'],
  'business-development': ['商务合作', 'BD', '渠道拓展'],
  'market-research': ['市场研究', '市场分析'],
  'industry-research': ['行业分析', '行业洞察'],
  'partner-management': ['生态合作', '伙伴关系'],
  'channel-management': ['渠道运营', '渠道拓展'],
  'supply-chain-management': ['供应链', '供应链运营'],
  'vendor-management': ['供应商关系', '外包管理'],
  'risk-management': ['风险控制', '风控'],
  'project-information-tracking': ['项目跟踪', '项目信息整理'],
  'rules-research-and-analysis': ['规则分析', '规则研究'],
  'progress-management': ['进度跟踪', '进度推进'],
  'multi-project-coordination': ['多项目协调', '多项目并行'],
  'task-execution': ['执行力', '任务落地'],
  'machine-learning': ['机器学习算法', '机器学习模型'],
  'data-analysis': ['数据洞察', '数据分析能力', '业务分析'],
  'data-visualization': ['数据看板', '可视化报表'],
  statistics: ['统计分析', '统计建模'],
  'financial-analysis': ['财务分析能力', '财务数据处理'],
  'financial-modeling': ['财务模型搭建', '估值模型'],
  'web3-project-experience': ['区块链项目经验', 'Web3 项目'],
  'trading-opportunity-research': ['交易机会挖掘', '机会研究'],
  'security-audit': ['智能合约审计', '安全审计'],
  'market-trend-tracking': ['市场热点', '热点跟踪', '市场热点分析', '趋势跟踪'],
  'event-selection': ['筛选事件', '事件研究', '盘口选择', '事件分析'],
  'market-configuration': ['盘口管理', '盘口设置', '赔率配置', '盘口维护'],
  'data-monitoring-and-analysis': ['盘口监控', '数据监控', '数据跟踪分析', '监控数据分析'],
  'trading-opportunity-research': ['潜在交易机会', '交易机会', '交易机会研究', '机会分析'],
  'social-media-platforms': ['instagram', 'youtube', 'tiktok', 'linkedin', 'facebook', 'discord', '微信', '视频号', 'bilibili', '哔哩哔哩']
};

Object.entries(EXTRA_KEYWORD_ALIASES).forEach(([id, aliases]) => {
  const entry = window.KEYWORD_DICTIONARY.find((item) => item.id === id);
  if (entry) entry.aliases = [...new Set([...entry.aliases, ...aliases])];
});

/* Additional evidence groups for common roles and responsibilities. */
const evidenceGroup = (zh, en, any) => ({ label: { zh, en }, any });
Object.assign(window.KEYWORD_EVIDENCE_GROUPS, {
  teamwork: { minimumGroups: 2, groups: [evidenceGroup('团队场景', 'Team context', ['团队', 'team']), evidenceGroup('协作行为', 'Collaboration', ['协作', '合作', '配合', '协同', 'support'])] },
  'cross-team-collaboration': { minimumGroups: 2, groups: [evidenceGroup('跨团队场景', 'Cross-team context', ['跨团队', '跨部门', '跨职能', '多方', '合作方', 'cross functional']), evidenceGroup('协调行为', 'Coordination', ['协调', '沟通', '对接', '推进', '协同', '同步', 'collaboration'])] },
  'team-management': { minimumGroups: 2, groups: [evidenceGroup('团队管理', 'People management', ['团队管理', '带团队', '团队负责人', '人员管理']), evidenceGroup('团队动作', 'Team operations', ['招聘', '培训', '指导', '绩效', '激励', '分工'])] },
  'time-management': { minimumGroups: 2, groups: [evidenceGroup('计划安排', 'Planning', ['排期', '计划', '时间', '截止', '优先级']), evidenceGroup('按时交付', 'Delivery', ['按时', '交付', '推进', '完成', 'deadline'])] },
  'problem-solving': { minimumGroups: 2, groups: [evidenceGroup('问题识别', 'Problem identification', ['问题', '异常', '风险', 'bug', '难题']), evidenceGroup('解决动作', 'Resolution', ['分析', '定位', '解决', '优化', '复盘'])] },
  leadership: { minimumGroups: 2, groups: [evidenceGroup('主导责任', 'Ownership', ['主导', '负责', '推动', '决策', 'ownership']), evidenceGroup('人员影响', 'People leadership', ['团队', '成员', '指导', '协调', '带领'])] },
  'analytical-thinking': { minimumGroups: 2, groups: [evidenceGroup('分析动作', 'Analysis actions', ['分析', '拆解', '研究', '洞察']), evidenceGroup('分析依据', 'Evidence', ['数据', '指标', '结论', '报告', '逻辑'])] },
  'customer-focus': { minimumGroups: 2, groups: [evidenceGroup('客户场景', 'Customer context', ['用户', '客户', '需求', '体验']), evidenceGroup('客户行动', 'Customer actions', ['反馈', '满意度', '支持', '解决方案', '服务'])] },
  'client-communication': { minimumGroups: 2, groups: [evidenceGroup('沟通对象', 'Client context', ['客户', '外部', '合作方']), evidenceGroup('沟通动作', 'Communication', ['沟通', '对接', '反馈', '答疑', '跟进'])] },
  'project-management': { minimumGroups: 2, groups: [evidenceGroup('项目规划', 'Planning', ['计划', '排期', '里程碑', '路线图', '优先级']), evidenceGroup('项目推进', 'Delivery', ['推进', '协调', '交付', '复盘', '统筹'])] },
  'project-coordination': { minimumGroups: 2, groups: [evidenceGroup('协调动作', 'Coordination', ['协调', '推进', '排期', '对接']), evidenceGroup('交付动作', 'Delivery', ['完成', '交付', '复盘', '跟进'])] },
  'product-management': { minimumGroups: 2, groups: [evidenceGroup('需求洞察', 'Discovery', ['需求', '用户', '调研', '竞品']), evidenceGroup('产品规划', 'Planning', ['路线图', '优先级', 'PRD', '策略']), evidenceGroup('产品交付', 'Delivery', ['推进', '上线', '复盘', '协作'])] },
  'product-strategy': { minimumGroups: 2, groups: [evidenceGroup('市场判断', 'Market context', ['市场', '用户', '竞品', '趋势']), evidenceGroup('策略动作', 'Strategy', ['策略', '定位', '路线图', '规划'])] },
  'product-roadmap': { minimumGroups: 2, groups: [evidenceGroup('规划动作', 'Planning', ['路线图', '里程碑', '排期', '规划']), evidenceGroup('迭代交付', 'Iteration', ['优先级', '迭代', '上线', '复盘'])] },
  'user-research': { minimumGroups: 2, groups: [evidenceGroup('研究方法', 'Research methods', ['调研', '访谈', '问卷', '观察']), evidenceGroup('用户洞察', 'User insight', ['用户', '需求', '洞察', '画像'])] },
  'product-design': { minimumGroups: 2, groups: [evidenceGroup('设计动作', 'Design actions', ['设计', '原型', '线框', '交互']), evidenceGroup('设计场景', 'Design context', ['用户', '体验', '产品', '设计系统'])] },
  'user-growth': { minimumGroups: 2, groups: [evidenceGroup('拉新增长', 'Acquisition', ['增长', '拉新', '获客', '推广']), evidenceGroup('留存转化', 'Retention', ['留存', '活跃', '转化', '复购'])] },
  'product-operations': { minimumGroups: 2, groups: [evidenceGroup('产品场景', 'Product context', ['产品', '用户', '功能', '需求']), evidenceGroup('运营动作', 'Operations', ['运营', '上线', '数据', '反馈'])] },
  'user-operations': { minimumGroups: 2, groups: [evidenceGroup('用户场景', 'User context', ['用户', '会员', '社群', '客户']), evidenceGroup('用户运营', 'User operations', ['运营', '维护', '拉新', '留存', '活跃'])] },
  'content-operations': { minimumGroups: 2, groups: [evidenceGroup('内容产出', 'Content production', ['内容', '文案', '选题', '素材', '推文']), evidenceGroup('内容运营', 'Content operations', ['策划', '编辑', '发布', '排版', '数据'])] },
  'content-marketing': { minimumGroups: 2, groups: [evidenceGroup('内容形式', 'Content formats', ['内容', '文案', '博客', '文章', '视频']), evidenceGroup('营销动作', 'Marketing actions', ['营销', '传播', '获客', '转化'])] },
  'social-media-marketing': { minimumGroups: 2, groups: [evidenceGroup('社交平台', 'Social platforms', ['社交媒体', '社媒', 'X', 'Twitter', '小红书', '抖音']), evidenceGroup('社媒运营', 'Social operations', ['运营', '内容', '发布', '互动', '增长'])] },
  'growth-hacking': { minimumGroups: 2, groups: [evidenceGroup('增长实验', 'Growth experiments', ['实验', 'A/B', '数据', '转化']), evidenceGroup('增长动作', 'Growth actions', ['增长', '拉新', '留存', '获客'])] },
  'marketing-analytics': { minimumGroups: 2, groups: [evidenceGroup('营销数据', 'Marketing data', ['数据', '指标', '归因', 'ROI']), evidenceGroup('分析优化', 'Analysis', ['分析', '报告', '优化', '投放'])] },
  'campaign-management': { minimumGroups: 2, groups: [evidenceGroup('营销活动', 'Campaign context', ['活动', '营销', '推广', '投放']), evidenceGroup('执行复盘', 'Execution', ['策划', '执行', '复盘', '预算'])] },
  'event-marketing': { minimumGroups: 2, groups: [evidenceGroup('活动场景', 'Event context', ['活动', '线下', '展会', '交流会']), evidenceGroup('活动执行', 'Event delivery', ['策划', '筹备', '执行', '复盘'])] },
  'e-commerce-operations': { minimumGroups: 2, groups: [evidenceGroup('电商场景', 'E-commerce context', ['电商', '店铺', '商品', '订单']), evidenceGroup('店铺运营', 'Store operations', ['运营', '上架', '促销', '转化'])] },
  'membership-operations': { minimumGroups: 2, groups: [evidenceGroup('会员场景', 'Membership context', ['会员', '用户', '客户']), evidenceGroup('会员运营', 'Membership operations', ['运营', '权益', '留存', '复购'])] },
  'private-domain-operations': { minimumGroups: 2, groups: [evidenceGroup('私域场景', 'Private domain context', ['私域', '社群', '微信', '用户']), evidenceGroup('私域运营', 'Private domain operations', ['运营', '拉新', '留存', '转化'])] },
  'new-media-operations': { minimumGroups: 2, groups: [evidenceGroup('新媒体平台', 'New media platforms', ['新媒体', '小红书', '抖音', '视频号']), evidenceGroup('内容运营', 'Content operations', ['内容', '发布', '运营', '数据'])] },
  'content-strategy': { minimumGroups: 2, groups: [evidenceGroup('内容策略', 'Content strategy', ['内容策略', '内容规划', '内容方向', '选题', '内容营销']), evidenceGroup('受众传播', 'Audience', ['用户', '受众', '品牌', '传播'])] },
  'operations-management': { minimumGroups: 2, groups: [evidenceGroup('运营场景', 'Operations context', ['运营', '流程', '日常', '管理']), evidenceGroup('效率优化', 'Optimization', ['效率', '成本', '质量', '复盘'])] },
  'customer-success': { minimumGroups: 2, groups: [evidenceGroup('客户场景', 'Customer context', ['客户', '用户', '续费', '留存']), evidenceGroup('客户成功', 'Customer success', ['成功', '满意', '价值', '支持'])] },
  'customer-support': { minimumGroups: 2, groups: [evidenceGroup('支持动作', 'Support actions', ['客服', '支持', '咨询', '答疑']), evidenceGroup('问题处理', 'Issue handling', ['问题', '反馈', '投诉', '处理'])] },
  sales: { minimumGroups: 2, groups: [evidenceGroup('销售场景', 'Sales context', ['销售', '客户', '线索', '商机']), evidenceGroup('销售流程', 'Sales process', ['跟进', '转化', '签约', '回款'])] },
  'account-management': { minimumGroups: 2, groups: [evidenceGroup('客户关系', 'Account context', ['客户', '大客户', '合作', '关系']), evidenceGroup('关系经营', 'Account operations', ['维护', '跟进', '续约', '增长'])] },
  'business-development': { minimumGroups: 2, groups: [evidenceGroup('商务场景', 'Business context', ['商务', '合作', '渠道', '伙伴']), evidenceGroup('拓展动作', 'Development', ['拓展', '谈判', '签约', '跟进'])] },
  'market-research': { minimumGroups: 2, groups: [evidenceGroup('研究动作', 'Research actions', ['调研', '研究', '访谈', '问卷']), evidenceGroup('市场场景', 'Market context', ['市场', '用户', '竞品', '趋势'])] },
  'industry-research': { minimumGroups: 2, groups: [evidenceGroup('研究输出', 'Research output', ['研究', '分析', '报告', '洞察']), evidenceGroup('行业场景', 'Industry context', ['行业', '赛道', '市场', '趋势'])] },
  'partner-management': { minimumGroups: 2, groups: [evidenceGroup('伙伴场景', 'Partner context', ['合作伙伴', '渠道', '生态', '合作方']), evidenceGroup('伙伴运营', 'Partner operations', ['对接', '管理', '维护', '拓展'])] },
  'channel-management': { minimumGroups: 2, groups: [evidenceGroup('渠道场景', 'Channel context', ['渠道', '代理', '合作', '生态']), evidenceGroup('渠道运营', 'Channel operations', ['拓展', '管理', '支持', '复盘'])] },
  'supply-chain-management': { minimumGroups: 2, groups: [evidenceGroup('供应链场景', 'Supply chain context', ['供应链', '采购', '供应商', '库存']), evidenceGroup('供应链运营', 'Supply chain operations', ['计划', '交付', '成本', '风险'])] },
  procurement: { minimumGroups: 2, groups: [evidenceGroup('采购动作', 'Procurement actions', ['采购', '供应商', '询价', '比价']), evidenceGroup('采购流程', 'Procurement process', ['合同', '订单', '交付', '成本'])] },
  'vendor-management': { minimumGroups: 2, groups: [evidenceGroup('供应商场景', 'Vendor context', ['供应商', '外包', '合作方']), evidenceGroup('供应商管理', 'Vendor operations', ['评估', '管理', '交付', '风险'])] },
  'risk-management': { minimumGroups: 2, groups: [evidenceGroup('风险识别', 'Risk context', ['风险', '合规', '风险控制', '异常']), evidenceGroup('风险响应', 'Risk response', ['识别', '评估', '监控', '处理'])] },
  'project-information-tracking': { minimumGroups: 2, groups: [evidenceGroup('跟踪动作', 'Tracking', ['跟踪', '记录', '更新', '汇总']), evidenceGroup('项目场景', 'Project context', ['项目', '进度', '里程碑', '信息'])] },
  'rules-research-and-analysis': { minimumGroups: 2, groups: [evidenceGroup('研究动作', 'Research', ['研究', '分析', '规则', '政策']), evidenceGroup('分析输出', 'Output', ['梳理', '拆解', '总结', '报告'])] },
  'progress-management': { minimumGroups: 2, groups: [evidenceGroup('计划安排', 'Planning', ['计划', '排期', '里程碑', '优先级']), evidenceGroup('进度推进', 'Tracking', ['进度', '跟进', '风险', '复盘'])] },
  'multi-project-coordination': { minimumGroups: 2, groups: [evidenceGroup('多项目场景', 'Multi-project context', ['多项目', '并行', '项目群']), evidenceGroup('协调动作', 'Coordination', ['协调', '优先级', '资源', '推进'])] },
  'task-execution': { minimumGroups: 2, groups: [evidenceGroup('执行动作', 'Execution', ['执行', '落地', '完成', '交付']), evidenceGroup('结果跟踪', 'Tracking', ['跟进', '记录', '复盘', '结果'])] },
  'machine-learning': { minimumGroups: 2, groups: [evidenceGroup('建模场景', 'Modeling', ['机器学习', '模型', '训练', '推理']), evidenceGroup('ML 工具', 'ML tooling', ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'sklearn'])] },
  'data-analysis': { minimumGroups: 2, groups: [evidenceGroup('数据对象', 'Data', ['数据', '指标', '报表', '数据集']), evidenceGroup('分析动作', 'Analysis', ['分析', '清洗', '可视化', '洞察'])] },
  'data-visualization': { minimumGroups: 2, groups: [evidenceGroup('可视化产物', 'Visualization', ['可视化', '图表', '看板', 'dashboard']), evidenceGroup('可视化工具', 'Visualization tools', ['Tableau', 'Power BI', 'Looker', 'Excel'])] },
  statistics: { minimumGroups: 2, groups: [evidenceGroup('统计方法', 'Statistics', ['统计', '显著', '回归', '分布']), evidenceGroup('统计应用', 'Application', ['分析', '实验', '指标', '报告'])] },
  'financial-analysis': { minimumGroups: 2, groups: [evidenceGroup('财务对象', 'Financial context', ['财务分析', '报表', '利润', '现金流']), evidenceGroup('分析工具', 'Analysis tools', ['Excel', 'SQL', '财务模型', '估值'])] },
  'financial-modeling': { minimumGroups: 2, groups: [evidenceGroup('模型场景', 'Modeling', ['财务模型', '估值', '预测', '敏感性']), evidenceGroup('模型分析', 'Analysis', ['报表', '现金流', '利润', '假设'])] },
  'web3-project-experience': { minimumGroups: 2, groups: [evidenceGroup('Web3 场景', 'Web3 context', ['Web3', '加密', '区块链', 'Crypto']), evidenceGroup('项目实践', 'Project practice', ['项目', '空投', '智能合约', '生态'])] },
  'trading-opportunity-research': { minimumGroups: 2, groups: [evidenceGroup('交易场景', 'Trading context', ['市场', '交易', '盘口', '价格']), evidenceGroup('机会研究', 'Opportunity research', ['机会', '研究', '分析', '数据'])] },
  'security-audit': { minimumGroups: 2, groups: [evidenceGroup('安全场景', 'Security context', ['安全', '审计', '漏洞', '风险']), evidenceGroup('审计流程', 'Audit process', ['测试', '修复', '报告', '复盘'])] },
  recruiting: { minimumGroups: 2, groups: [evidenceGroup('招聘场景', 'Hiring context', ['招聘', 'recruitment', 'recruiting', 'talent acquisition', '人才']), evidenceGroup('招聘动作', 'Hiring actions', ['筛选', '面试', '录用', 'offer', '渠道', '候选人'])] },
  'talent-sourcing': { minimumGroups: 2, groups: [evidenceGroup('候选人与渠道', 'Candidates & channels', ['候选人', '人才', '简历', '渠道', 'talent']), evidenceGroup('寻访动作', 'Sourcing actions', ['寻访', '搜寻', 'sourcing', '主动联系', 'mapping'])] },
  'resume-screening': { minimumGroups: 2, groups: [evidenceGroup('简历材料', 'Resume context', ['简历', 'resume', 'cv', '候选人']), evidenceGroup('筛选判断', 'Screening', ['筛选', '初筛', '评估', '审核', '匹配'])] },
  'interview-coordination': { minimumGroups: 2, groups: [evidenceGroup('面试场景', 'Interview context', ['面试', 'interview', '候选人']), evidenceGroup('组织协调', 'Coordination', ['安排', '协调', '组织', '日程', '跟进'])] },
  'employer-branding': { minimumGroups: 2, groups: [evidenceGroup('雇主品牌场景', 'Employer brand context', ['雇主品牌', 'employer brand', '招聘品牌']), evidenceGroup('品牌动作', 'Brand actions', ['传播', '内容', '宣传', '活动', '渠道'])] },
  'employee-relations': { minimumGroups: 2, groups: [evidenceGroup('员工关系场景', 'Employee context', ['员工', 'employee', '人事', '劳动关系']), evidenceGroup('关系处理', 'Relations work', ['沟通', '关系', '诉求', '冲突', '关怀'])] },
  'onboarding-and-offboarding': { minimumGroups: 2, groups: [evidenceGroup('入离职场景', 'Onboarding context', ['入职', '离职', 'onboarding', 'offboarding']), evidenceGroup('流程办理', 'Process handling', ['办理', '流程', '手续', '培训', '交接'])] },
  'training-and-development': { minimumGroups: 2, groups: [evidenceGroup('培训场景', 'Learning context', ['培训', 'training', '学习', '课程']), evidenceGroup('培训动作', 'Development actions', ['设计', '组织', '授课', '评估', '发展'])] },
  'compensation-and-benefits': { minimumGroups: 2, groups: [evidenceGroup('薪酬场景', 'Compensation context', ['薪酬', '薪资', '福利', 'compensation', 'benefits']), evidenceGroup('核算管理', 'Reward operations', ['核算', '预算', '方案', '发放', '管理'])] },
  'performance-management': { minimumGroups: 2, groups: [evidenceGroup('绩效场景', 'Performance context', ['绩效', 'performance', '目标', '考核']), evidenceGroup('绩效动作', 'Performance actions', ['制定', '评估', '反馈', '改进', 'review'])] },
  'human-resources': { minimumGroups: 2, groups: [evidenceGroup('人力场景', 'HR context', ['人事', '人力资源', 'human resources', 'hr', '员工']), evidenceGroup('人力工作', 'HR operations', ['招聘', '培训', '绩效', '薪酬', '员工关系'])] },
  'hr-business-partner': { minimumGroups: 2, groups: [evidenceGroup('业务伙伴场景', 'HRBP context', ['hrbp', '业务伙伴', 'business partner', '组织']), evidenceGroup('组织支持', 'Organization support', ['人才', '团队', '组织', '沟通', '规划'])] },
  'organizational-development': { minimumGroups: 2, groups: [evidenceGroup('组织场景', 'Organization context', ['组织', 'organization', '团队', '人才']), evidenceGroup('发展动作', 'Development actions', ['发展', '设计', '诊断', '变革', '规划'])] },
  'labor-law': { minimumGroups: 2, groups: [evidenceGroup('劳动法场景', 'Employment law context', ['劳动法', '劳动合同', 'labor law', 'employment law']), evidenceGroup('法律应用', 'Legal application', ['合规', '审查', '咨询', '争议', '制度'])] },
  'contract-review': { minimumGroups: 2, groups: [evidenceGroup('合同场景', 'Contract context', ['合同', 'contract', '条款']), evidenceGroup('审查动作', 'Review actions', ['审阅', '审核', '审查', '修改', '谈判'])] },
  'legal-compliance': { minimumGroups: 2, groups: [evidenceGroup('法律与监管', 'Legal context', ['法律', '法规', '监管', 'legal', 'regulatory']), evidenceGroup('合规动作', 'Compliance actions', ['合规', '审查', '评估', '制度', '风险'])] },
  'legal-research': { minimumGroups: 2, groups: [evidenceGroup('法律检索', 'Legal research context', ['法律', '法规', '判例', 'legal research']), evidenceGroup('研究输出', 'Research output', ['检索', '研究', '分析', '报告', '意见'])] },
  'intellectual-property': { minimumGroups: 2, groups: [evidenceGroup('知识产权场景', 'IP context', ['知识产权', '商标', '专利', '版权', 'intellectual property']), evidenceGroup('知识产权工作', 'IP actions', ['申请', '检索', '审查', '保护', '管理'])] },
  litigation: { minimumGroups: 2, groups: [evidenceGroup('争议场景', 'Dispute context', ['诉讼', '仲裁', '争议', 'litigation', 'dispute']), evidenceGroup('案件处理', 'Case handling', ['案件', '证据', '代理', '处理', '跟进'])] },
  'data-compliance': { minimumGroups: 2, groups: [evidenceGroup('数据隐私场景', 'Data privacy context', ['数据', '隐私', '个人信息', 'privacy', 'data protection']), evidenceGroup('合规控制', 'Compliance controls', ['合规', '审查', '评估', '制度', '安全'])] },
  'privacy-policy': { minimumGroups: 2, groups: [evidenceGroup('隐私场景', 'Privacy context', ['隐私', 'privacy', '个人信息']), evidenceGroup('政策输出', 'Policy output', ['政策', '声明', '条款', '文件', '更新'])] },
  'anti-money-laundering': { minimumGroups: 2, groups: [evidenceGroup('金融犯罪场景', 'Financial crime context', ['反洗钱', 'aml', '洗钱', '制裁']), evidenceGroup('风险控制', 'Controls', ['监控', '筛查', '识别', '调查', '合规'])] },
  'know-your-customer': { minimumGroups: 2, groups: [evidenceGroup('客户核验场景', 'KYC context', ['kyc', '客户尽职调查', '身份核验', '客户身份']), evidenceGroup('核验动作', 'Verification actions', ['审核', '核验', '调查', '筛查', '材料'])] },
  'sanctions-screening': { minimumGroups: 2, groups: [evidenceGroup('制裁场景', 'Sanctions context', ['制裁', 'sanctions', '黑名单']), evidenceGroup('筛查动作', 'Screening actions', ['筛查', '核验', '监控', '调查', '名单'])] },
  'regulatory-communication': { minimumGroups: 2, groups: [evidenceGroup('监管场景', 'Regulator context', ['监管', 'regulator', '监管机构']), evidenceGroup('沟通响应', 'Communication', ['沟通', '对接', '汇报', '回复', '材料'])] },
  'administrative-support': { minimumGroups: 2, groups: [evidenceGroup('行政场景', 'Administrative context', ['行政', 'admin', '办公室', '日常事务']), evidenceGroup('支持动作', 'Support actions', ['支持', '协助', '安排', '管理', '处理'])] },
  'office-management': { minimumGroups: 2, groups: [evidenceGroup('办公场景', 'Office context', ['办公室', 'office', '办公']), evidenceGroup('办公运营', 'Office operations', ['管理', '采购', '维护', '安排', '支持'])] },
  'calendar-management': { minimumGroups: 2, groups: [evidenceGroup('日程场景', 'Schedule context', ['日程', 'calendar', '会议', 'schedule']), evidenceGroup('安排协调', 'Coordination', ['安排', '协调', '提醒', '预约', '管理'])] },
  'meeting-minutes': { minimumGroups: 2, groups: [evidenceGroup('会议场景', 'Meeting context', ['会议', 'meeting', '讨论']), evidenceGroup('纪要输出', 'Documentation', ['纪要', '记录', '整理', '总结', '跟进'])] },
  'records-management': { minimumGroups: 2, groups: [evidenceGroup('档案场景', 'Records context', ['档案', '记录', '资料', 'records']), evidenceGroup('归档管理', 'Record operations', ['整理', '归档', '管理', '维护', '检索'])] },
  'complaint-handling': { minimumGroups: 2, groups: [evidenceGroup('投诉场景', 'Complaint context', ['投诉', 'complaint', '客户问题']), evidenceGroup('处理闭环', 'Resolution', ['处理', '解决', '反馈', '跟进', '复盘'])] },
  'sales-pipeline': { minimumGroups: 2, groups: [evidenceGroup('销售管道', 'Pipeline context', ['销售漏斗', 'sales pipeline', '销售管道', '线索']), evidenceGroup('推进动作', 'Pipeline actions', ['跟进', '转化', '推进', '预测', '管理'])] },
  'bid-management': { minimumGroups: 2, groups: [evidenceGroup('招投标场景', 'Bid context', ['投标', '招标', 'bid', 'tender']), evidenceGroup('标书工作', 'Bid actions', ['标书', '方案', '报价', '提交', '管理'])] },
  'graphic-design': { minimumGroups: 2, groups: [evidenceGroup('视觉设计场景', 'Visual design context', ['平面设计', '视觉', 'graphic design', '海报', '品牌']), evidenceGroup('设计产出', 'Design output', ['设计', '排版', '物料', '视觉稿', '作品'])] },
  'video-editing': { minimumGroups: 2, groups: [evidenceGroup('视频场景', 'Video context', ['视频', 'video', '短片', '素材']), evidenceGroup('剪辑制作', 'Editing', ['剪辑', '编辑', '制作', '字幕', '后期'])] },
  'content-creation': { minimumGroups: 2, groups: [evidenceGroup('内容场景', 'Content context', ['内容', 'content', '文章', '文案', '视频']), evidenceGroup('创作产出', 'Creation actions', ['创作', '撰写', '制作', '策划', '发布'])] },
  editing: { minimumGroups: 2, groups: [evidenceGroup('文本场景', 'Editorial context', ['编辑', '文章', '稿件', '文案', 'editing']), evidenceGroup('编辑动作', 'Editorial actions', ['修改', '润色', '校对', '审核', '发布'])] },
  translation: { minimumGroups: 2, groups: [evidenceGroup('语言转换', 'Language context', ['翻译', 'translation', '本地化', 'localization', '语言']), evidenceGroup('转换动作', 'Conversion actions', ['翻译', '校对', '润色', '适配', '交付'])] },
  'content-moderation': { minimumGroups: 2, groups: [evidenceGroup('内容安全场景', 'Moderation context', ['内容审核', 'content moderation', '内容安全', '社区规范']), evidenceGroup('审核动作', 'Moderation actions', ['审核', '审核规则', '处置', '举报', '风险'])] },
  'software-testing': { minimumGroups: 2, groups: [evidenceGroup('测试场景', 'Testing context', ['测试', 'testing', 'qa', '质量']), evidenceGroup('测试动作', 'Testing actions', ['用例', '缺陷', '验证', '回归', '报告'])] },
  'test-automation': { minimumGroups: 2, groups: [evidenceGroup('自动化场景', 'Automation context', ['自动化测试', 'test automation', '自动化']), evidenceGroup('自动化工具', 'Automation tools', ['selenium', 'cypress', 'playwright', '脚本', '框架'])] },
  'business-intelligence': { minimumGroups: 2, groups: [evidenceGroup('商业数据', 'Business data', ['商业智能', 'business intelligence', 'bi', '指标', '报表']), evidenceGroup('分析工具', 'BI tools', ['tableau', 'power bi', 'sql', '看板', 'dashboard'])] },
  'it-support': { minimumGroups: 2, groups: [evidenceGroup('IT 支持场景', 'IT context', ['it支持', 'it support', 'helpdesk', '桌面支持']), evidenceGroup('支持处理', 'Support actions', ['支持', '故障', '排查', '解决', '响应'])] },
  'technical-support': { minimumGroups: 2, groups: [evidenceGroup('技术支持场景', 'Technical support context', ['技术支持', 'technical support', '技术问题']), evidenceGroup('问题闭环', 'Issue resolution', ['排查', '定位', '解决', '反馈', '跟进'])] },
  airdrop: { minimumGroups: 2, groups: [evidenceGroup('空投场景', 'Airdrop context', ['空投', 'airdrop', '测试网', '主网']), evidenceGroup('任务执行', 'Campaign execution', ['任务', '交互', '领取', '活动', '项目'])] },
  'token-generation-event': { minimumGroups: 2, groups: [evidenceGroup('代币发行场景', 'Token launch context', ['代币发行', 'token launch', 'tge', '代币']), evidenceGroup('发行工作', 'Launch actions', ['发行', '上线', '活动', '空投', '激励'])] },
  'market-making': { minimumGroups: 2, groups: [evidenceGroup('交易场景', 'Trading context', ['做市', 'market making', '流动性', '盘口']), evidenceGroup('做市管理', 'Market operations', ['报价', '价差', '风控', '监控', '策略'])] },
  'on-chain-data': { minimumGroups: 2, groups: [evidenceGroup('链上场景', 'On-chain context', ['链上', 'on-chain', 'onchain', '区块链']), evidenceGroup('数据分析', 'Data analysis', ['数据', '分析', '查询', '看板', 'dune'])] },
  'sybil-detection': { minimumGroups: 2, groups: [evidenceGroup('女巫场景', 'Sybil context', ['女巫', 'sybil', '多账号', '批量账号']), evidenceGroup('识别分析', 'Detection', ['识别', '检测', '分析', '风控', '标签'])] },
  'ecosystem-partnerships': { minimumGroups: 2, groups: [evidenceGroup('生态场景', 'Ecosystem context', ['生态', 'ecosystem', '合作伙伴', '协议']), evidenceGroup('合作推进', 'Partnership actions', ['合作', '拓展', '对接', '维护', '落地'])] },
  'project-research': { minimumGroups: 2, groups: [evidenceGroup('项目研究场景', 'Research context', ['项目研究', '协议研究', 'project research', '项目调研']), evidenceGroup('研究输出', 'Research output', ['分析', '研究', '调研', '报告', '整理'])] },
  'conversion-rate-optimization': { minimumGroups: 2, groups: [evidenceGroup('转化场景', 'Conversion context', ['转化率', 'conversion', 'cro', '漏斗']), evidenceGroup('优化动作', 'Optimization', ['优化', '提升', '实验', 'a/b', '迭代'])] },
});
/* Reuse a rule family when several dictionary terms describe the same capability. */
const SHARED_EVIDENCE_GROUPS = {
  'customer-service': 'customer-support',
  'after-sales-support': 'customer-support',
  localization: 'translation',
  proofreading: 'editing',
  'video-production': 'video-editing',
  'topic-planning': 'content-creation',
  scriptwriting: 'content-creation',
  'content-distribution': 'content-marketing',
  'user-engagement': 'community-management',
  'test-cases': 'software-testing',
  'defect-management': 'software-testing',
  'system-operations': 'it-support',
  'strategic-analysis': 'analytical-thinking',
  'recruitment-channels': 'talent-sourcing',
  'attendance-management': 'human-resources',
  'employee-records': 'records-management',
  'corporate-culture': 'organizational-development',
  'brand-visual-design': 'graphic-design',
  'motion-design': 'graphic-design',
  'art-direction': 'graphic-design',
  'creative-design': 'graphic-design',
  '3d-design': 'graphic-design',
  illustration: 'graphic-design',
  typography: 'graphic-design',
  photography: 'graphic-design',
  'client-visits': 'account-management',
  'sales-forecasting': 'sales-pipeline',
  'channel-sales': 'channel-management',
  'commercial-quotation': 'sales-pipeline',
  'document-management': 'records-management',
  'travel-arrangement': 'administrative-support',
  testnet: 'airdrop',
  mainnet: 'airdrop',
  'liquidity-mining': 'market-making',
  'spot-trading': 'market-making',
  'derivatives-trading': 'market-making',
  'quantitative-trading': 'market-making',
  cro: 'conversion-rate-optimization',
  'cross-functional-collaboration': 'cross-team-collaboration',
  'stakeholder-management': 'cross-team-collaboration',
  'quality-assurance': 'software-testing',
  'user-acquisition': 'user-growth',
  'growth-experiments': 'growth-hacking',
  'growth-strategy': 'growth-hacking',
  'growth-operations': 'user-growth',
  'market-analysis': 'market-research',
  'brand-design': 'graphic-design',
  'brand-marketing': 'graphic-design',
  'business-analysis': 'data-analysis',
  'business-analytics': 'data-analysis',
  crm: 'account-management',
  'contract-management': 'contract-review',
  compliance: 'legal-compliance',
  'competitive-analysis': 'market-research',
  'customer-experience': 'customer-focus',
  'customer-satisfaction': 'customer-support',
  'service-operations': 'customer-support',
  retention: 'customer-success',
  'customer-lifecycle': 'customer-success',
  'event-planning': 'event-marketing',
  'social-media-monitoring': 'public-opinion-monitoring',
  'data-monitoring-and-analysis': 'data-analysis',
  'public-opinion-analysis': 'public-opinion-monitoring',
  'financial-market-and-global-social-media-trend-analysis': 'market-research',
  'requirements-analysis': 'product-management',
  'interaction-design': 'product-design',
  'ui-design': 'product-design',
  'ux-design': 'product-design',
  'visual-design': 'product-design',
  'design-systems': 'product-design',
  prototyping: 'product-design',
  accessibility: 'product-design',
  'mobile-design': 'product-design',
  'web-design': 'product-design',
  'on-chain-analysis': 'on-chain-data',
  'node-operations': 'web3-project-experience',
  'regression-analysis': 'statistics',
  clustering: 'statistics',
  'funnel-analysis': 'data-analysis',
  budgeting: 'financial-analysis',
  'fp-a': 'financial-analysis',
  'investment-analysis': 'financial-analysis',
  'portfolio-management': 'financial-analysis',
  'credit-analysis': 'risk-management',
  'credit-risk': 'risk-management',
  'liquidity-management': 'risk-management',
  'financial-compliance': 'legal-compliance',
  'english-communication': 'communication',
  'chinese-communication': 'communication',
  'cross-cultural-communication': 'communication',
  'remote-collaboration': 'teamwork',
  'async-communication': 'communication',
  'marketing-attribution': 'marketing-analytics',
  'customer-journey': 'customer-focus',
  'content-calendar': 'content-operations',
  'marketing-roi': 'marketing-analytics',
  'event-operations': 'event-marketing',
  'data-operations': 'data-analysis',
  'content-planning-and-organization': 'content-operations',
  'user-communication': 'communication',
  'issue-reporting-and-collaboration': 'cross-team-collaboration',
  'contract-drafting': 'contract-review',
  'legal-advisory': 'legal-research',
  'talent-review': 'human-resources',
  'recruiting-funnel': 'recruiting',
  'employee-engagement': 'employee-relations',
  'course-design': 'training-and-development',
  'instructional-design': 'training-and-development',
  'learning-management-system': 'training-and-development'
};
Object.entries(SHARED_EVIDENCE_GROUPS).forEach(([id, sourceId]) => {
  if (!window.KEYWORD_EVIDENCE_GROUPS[id] && window.KEYWORD_EVIDENCE_GROUPS[sourceId]) {
    window.KEYWORD_EVIDENCE_GROUPS[id] = window.KEYWORD_EVIDENCE_GROUPS[sourceId];
  }
});
window.KEYWORD_DICTIONARY.forEach((entry) => {
  const evidence = window.KEYWORD_EVIDENCE_GROUPS[entry.id];
  if (evidence) {
    entry.evidenceGroups = evidence.groups;
    entry.minimumGroups = evidence.minimumGroups;
    entry.unstatedIfMissing = !!evidence.unstatedIfMissing;
  }
});

/* Apply the small, developer-maintained patch file loaded before this script.
 * Routine keyword work should happen in keyword-maintenance.js, not here.
 */
(() => {
  const config = window.ROLEPORT_KEYWORD_MAINTENANCE;
  const dictionary = window.KEYWORD_DICTIONARY;
  const errors = [];
  const stats = { addedKeywords: 0, mergedKeywords: 0, addedAliases: 0, addedEvidenceGroups: 0 };
  window.ROLEPORT_KEYWORD_MAINTENANCE_ERRORS = errors;
  window.ROLEPORT_KEYWORD_MAINTENANCE_STATS = stats;
  if (!config) return;

  const idFor = (value) => String(value || '').normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const findEntry = (key) => {
    const normalized = String(key || '').trim().toLowerCase();
    return dictionary.find((entry) => entry.id === normalized || entry.canonical.zh.toLowerCase() === normalized || entry.canonical.en.toLowerCase() === normalized);
  };
  const mergeAliases = (entry, values, context) => {
    if (!Array.isArray(values)) {
      errors.push(`${context}: aliases 必须是数组`);
      return;
    }
    values.map((value) => String(value || '').trim()).filter(Boolean).forEach((alias) => {
      if (!entry.aliases.includes(alias)) {
        entry.aliases.push(alias);
        stats.addedAliases += 1;
      }
    });
  };

  String(config.keywordLines || '').split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) return;
    const [category, zh, en, aliasText = '', weightText = '1'] = line.split('|').map((value) => value.trim());
    const id = idFor(en);
    if (!category || !zh || !en || !id) {
      errors.push(`keywordLines: 无法解析“${line}”`);
      return;
    }
    const aliases = [...new Set([zh, en, ...aliasText.split(';')].map((value) => value.trim()).filter(Boolean))];
    const existing = dictionary.find((entry) => entry.id === id);
    if (existing) {
      mergeAliases(existing, aliases, `keywordLines ${id}`);
      existing.weight = Math.max(existing.weight, Math.min(5, Math.max(1, Number(weightText) || 1)));
      stats.mergedKeywords += 1;
      return;
    }
    dictionary.push({
      id,
      canonical: { zh, en },
      aliases,
      category,
      weight: Math.min(5, Math.max(1, Number(weightText) || 1)),
      source: 'dictionary'
    });
    stats.addedKeywords += 1;
  });

  Object.entries(config.aliasAdditions || {}).forEach(([key, aliases]) => {
    const entry = findEntry(key);
    if (!entry) {
      errors.push(`aliasAdditions: 找不到词条“${key}”`);
      return;
    }
    mergeAliases(entry, aliases, `aliasAdditions ${key}`);
  });

  Object.entries(config.evidenceGroups || {}).forEach(([key, rule]) => {
    const entry = findEntry(key);
    if (!entry) {
      errors.push(`evidenceGroups: 找不到词条“${key}”`);
      return;
    }
    if (!rule || !Array.isArray(rule.groups) || !rule.groups.length) {
      errors.push(`evidenceGroups ${key}: groups 必须是非空数组`);
      return;
    }
    const groups = rule.groups.filter((group) => group?.label && Array.isArray(group.any) && group.any.length);
    if (groups.length !== rule.groups.length) {
      errors.push(`evidenceGroups ${key}: 每个组都需要 label 和 any`);
      return;
    }
    window.KEYWORD_EVIDENCE_GROUPS[entry.id] = {
      minimumGroups: Math.min(groups.length, Math.max(1, Number(rule.minimumGroups) || 2)),
      unstatedIfMissing: !!rule.unstatedIfMissing,
      hardCondition: !!rule.hardCondition,
      partialNote: rule.partialNote || null,
      groups
    };
    stats.addedEvidenceGroups += 1;
  });

  dictionary.forEach((entry) => {
    const evidence = window.KEYWORD_EVIDENCE_GROUPS[entry.id];
    if (evidence) {
      entry.evidenceGroups = evidence.groups;
      entry.minimumGroups = evidence.minimumGroups;
      entry.unstatedIfMissing = !!evidence.unstatedIfMissing;
      entry.hardCondition = !!evidence.hardCondition;
      entry.partialNote = evidence.partialNote || null;
    }
  });
})();







# Roleport

Roleport 是一个轻量求职工具箱，当前包含：

- 首页
- 工具箱
- JD 与简历关键词匹配器
- 求职资源导航
- 关于与反馈

所有功能都在浏览器本地运行，不使用后端、账号或 AI API。

## 运行

建议使用本地静态服务器：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000/toolkit.html#matcher>。

PDF.js 的 Worker 在部分浏览器的 `file://` 环境下可能受限，因此不建议直接双击打开匹配器页面。

## 1.0 开发进度

当前已完成 1.0 计划的第 0 步和 A 阶段：

- 建立 Git 版本基线
- 首页调整为“找机会 / 提高申请竞争力”两条核心路径
- 首页采用 V9 紫青动态科技视觉
- 首页展示真实资源数量和分类数量
- 主导航中的资源入口调整为“找机会”
- 根地址自动进入 `toolkit.html#home`
- 旧招聘列表保留为 `legacy-jobs.html`，不参与 1.0 主流程

下一步为 B 阶段：在资源页增加岗位分类指南。

## 匹配器能力

- 本地词典与同义词匹配
- 中英文缩写与别名合并
- JD 候选关键词自动提取
- 上下文规则判断必备项和加分项
- 明确覆盖、证据覆盖、部分覆盖、未发现、简历未说明五态匹配
- 每个关键词的全部命中句证据（去重后完整展示）
- 完整简历修改清单
- Markdown 复制与 CSV 导出
- 可选的自定义补充关键词

## 主要文件

- `toolkit.html`：工具箱主页面与匹配器逻辑
- `keywords.js`：核心词典与匹配规则
- `keyword-maintenance.js`：日常新增关键词、同义词和证据规则的唯一维护入口
- `resources.js`：求职资源正式数据，只放人工审核通过的资源
- `research/RESOURCE_WORKFLOW.md`：资源发现、初筛、审核和复查流程
- `research/resource-candidates-batch-01.csv`：第一批候选资源人工审核表
- `research/resource-candidates-batch-02.csv`：第二批 Web3、远程与社群资源审核表
- `tests/resource-directory-test.html`：资源字段与链接格式检查
- `file-import.js`：TXT、MD、PDF、DOCX 本地文本提取
- `tests/keyword-maintenance-test.html`：词库一键检查与快速查词
- `vendor/pdf.min.js`、`vendor/pdf.worker.min.js`：PDF 文本解析
- `vendor/pdf-cmaps-data.js`：内置 PDF CMap，支持直接打开 HTML 时解析中文 PDF
- `vendor/fflate.min.js`：DOCX 解压与正文读取
- `favicon.svg`：Roleport 图标
- `index.html`：1.0 网站入口跳转页
- `legacy-jobs.html` / `styles.css` / `app.js` / `jobs.js`：早期招聘信息页面示例

## 文件导入

支持：

- `.txt`
- `.md`
- 文本型 `.pdf`
- `.docx`

暂不支持：

- 扫描图片型 PDF
- 密码保护 PDF
- 旧版 `.doc`

文件内容只在浏览器本地处理，不会上传服务器。

## 当前状态

- JD 与简历关键词匹配器已可用
- 求职申请管理器、多岗位 JD 对比器等工具仍为规划中或开发中
- 不包含爬虫、自动投递、账号系统或云端同步

## 日常维护关键词（推荐）

日常只需要修改 `keyword-maintenance.js`，不要改 `keywords.js` 的主逻辑。

1. **新增关键词**：在 `keywordLines` 中按下面的格式增加一行：

   `分类|中文名|英文名|别名1;别名2|权重`

   例如：

   `business|招聘运营|Recruiting Operations|recruiting operations;招聘运营|2`

2. **补充近义词**：在 `aliasAdditions` 中填写已有词条的 id、中文名或英文名：

   `'community-management': ['社群运营专员', 'Community Operations Specialist']`

3. **补充证据覆盖规则（可选）**：在 `evidenceGroups` 中为词条增加证据组。没有证据规则的关键词仍可正常做明确匹配。

修改后打开：

```text
http://localhost:8000/tests/keyword-maintenance-test.html
```

页面会自动检查配置错误，并提供快速查词，避免重复添加。全部通过后刷新正式工具即可。若部署平台缓存较久，可同时更新 `keyword-maintenance.js` 中的 `version` 和页面引用参数。

当前词库已覆盖 **700+ 规范关键词、2,900+ 中英文别名和 120+ 组能力证据规则**；精确数量以维护检查页实时显示为准。词库维护完全依靠静态文件，不增加数据库、后台或账号系统。

## 工具使用指南

工具箱卡片会展示每个工具的适用阶段、预计用时和使用场景。已开放工具在页面顶部提供“使用指南”按钮：桌面端打开右侧抽屉，移动端打开底部面板。

指南内容按“什么时候使用 → 使用前准备 → 怎么操作 → 会得到什么 → 注意事项 → 下一步”组织。统一配置位于 `toolkit.html` 的 `TOOL_GUIDES`，新增工具时需要补充：

- 阶段和预计用时
- 适用场景
- 什么时候使用
- 操作步骤和输出
- 注意事项
- 下一个关联工具

## 求职资源维护

新增资源按以下顺序处理：

1. 将候选写入 `research/resource-candidates-batch-01.csv` 或后续批次文件。
2. 核对官方链接、平台用途和可访问状态。
3. 按 `research/RESOURCE_WORKFLOW.md` 的评分标准初筛。
4. 人工把 `manual_status` 改为 `审核通过`、`需修改` 或 `不加入`。
5. 只有审核通过且技术检查合格的资源才复制到 `resources.js`；审核表用 `site_status` 标记入库状态。
6. 打开资源检查页：

```text
http://localhost:8000/tests/resource-directory-test.html
```

页面会检查必填字段、分类、语言、地区、HTTPS 链接和重复数据。

资源页默认分层展示：中文友好、Web3、远程和社群资源优先显示；英文通用招聘、学习等资源收在“更多海外通用资源”折叠区。资源使用主分类和可选辅助分类，同一资源可以出现在多个相关筛选中。

## 文件导入自动测试

启动本地服务器后打开：

```text
http://localhost:8000/tests/file-import-test.html
```

页面会自动运行 TXT、Markdown、DOCX、文本 PDF、双栏 PDF、扫描 PDF、加密 PDF、损坏文件、旧版 DOC 和大小限制等测试，并支持一次选择多份个人文件批量检查。

内置测试样例位于 `tests/fixtures/`，测试页位于 `tests/file-import-test.html`。

## 匹配状态说明

- 明确覆盖：简历中直接出现关键词或同义词
- 证据覆盖：简历没有直接关键词，但多个相关经历证据组同时命中
- 部分覆盖：只命中少量相关证据
- 未发现：没有找到相关证据
- 简历未说明：英语读写、轮班制等需要本人确认或补充的信息

证据组基础定义位于 `keywords.js`，日常新增规则写在 `keyword-maintenance.js`。当前包含 120+ 组核心能力证据规则并映射到常用关键词，覆盖通用软技能、产品运营、市场增长、客户支持、项目管理、数据分析、财务和 Web3 等常见岗位族。例如舆情监测会综合监测动作、社交媒体/社区、整理输出等多组证据；招聘、法律合规、客服、设计、测试、财务、数据与 Web3 等常见岗位族也采用同样规则。



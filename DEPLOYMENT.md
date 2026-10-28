# Roleport 1.0 部署说明

本项目是纯静态站点，不需要构建命令、后端、数据库或环境变量，可以直接部署到 GitHub Pages。

## 1. 部署前准备

在 `toolkit.html` 中找到：

```js
const FEEDBACK_ISSUE_URL = '';
```

创建 GitHub 仓库后，将其改为该仓库的新建议 Issue 地址，例如：

```js
const FEEDBACK_ISSUE_URL = 'https://github.com/你的用户名/roleport/issues/new';
```

注意：

- 反馈通过 GitHub Issues 提交，因此仓库通常需要公开。
- 如果不希望开放 Issues，请保留空字符串，网站会自动回退为复制反馈内容。
- GitHub 登录、隐私政策和 Issue 数据由 GitHub 管理。

## 2. 创建 GitHub 仓库并推送

当前本地分支为 `master`。先在 GitHub 创建一个空仓库，然后执行：

```powershell
cd "C:\Users\oneJ\Documents\ChatGPT\个人网站"
git remote add origin https://github.com/你的用户名/roleport.git
git push -u origin master
```

仓库根目录必须包含：

- `index.html`
- `toolkit.html`
- `resources.js`
- `role-guides.js`
- `keywords.js`
- `keyword-maintenance.js`
- `file-import.js`
- `favicon.svg`
- `vendor/`
- `tests/`

`.nojekyll` 已加入根目录，用于避免 GitHub Pages 进行不必要的 Jekyll 处理。

## 3. 启用 GitHub Pages

在 GitHub 仓库中进入：

`Settings → Pages`

配置：

- Source：`Deploy from a branch`
- Branch：`master`
- Folder：`/ (root)`

保存后等待 GitHub 完成部署。默认地址通常是：

```text
https://你的用户名.github.io/roleport/
```

根地址会通过 `index.html` 自动进入 `toolkit.html#home`。

## 4. 上线后验证

### 首页和资源

- 首页正常打开，动态背景与主题切换正常。
- 首页“找机会”入口可进入岗位指南和招聘资源。
- 岗位指南分类、搜索、展开详情正常。
- 招聘资源分类、搜索和外部链接正常。

### 匹配器和简历改进建议

- 手动输入 JD 与简历后能够生成结果。
- PDF、DOCX、TXT、MD 文件可以导入。
- 状态统计和状态筛选正常。
- 每条结果可以查看 JD 原文、判断理由和简历证据。
- “进入改进建议”会复用当前匹配结果，不要求重新输入。
- Markdown 复制和 CSV 下载正常。
- 清空和重新匹配正常。

### 主题、语言和移动端

- 深色/浅色主题均可读，刷新后保持选择。
- 中文/英文切换正常，刷新后保持选择。
- 320px、390px 和常见桌面宽度下无整页横向溢出。

### 自动测试

线上打开：

```text
https://你的用户名.github.io/roleport/tests/matcher-regression-test.html
```

应显示 **28/28 通过**。

其他检查页：

```text
tests/keyword-maintenance-test.html
tests/resource-directory-test.html
tests/role-guide-test.html
tests/file-import-test.html
```

## 5. 3–5 位用户试用

建议每位用户完成以下任务，并记录卡点而不是只收集主观评分：

1. 从首页找到一个适合自己的 Web3 岗位方向。
2. 通过资源导航打开一个招聘平台。
3. 导入或粘贴一份真实 JD 与简历。
4. 找到最需要优先修改的 3 个要求。
5. 进入简历改进建议并复制清单。
6. 说明哪些判断理由清楚、哪些结论需要人工确认。

记录：

- 无法完成的任务及发生位置。
- 明显漏判或误判的关键词。
- 无法理解的状态或说明。
- 移动端无法点击或阅读的内容。
- 希望优先增加的功能。

## 6. 更新网站

修改后执行：

```powershell
git add .
git commit -m "描述本次修改"
git push
```

GitHub Pages 会自动重新发布。若词典或脚本文件名不变但内容更新，请同步修改页面引用参数，例如：

```html
<script src="keywords.js?v=20261028.3"></script>
```

这可以减少浏览器缓存导致的旧版本问题。

## 7. 当前不需要的内容

1.0 验证阶段不需要：

- 后端或数据库
- 登录/账号系统
- AI API
- 爬虫或自动投递
- 云服务器
- 自定义域名

自定义域名可以在用户验证完成后再配置。
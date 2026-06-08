# May Lee Portfolio

静态个人网站，已按最新要求调整：

- 支持中英文切换，语言状态保存在浏览器 localStorage。
- 删除页面内所有功能性 icon，只保留参考风格里的波浪、色块和手绘装饰符号。
- 首页改为「工作经历」模块，含 5 家公司经历与文本 logo 样式卡片。
- 移动端已重新适配：导航折叠、单列卡片、按钮宽度、头像高度均已调整。
- AI Builder 页面改为「SME企业参展Skill」+「我的自媒体内容」。

## 部署

Netlify Publish directory 请保持：

```text
may-lee-portfolio
```

如果你把文件都放到了仓库根目录，则 Publish directory 改为：

```text
.
```

## 需要替换的素材

当前附件中未包含「与外国人沟通照片」和「坐着办公照片」，因此我保留了两个同名占位文件：

- `assets/project-communication.jpg`：替换为「我与外国人沟通」照片
- `assets/ai-office.jpg`：替换为「坐着办公」照片

替换时文件名保持不变，GitHub commit 后 Netlify 会自动更新。

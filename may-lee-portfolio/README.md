# May Lee Portfolio

本版调整内容：

- 第一屏按参考图重做：深蓝首屏、白色波浪底边、底部留白、不规则手绘圆点/小对勾。
- slogan 改为：在复杂业务场景里，连接研究、内容与增长。
- 删除右上角「联系我」。
- 首页导航改为「关于我」，并删除单独「关于我」tab；原关于我内容已整合到首页。
- 「项目」tab 改为「精选项目」。
- 首页按钮改为「联系我」，点击弹窗显示电话和邮箱。
- 删除「下载简历」按钮。
- 保留中英文切换。
- 保留移动端适配。

部署说明：

如果 GitHub 仓库结构是：

```
仓库根目录/
└── may-lee-portfolio/
    ├── index.html
    ├── projects.html
    ├── articles.html
    ├── about.html
    ├── css/
    ├── js/
    └── assets/
```

Netlify 的 Publish directory 填：

```
may-lee-portfolio
```

如果把 `index.html` 等文件直接放在仓库根目录，Publish directory 填：

```
.
```

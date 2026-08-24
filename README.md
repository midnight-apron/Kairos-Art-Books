# 慨 Kairos

慨 Kairos 独立出版网站。页面以诗歌、设计、印刷与纸质媒介为核心，收录品牌简介、出版物与联系信息。

## 本地运行

```bash
npm install
npm run dev
```

## GitHub Pages

项目包含 GitHub Pages 自动发布流程。推送到 `main` 分支后：

1. 打开仓库的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 打开 **Actions** 页面，运行 **Deploy to GitHub Pages**，或再次推送一次更新。

后续每次更新 `main` 分支，网站都会自动重新发布。

## 主要内容

- 页面内容：`app/page.tsx`
- 全站样式：`app/globals.css`
- 网站信息与分享设置：`app/layout.tsx`
- 图片素材：`public/images`

© 2026 慨 Kairos

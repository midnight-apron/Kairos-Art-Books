import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const title = "慨 Kairos — 诗歌、设计与独立出版";
const description =
  "慨 Kairos 从诗歌出发，持续探索文字、设计、印刷与纸质媒介之间的可能。";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  keywords: ["慨 Kairos", "独立出版", "诗歌", "图书设计", "艺术出版"],
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title,
    description,
    siteName: "慨 Kairos",
    locale: "zh_CN",
    type: "website",
    url: siteUrl,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/og.png`,
            width: 1735,
            height: 906,
            alt: "慨 Kairos — 诗歌、设计与独立出版",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: siteUrl ? [`${siteUrl}/og.png`] : undefined,
  },
  icons: {
    icon: `${basePath}/images/kairos-logo.png`,
    shortcut: `${basePath}/images/kairos-logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

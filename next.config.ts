import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrganizationSite = repositoryName.endsWith(".github.io");
const pagesBasePath =
  isGitHubPages && repositoryName && !isUserOrOrganizationSite
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
  },
  typescript: {
    tsconfigPath: isGitHubPages ? "tsconfig.pages.json" : "tsconfig.json",
  },
};

export default nextConfig;

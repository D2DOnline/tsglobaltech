/** @type {import('next').NextConfig} */

import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  basePath: "",
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);

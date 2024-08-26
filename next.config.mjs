/** @type {import('next').NextConfig} */

import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  basePath: "",
  // output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);

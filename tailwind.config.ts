import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: "var(--brandColor)",
        bodyBgColor:"var(--bodyBgColor)",
        bodyColor: "var(--bodyColor)",
        fontRegularColor: "var(--fontRegularColor)",
        fontHeadingColor: "var(--fontHeadingColor)",
        sectionBg:"var(--sectionBg)"
    
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px var(--bodyColor)',
      }
    },
  },
  plugins: [],
};
export default config;

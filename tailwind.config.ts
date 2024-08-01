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
        bodyBgColor: "var(--bodyBgColor)",
        bodyColor: "var(--bodyColor)",

        sectionBg: "var(--sectionBg)",
        boxBg: "var(--boxBg)",
      },
      boxShadow: {
        "3xl": "0 15px 40px -25px var(--bodyColor)",
      },
    },
  },
  plugins: [],
};
export default config;

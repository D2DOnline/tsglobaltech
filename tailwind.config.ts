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
        brandColor: "var(--color-brand)",
        bodyBgColor: "var(--color-body-background)",
        bodyColor: "var(--color-body)",
        boxBg: "var(--color-box-background)",
        textHoverColor: "var(--color-brand)",
        buttonHoverColor: "var(--color-box-background)",
        listHoverBgColor:"var(--color-body)",
        whiteColor:"#fff",
      },
      boxShadow: {
        "3xl": "0 15px 40px -25px var(--bodyColor)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandColorPrimary: "var(--color-brand-primary)",
        brandColorSecondary: "var(--color-brand-secondary)",

        bodyBgColor: "var(--color-body-background)",
        bodyColor: "var(--color-body)",

        sectionBg: "var(--color-section-background)",

        textHoverColor: "var(--color-brand-primary)",
        buttonHoverColor: "var(--color-box-background)",
        listHoverBgColor: "var(--color-body)",
        footerBgColor: "#000",
        whiteColor: "#fff",

        successBg: '#4caf50',
        errorBg: '#f44336',
        warningBg: '#ff9800',
        infoBg: '#2196f3',
      },
      boxShadow: {
        "3xl": "0 15px 40px -25px var(--color-body)",
        card: "0 2px 5px 3px var(--color-box-shadow)",
        "card-hover": "0 4px 10px 6px var(--color-box-shadow)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;

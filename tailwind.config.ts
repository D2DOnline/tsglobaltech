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
        bodyColor: "var(--bodyColor)",
        fontRegularColor: "var(--fontRegularColor)",
        fontHeadingColor: "var(--fontHeadingColor)",
        sectionBg:"var(--sectionBg)"
        
        // baseOne: "var(--baseOne)",
        // baseTwo: "var(--baseTwo)",
        // baseThree: "var(--baseThree)",
        // baseFour: "var(--baseFour)",
      },
    },
  },
  plugins: [],
};
export default config;

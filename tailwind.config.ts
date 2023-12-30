import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        header: "90px",
        home: "calc(100vh - 90px)",
      },
      backgroundColor: {
        "landing-dark": "#07111A",
        "landing-light": "#C1C1C1",
        "primary-dark": "#08141F",
        "primary-light": "#D3D3D3",
        "secondary-dark": "#16B573",
        "secondary-light": "#39A7FF",
        "line-dark": "#D9D9D9",
        "line-light": "#222222",
      },
      textColor: {
        "primary-dark": "#FFFFFF",
        "primary-light": "#000000",
        "secondary-dark": "#16B573",
        "secondary-light": "#39A7FF",
      },
    },
  },
  plugins: [],
};
export default config;

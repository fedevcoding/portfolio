import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "landing-dark": "#1E1E1E",
        "landing-light": "#C1C1C1",
        "primary-dark": "#08141F",
        "primary-light": "#D3D3D3",
        "secondary-dark": "#16B573",
        "secondary-light": "#39A7FF",
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
}
export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0669f7",
        "primary-light": "#e3efff",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "var(--font-noto-sans-kr)",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;

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
        black: "#111111",
        orange: "#FF4D00",
        pink: "#FF6FAE",
        "soft-pink": "#FFD6E8",
        border: "#EAEAEA",
        grey: "#666666",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1280px",
      },
      spacing: {
        "section-y": "120px",
        "section-y-tablet": "80px",
        "section-y-mobile": "64px",
      },
    },
  },
  plugins: [],
};

export default config;

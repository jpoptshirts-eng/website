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
        cream: "#F9F7F2",
        "cream-muted": "#F5F2ED",
        "meal-green": "#3D853D",
        "meal-green-muted": "#E8F3E8",
        "meal-green-light": "#C5E0C5",
        "cellar-burgundy": "#720026",
        "cellar-burgundy-muted": "#F7EEF1",
        "cellar-burgundy-light": "#E8D0D8",
        "cellar-burgundy-deep": "#4A0404",
        "smarter-turquoise": "#3BCFC4",
        "smarter-turquoise-muted": "#E8F8F7",
        "smarter-navy": "#1A2233",
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

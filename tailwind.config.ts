import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 Required
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};

export default config;

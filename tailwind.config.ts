import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./intro-template/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxd: {
          max: "1000px",
        },
        mmd: {
          max: "740px",
        },
        smm: {
          max: "590px",
        },
      },
      fontFamily: {
        switzer: ["var(--font-switzer)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        assetmanagementbg: "url(../assets/assetmanagementbg.svg)",
        assetmanagementpagebg: "url(../assets/assetmanagementpagebg.svg)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "blue-500": "#2276FC",
        "yellow-100": "#fef7da",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: "1.2",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;

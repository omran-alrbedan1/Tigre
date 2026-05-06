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
        primary: {
          DEFAULT: "#7B2FBE",   
          light: "#9B4FDE",
          dark: "#5A1F8F",
        },
        secondary: {
          DEFAULT: "#F5C518",   
          light: "#FFD740",
          dark: "#C9A000",
        },
        color1: {
          DEFAULT: "#7B2FBE",
          dark: "#7E2358"
        },
        "color-purple": "#7E2358",
        dark: {
          DEFAULT: "#1A0A2E",
          card: "#2A1A3E",
          light: "#3A2A4E",
        },
        accent: "#FF6B35",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1A0A2E 0%, #2D1060 50%, #1A0A2E 100%)",
        "card-gradient": "linear-gradient(145deg, #2A1A3E, #1A0A2E)",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "btn-primary": '#FF5A3C',
        "titleBg": "#F5DFDC",
        "overviewBg": "#FFFFFF4C",
        "justBg" : "#E53E290D",
        "btn-for-rent": "#77C720",
        "btn-for-sale": "blue-500",
        "btn2" : "#8CB2B2",
        "primaryText": "slate-500",
        "textColor" : "#5C727D",
        "textTitle" : "#071C1F",
        "secondaryBg": "#F2F6F7",
        "primaryBg": "#FFFFFF",
        "black-bg": "#171B2A",
        "light" : "#FFF",
        "tp": "rgba(0, 0, 0, .5)",
        "tpo": "rgba(0, 0, 0, .7)",
        "tpr": "#071C1F99",
        "whiteTp": "rgba(255, 255, 255, 0.6)",
        "footerBg" : "#171B2A"
      },
    },
  },
  plugins: [],
} satisfies Config;

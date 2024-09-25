import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(180deg, #000000, #1a1a1a)',
      },
      width: {
        custom: '420px',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          light: '#D2B48C',   // Tan
          DEFAULT: '#A52A2A', // Standard brown
          dark: '#5C4033',
        },
      },
    },
    plugins: [],
  }
}
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '2rem',
      screens: {
        "2xl": "1420px"
      }
    },
    extend: {
      colors: {
        primary: "#202020"
        
      },
    },
  },
  plugins: [],
} satisfies Config;

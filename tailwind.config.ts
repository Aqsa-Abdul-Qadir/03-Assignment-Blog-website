import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'burnt-orange': '#FF6F3C',
        'emerald-green': '#50C878',
        
        'amber-yellow': '#FFD700',
        'cream-white': '#FFFDD0',
        'charcoal-gray': '#333333',
      },
    },
  },
  plugins: [],
} satisfies Config;

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
        cream: "var(--color-cream)",
        wine: {
          DEFAULT: "var(--color-wine)",
          light: "var(--color-wine-light)",
        },
        gold: "var(--color-gold)",
        charcoal: "var(--color-charcoal)",
        stone: "var(--color-stone)",
        mist: "var(--color-mist)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
} satisfies Config;

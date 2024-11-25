/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
      keyframes: {
        wavehand: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
      },
      animation: {
        wavehand: "wavehand 0.4s linear infinite",
      },
    },
  },
  plugins: [],
};

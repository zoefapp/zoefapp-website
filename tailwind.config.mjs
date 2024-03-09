/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: ".5rem",
        screens: {
          xl: "1400px",
        },
      },
      colors: {
        passenger: "var(--passenger)",
        brand: "var(--brand)",
      },
      backgroundImage: {
        BGpassenger:
          "url('/src/assets/images/passenger-bg.svg'), linear-gradient(90deg, var(--passenger) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

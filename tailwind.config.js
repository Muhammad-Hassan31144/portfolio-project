/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#EBEAA1",
        primary: "#f5f5dc",
        secondary: "#FEA82F",
        tertiary: "#5448C8",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#463e96",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "opink": "#f59fd0",
        "ogray": "#e2e2e2",
        "tgray": "#b9b9b9",
        "dblue": "#47b0c1",
      },
      fontFamily: {
        "poppins": ["Poppins"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

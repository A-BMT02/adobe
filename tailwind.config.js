/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "opink": "#f59fd0",
        "lpink": "#f6cfe5",
        "ogray": "#d8d8d8",
        "tgray": "#707070",
        "dblue": "#47b0c1",
        "bgray": "#e2e2e2",
        "fgray": "#eeeeee;",
      },
      fontFamily: {
        "poppins": ["Poppins"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

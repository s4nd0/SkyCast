/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      signika: ["Signika Negative", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

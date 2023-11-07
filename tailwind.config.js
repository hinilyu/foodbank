/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "deep-royal": "#281B24",
        storm: "#3C4B4D",
        sunshine: "#F2AB26",
        orange: "#D87D0D",
        apple: "#890A03",
      },
      fontFamily: {
        title: ["Raleway", "Roboto", '"Open Sans"'],
      },
    },
  },
  plugins: [],
};

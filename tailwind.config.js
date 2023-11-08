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
        button: "#2F4858",
      },
      fontFamily: {
        title: ["Raleway", "Roboto", '"Open Sans"'],
        body: ['"Poppins"', "Helvetica", '"Open Sans"'],
      },
    },
  },
  plugins: [],
};

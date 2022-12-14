/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#77439F",
        secondary: "#00A3A3",
        "primary-dark": "#B174F0",
        "secondary-dark": "#00CABC",
        "background-dark": "#1F0A34",
        white: "#EDEDED",
        black: "#000000",
      },
      fontFamily: {
        sans: ["El Messiri", "sans-serif"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
      backgroundImage: {
        hero: "url('./assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};

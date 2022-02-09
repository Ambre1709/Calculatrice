module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        purpletor: {
          lightest: "#9C1CCA",
          light: "#55077E",
          DEFAULT: "#331B4D",
          dark: "#1E0836",
          darkest: "#17062A",
        },
        yellowtor: "#ECDA56",
        bluetor: {
          light: "#8dfff7",
          DEFAULT: "#00DECF",
        },
      },
    },
  },
  plugins: [],
};

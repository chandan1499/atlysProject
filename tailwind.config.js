module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryText: "#C5C7CA",
        secondaryText: "#7F8084",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

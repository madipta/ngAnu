module.exports = {
  purge: {
    enabled: false,
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./projects/ngtail/src/**/*.html",
      "./projects/ngtail/src/**/*.ts",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

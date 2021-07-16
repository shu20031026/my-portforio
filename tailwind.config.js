module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#333",
        my: {
          orange: "#f57c00",
          blue: "#006BB6",
          red: "#DC3545",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

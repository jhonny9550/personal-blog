module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        yellow: {
          dark: "#c7a400",
          DEFAULT: "#FFD500",
          light: "#ffff52",
        },
        blue: {
          dark: "#0031cb",
          DEFAULT: "#395AFF",
          light: "#7f87ff",
        },
        black: {
          DEFAULT: "#000000",
        },
        red: {
          DEFAULT: "#FE0000",
        },
        salmon: {
          DEFAULT: "#FE5F5F",
        },
        grey: {
          dark: "#707070",
          DEFAULT: "#9F9F9F",
          light: "#E9E9E9",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      textColor: ["disabled"],
      borderWidth: ["disabled"],
    },
  },
  plugins: [],
};

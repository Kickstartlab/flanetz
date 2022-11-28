/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#FAAB00",
      },
      blue: {
        "200": "#01082D",
      },
      black: {
        "100": "#161616"
      },
      white: {
        "100": "#fff",
        "50": "#f5f5f5"
      },
      pink: {
        "100": "#FFE7DB",
        "200": "#FA7436"
      },
    },
    fontFamily: {
      'volkhov': ["'Volkhov', serif;"],
      'poppins': ["'Poppins', sans-serif;"],
    }
  },
  plugins: [],
}

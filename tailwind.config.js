/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      red: {
        "50": "#D74564",
      },
      blue: {
        "100": "#15BFFD",
        "200": "#030750",
        "300": "#131E39",

      },
      black: {
        "100": "#161616"
      },
      white: {
        "100": "#fff",
        "50": "#f5f5f5"
      },
      green: {
        "50": "#4AA72E"
      },
    },
    fontFamily: {
      'kanit': ["'Kanit', sans-serif;"],
      'minecraft': ["'minecraft', sans-serif;"],
    }
  },
  plugins: [],
}

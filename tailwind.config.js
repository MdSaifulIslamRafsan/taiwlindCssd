/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ['./*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: { colors: {
      purple:{
        700: "#d5d5d5"
      }
  },},
  },
  plugins: [],
}


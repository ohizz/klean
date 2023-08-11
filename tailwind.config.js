/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        raleway: ['Raleway', 'serif'],
        sans: ['Open Sans', 'serif'],
        luck: ['Luckiest Guy', 'serif']
       },
    },
  },
  plugins: [],
}

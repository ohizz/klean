/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', defaultTheme.fontFamily.sans],
        sora:['Sora', defaultTheme.fontFamily.sans],
        kanit:['Kanit', defaultTheme.fontFamily.sans],
        space: ['Space Grotesk', defaultTheme.fontFamily.san],
        unbounded: ['Unbounded', defaultTheme.fontFamily.san],
        wix: ['Wix Madefor Display', defaultTheme.fontFamily.san],
        Lato: ['Lato', defaultTheme.fontFamily.san],
        Raleway: ['Raleway', defaultTheme.fontFamily.san],
        play: ['Play', defaultTheme.fontFamily.san],
        dm: ['DM Sans', defaultTheme.fontFamily.san]
       },
    },
  },
  plugins: [],
}

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit' : 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      colors: {
        'brand-blue': "#1992d4"
      },
      spacing:{
        '1/3' : '33.33333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5' : '40%',
        '3/5' : '60%',
        '5/6' : '83.333333%'
      }
    },
  },
  plugins: [],
}

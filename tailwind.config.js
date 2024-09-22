/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background' : '#222831',
        'dark-blue' : '#00ADB5',
        'grey' : '#393E46',
        'white' : '#FFFFFF',
        'blue' : '#34FFFF'
      },
      fontFamily: {
        'inter' : ['Inter']
      }
    },
  },
  plugins: [],
}


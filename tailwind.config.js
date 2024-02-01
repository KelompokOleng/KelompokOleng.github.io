/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background' : '#222831',
        'dark-blue' : '#00ADB5',
        'white' : '#FFFFFF',
        'black' : '#222831'
      },
      fontFamily: {
        'inter' : ['Inter']
      }
    },
  },
  plugins: [],
}


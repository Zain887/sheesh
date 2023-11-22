/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
}


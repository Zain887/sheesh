/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // add any other paths where you use Tailwind CSS classes
  ],
  theme: {
    extend: {
      fontFamily: {
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


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quagsire-water': '#83D5F6',
        'quagsire-mist': '#629CBD',
        'quagsire-muddy': '#6A5A8B',
        'quagsire-nuoh': '#3194A4',
      },
      fontFamily: {
        pokemon: ['pokefont']
      }
    },
  },
  plugins: [],
}

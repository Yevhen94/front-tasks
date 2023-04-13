/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      title: ['68px', {
        lineHeight: '74px',
        fontWeight: '400',
      }],
    }
  },
  plugins: [],
}


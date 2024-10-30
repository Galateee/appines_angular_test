/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
      },
      screens: {
        tablet: "640px",
      },
      colors: {
        bgPrimary: '#004755',
        textPrimary: '#53A7BC',
        borderPrimary: '#4B91A1',
        titlePrimary: '#DBE6E9',
        tag1: '#C64191',
        tag2: '#9C95DC',
        tag3: '#53A7BC',
      }
    },
  },
  plugins: [],
}
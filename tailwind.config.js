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
        bg: '#132D32',
        cards: {
          bgPrimary: '#004755',
          borderPrimary: '#4B91A1',
          titlePrimary: '#DBE6E9',
          textPrimary: '#53A7BC',
        },
        wizardDetailsCard: {
          bgPrimary: '#064754',
          borderPrimary: '#3E808F',
          spliterPrimary: '#3E808F',
          titlePrimary: '#53A7BC',
          textPrimary: '#DBE6E9',
        },
        tag1: '#C64191',
        tag2: '#9C95DC',
        tag3: '#53A7BC',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'purple': '#5E50A1',
      'grey': '#E5E5E5',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms') 
  ],
}

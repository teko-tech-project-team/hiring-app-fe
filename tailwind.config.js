/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        open: "Open Sans",
      },
      colors: {
        primary: "#5E50A1",
        secondary: "#FBB017",
      },
    },
<<<<<<< HEAD
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
=======
  },
  plugins: [require("daisyui")],
};
>>>>>>> afb8365df70613858cab469e5ef8c7fc4183a989

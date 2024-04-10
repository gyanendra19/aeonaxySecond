/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "alert": {
          '0%': {transform: "translateY(-100px)"},
          '5%': {transform: "translateY(0)"},
          '90%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
      animation: {
        "alert-animate": "alert 4s ease-out forwards"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm:'375px'
      },
      backgroundImage: {
        'meals-image': "url('/images/meals.jpg')",
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
        moveDown: 'down 1s ease-in-out forwards',
        movep: 'up 1s ease-in-out forwards'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(100%)' },
          '25%': { transform: 'scale(125%)' },
          '50%': { transform: 'scale(150%)' },
          '75%': { transform: 'scale(125%)' }
        },
        down: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50%)' }
        },
        up: {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


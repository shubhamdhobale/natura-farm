/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-horizontal': 'moveHorizontal 20s linear infinite ',
      },
      keyframes: {
        moveHorizontal: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}


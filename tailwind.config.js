/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        lin: 'lin 20s linear infinite',
        linUp: 'linUp 2s ease-out',
        linUp2: 'linUp 1s ease-in-out',
      },
      keyframes: {
        lin: {
          '0%,100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(10%)' },
        },
        linUp: {
          '0%':{
            opacity: '0',
            transform: 'translateY(80%)',
          },
          '20%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          }
        }

      }
    },
  },
  plugins: [],
}

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
      },
      keyframes: {
        lin: {
          '0%,100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(10%)' },
        }
      }
    },
  },
  plugins: [],
}

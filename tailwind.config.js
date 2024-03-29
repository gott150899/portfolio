/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'}
        },
      },
      animation: {
        flicker: 'flicker 1s infinite'
      }
    },
  },
  plugins: [],
}

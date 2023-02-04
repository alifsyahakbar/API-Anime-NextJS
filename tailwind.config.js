/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
       animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [
  ],
}

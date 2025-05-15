/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'comic': ['"Comic Sans MS"', '"Comic Sans"', 'cursive'],
      },
      backgroundColor: {
        'gray-750': '#2D3748',
      },
    },
  },
  plugins: [],
}

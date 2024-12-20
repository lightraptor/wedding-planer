/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        customRegular: ['Regular']// Thêm Roboto vào font mặc định
      },
      colors: {
        primary: '#515252'
      }
    },
  },
  plugins: [],
}


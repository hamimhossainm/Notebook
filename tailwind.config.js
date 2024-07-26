/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'tre':'"Trebuchet Ms"'
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}


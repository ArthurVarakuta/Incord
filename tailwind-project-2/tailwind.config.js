/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css,scss}"],
  theme: {
    extend: {
      colors: {
        primary:"#1e2124",
        secondary:"#7289da",
        greylight:"#313338",
        greymid:"#2B2D31",
        greydark:"#111214",
        textcolor_inactive:"#7E828C"
      }
    },
  },
  plugins: [],
}
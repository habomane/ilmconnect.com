/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors : {
        customBlack:"#121212",
        customGrey:"#808080",
        customPurple : '#5A46F5',
        purpleHover: "#6653f5",
        hoverGrey: "#d7d7d7",
        customBackgoundColor : '#F4F7F8'
      },
    },
  },
  plugins: [],
}


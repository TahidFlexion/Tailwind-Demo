/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightblue:"#49479f",
        backgroundcustom: "rgb(244, 240, 252)",
        textcolor:"rgb(44 ,24, 84 )",
        playbtn :"rgba(73, 71, 159, .9)",
        Providecolor:"rgb(22, 0, 65)",
      }
    },
  },
  plugins: [],
}


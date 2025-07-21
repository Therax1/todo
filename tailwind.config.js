/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {
      colors:{
        background:{
          gray:"#D9D9D9",
          activeGray:"#F1F1F1",
        },
        icon:{
          gray:"#A0A0A0",
        }
      }
    },
  },
  plugins: [],
}


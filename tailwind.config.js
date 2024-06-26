/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accentColor: "#D3B018",
        lightBlue: "#3BB1B9",
      },
    },
  },
  plugins: [],
}
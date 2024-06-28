/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkColor: "#808080",
        accentColor: "#D3B018",
        lightBlue: "#3BB1B9",
        testimonialGradient: "linear-gradient(to right, #3BB1B9, #7BC9B9, white);"
      },
    },
  },
  plugins: [],
}
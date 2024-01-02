/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'pic':"url('/src/assets/1084.jpg')"
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'igusa': '#A8C97F',
        'navy': '#001D42',
        'washi': '#F5F5F0',
      },
      fontFamily: {
        'mincho': ['"Noto Serif JP"', 'serif'],
        'gothic': ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

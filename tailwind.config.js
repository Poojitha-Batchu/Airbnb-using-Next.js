/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'airbnb': '#FF385C',
        'airbnb-light': '#FF5A5F',
        'airbnb-dark': '#E31C5F',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


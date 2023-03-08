/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./util/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#110604',
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
  ],
}


/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'phone': '640px',
        'desktop': {'max': '1669px'},
        'tablet': {'max': '1300px'},
      },
  },
  plugins: [],

}


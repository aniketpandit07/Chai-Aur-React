/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /orange/,
    },
    {
      pattern: /green/,
    },
    {
      pattern: /blue/,
    },
  ]
}



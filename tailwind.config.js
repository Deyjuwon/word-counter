/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lin-black': '#D3D3D3',
        'lin-purple': '#2D3436',
        'lin-blue': '#00d4ff'
      },
    },
  },
  plugins: [],
}
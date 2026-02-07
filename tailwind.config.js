/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        secondary: '#93C5FD',
        light: '#DBEAFE',
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
}

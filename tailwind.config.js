/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      colors: {
        yellow800: '#FFB800',
        blue080: 'rgba(0,0,128,0.6)',
        grey: '#A9A9A9',
        darkGrey: '#1E1E1E',
        white: '#FFFFFF'
      },
      borderRadius: {
        lg: "12px",
        md: "4px",
        sm: "8px",
      },
    },
  },
  plugins: [],
}

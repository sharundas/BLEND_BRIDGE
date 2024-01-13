/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-second': '#18181d',
        'text-hover': '#5773ff',
       
      },
      textColor: {
        'text-primary': '#919191'
      },
      fontFamily: {
        'custom':['Roboto', 'sans-serif']
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'medium': '500',
        'bold': '700'
      }
    },
  },
  plugins: [],
}
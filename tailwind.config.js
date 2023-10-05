/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      // Define your custom CSS variable and its default value
      backgroundColor: {
        'Grey-50': 'var(--Grey-50, #F4F4F4)',
        'Grey-100': 'var(--Grey-100, #E7E9EB)'
      },
      colors: {
        "neutral-100": 'var(--neutral-100, #1E202C)',
        'regal-blue': '#243c5a',
        "Grey-600": 'var(--Grey-600, #525C6A)'
      },
      fontFamily: {
        'creato-regular': ['Creato Display Regular', 'sans'],
        'creato-medium': ['Creato Display Medium', 'sans'],
        'creato-bold': ['Creato Display Bold', 'sans'],
      },
      boxShadow: {
        "pricing-title": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}
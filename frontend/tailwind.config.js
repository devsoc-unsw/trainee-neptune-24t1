const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        puzzleBlue: {
          light: '#9BDEDE',
          DEFAULT: '#72B3B3',
          dark: '#477A7A',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`dark${separator}${className}`)} .dark${separator}${className}`;
        });
      });
    }),
  ],
}


const colors = require('./colors.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    dropShadow: {
      DEFAULT: ['0 0 5px rgb(0 0 0 / 0.3)'],
      text: ['0 0 3px rgb(0 0 0 / 1)'],
    },
    borderRadius: {
      full: '100%',
      DEFAULT: '0.5em',
    },
    extend: {
      fontSize: {
        zero: '0',
      },
    },
  },
  plugins: [],
};

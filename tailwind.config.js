/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      patreon: '#d6343c',
      cta: '#3a8f7e',
      white: '#ffffff',
      darkWhite: '#e6e1ff',
      overlay: 'rgba(0, 0, 0, 0.3)',
    },
    dropShadow: {
      DEFAULT: ['0 0 5px rgb(0 0 0 / 0.3)'],
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

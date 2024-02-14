import { defineConfig } from '@pandacss/dev';
import colors from './colors';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          cta: { value: '#f8cf46' },
          white: { value: '#ffffff' },
          darkWhite: { value: '#e6e1ff' },
          overlay: { value: 'rgba(0, 0, 0, 0.3)' },
          black: { value: '#000' },
          purple: { value: '#473a8f' },
          current: { value: 'currentColor' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});

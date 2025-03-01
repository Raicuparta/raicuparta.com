import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      tokens: {
        colors: {
          cta: { value: '#c3a3ff' },
          white: { value: '#ffffff' },
          darkWhite: { value: '#cec5ff' },
          overlay: { value: 'rgba(0, 0, 0, 0.3)' },
          black: { value: '#000000' },
          purple: { value: '#473a8f' },
        },
      },
    },
  },
  outdir: 'styled-system',
});

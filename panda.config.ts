import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      tokens: {
        colors: {
          cta: { value: "#c3a3ff" },
          interactive: { value: "rgba(0, 0, 0, 0.35)" },
          white: { value: "#ffffff" },
          darkWhite: { value: "#cec5ff" },
          overlay: { value: "rgba(0, 0, 0, 0.15)" },
          black: { value: "#000000" },
          purple: { value: "#473a8f" },
        },
      },
    },
  },
  outdir: "src/styled-system",
});

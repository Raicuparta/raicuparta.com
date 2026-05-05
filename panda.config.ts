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
					cta: { value: "#2b7c4d" },
					interactive: { value: "#41327b" },
					interactiveText: { value: "#d2c6ff" },
					white: { value: "#ffffff" },
					overlay: { value: "rgba(187, 158, 255, 0.04)" },
					black: { value: "#000000" },
					purple: { value: "#1d1b20" },
				},
			},
		},
	},
	outdir: "src/styled-system",
});

import svgr from "vite-plugin-svgr";
import { defineConfig } from "waku/config";

export default defineConfig({
	vite: {
		plugins: [svgr()],
		build: {
			rollupOptions: {
				external: ["sharp", "ico-to-png", "lodepng"],
			},
		},
	},
});

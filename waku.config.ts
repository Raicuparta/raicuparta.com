import { defineConfig } from "waku/config";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	unstable_viteConfigs: {
		common: () => ({
			plugins: [svgr()],
			build: {
				rollupOptions: {
					external: ["sharp", "ico-to-png", "lodepng"],
				},
			},
		}),
	},
});

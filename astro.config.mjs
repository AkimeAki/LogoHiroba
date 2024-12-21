import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 8001,
		host: "0.0.0.0"
	},
	site: "https://logo.aki.wtf",
	trailingSlash: "never",
	integrations: [sitemap()],
	build: {
		format: "file"
	},
	output: "static",
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler"
				}
			}
		}
	}
});

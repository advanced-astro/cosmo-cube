import { defineConfig } from "astro/config";
import compress from "astro-compress";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: "https://cosmo-cube.vercel.app/",
  integrations: [sitemap(), compress(), compressor()]
});

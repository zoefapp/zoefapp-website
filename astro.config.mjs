import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  build: {},
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind(), icon()],
});

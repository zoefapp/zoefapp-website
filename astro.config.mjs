import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  build: {},
  output: "hybrid",
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [tailwind({ applyBaseStyles: false }), icon()]
});
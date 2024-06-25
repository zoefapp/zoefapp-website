import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import mdx from '@astrojs/mdx';
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  build: {},
  output: "hybrid",
  adapter: vercel({
    edgeMiddleware: true
  }),
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx({}), htmx(), icon(), alpinejs(), react()]
});
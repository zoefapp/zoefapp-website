import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import htmx from 'astro-htmx';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    trailingSlash: "ignore",
    build: {},
    output: "hybrid",
    adapter: vercel({
        edgeMiddleware: true,
    }),

    integrations: [
        tailwind({ applyBaseStyles: false }), 
        htmx(),
        icon()
    ],
});

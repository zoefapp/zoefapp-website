import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import { DEFAULT_LANG, SUPPORTED_LANGUAGES } from './src/i18n/constants';


// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  build: {
  },
  // i18n: {
  //   defaultLocale: DEFAULT_LANG, 
  //   locales: SUPPORTED_LANGUAGES,
  //   routing: {
  //     prefixDefaultLocale: false,
  //   }
  // },
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [tailwind()]
});
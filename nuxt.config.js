// https://nuxt.com/docs/api/configuration/nuxt-config

import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass', 
  ],
  build: {
    transpile: ['vuetify'],
  },
});

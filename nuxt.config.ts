// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  alias: {'@': resolve(__dirname, "/")},
  css: ["./assets/main.scss"],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})

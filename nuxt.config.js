import { resolve } from 'path'


export default defineNuxtConfig({
  modules: ['nuxt-svgo'],
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, '/'),
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})




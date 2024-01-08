import { resolve } from 'path'

export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/google-fonts', {
      families: {
        Montserrat: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
    }],
    '@nuxt/image',
  ],
  image: {
    format: ['webp'],
    dir: 'assets'
  },
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




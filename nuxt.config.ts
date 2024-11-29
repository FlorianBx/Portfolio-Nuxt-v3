// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],
  fonts: {
    families: [{ name: 'Bebas Neue', provider: 'google' }],
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
})
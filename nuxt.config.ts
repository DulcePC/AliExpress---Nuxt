// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'AlixExppress',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@nuxt/ui',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@unlok-co/nuxt-stripe',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK || '',
    }
  },
  image: {
    format: ['webp']
  }
})
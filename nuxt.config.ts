import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://tersawy.com'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',

  // Four fixed routes, so the sitemap is a static file in public/ rather than a build-time
  // module — @nuxtjs/sitemap currently pulls a transitive dep that does not resolve.
  modules: ['@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  // No nitro preset is set on purpose. Deno Deploy detects Nuxt and configures Nitro itself;
  // pinning a preset here would fight that. Prerendering is preset-independent, so every page
  // ships as static HTML either way — `pnpm generate` also produces a plain static build.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: { siteUrl },
  },

  fonts: {
    families: [
      { name: 'Newsreader', provider: 'google' },
      { name: 'Archivo', provider: 'google' },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F8F7F4', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#141210', media: '(prefers-color-scheme: dark)' },
      ],
      link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    },
  },
})

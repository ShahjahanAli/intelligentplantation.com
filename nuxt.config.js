export default {
  // Disable server-side rendering
  ssr: false,
  target: 'static',

  // Page headers
  head: {
    title: 'Plant IQ | Plant Intelligence',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [], // Remove @nuxtjs/tailwindcss, we will use Tailwind 3 manually

  // Global CSS
  css: ['@/assets/css/tailwind.css'],

  // Build configuration
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}

const strapiBaseUri = process.env.API_URL || 'http://localhost:1337';

export default {
  srr: false,
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/main.scss',
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
  ],
  plugins: ['@/plugins/cloudinary.js'],
  components: true,
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],
  modules: ['@nuxtjs/markdownit', '@nuxtjs/strapi'],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: 'articles',
        type: 'collection',
      },
      {
        name: 'categories',
        type: 'collection',
      },
      {
        name: 'homepage',
        type: 'single',
      },
      {
        name: 'global',
        type: 'single',
      },
    ],
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    injected: true,
    use: ['markdown-it-highlightjs', 'markdown-it-playground'],
  },
  generate: {
    fallback: true,
  },
  tailwindcss: {
    config: {
      important: true,
      theme: {
        extend: {
          colors: {
            primary: '#2a9c7a',
          },
        },
      },
    },
  },
  styleResources: {
    scss: ['~/assets/styles/abstracts.scss'],
  },
};

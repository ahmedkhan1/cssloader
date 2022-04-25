const  path  = require ('path');

export default {
  target: 'static',
  router: {
    base: '/nuxt-dadjokes-app'
  },
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dadjokes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    apiUrl: process.env.API_URL
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [`~/assets/css/main.css`],
  cli: {
    badgeMessages: ['DadJokes App!'],
    bannerColor: 'blue'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 
    // { src: '~plugins/nuxt-tippy', ssr: false },
    { src: '~plugins/nuxt-persistedstate', ssr: false  },
    { src: '~plugins/nuxt-vuex', ssr: false },
    { src: '~plugins/axios.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   extend(config, { dev, isClient }) {
  //     /**
  //      * Initialise SVG Sprites
  //      */
    
  //     // get and remove file loader
  //     const rule = config.module.rules.find(r => r.test.toString() === '/\\.css$/i');
  //     console.log("rule:",config.module.rules);
  //     console.log("rule:",rule);
  //     config.module.rules.splice(config.module.rules.indexOf(rule), 1);
  
    
  //     config.module.rules.push({
  //       test: /\.svg$/,
  //       include: [
  //         path.resolve(__dirname, 'assets/svg'),
  //       ],
  //       use: 'svg-sprite-loader',
  //     });
  //   },
  // }
}

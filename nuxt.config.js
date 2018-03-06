const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const stage = process.env.APP_STAGE || 'local'
const getEnvVar = ({production, staging, local}) => {
  return stage === 'production'
    ? production
      : stage === 'staging'
        ? staging
        : local
}


if (env === 'development') {
  require('dotenv').config()
}

const getRoutes = require('./getRoutes')
module.exports = {
  router: {
    linkActiveClass: 'is-active-link',
    linkExactActiveClass: 'is-active-link-exact',
    base: '/'
  },
  /*
  ** Headers of the page
  */
  generate: {
    routes () {
      return getRoutes()
        .then(data => {
          return Object.keys(data)
            .map(route => ({
              route: '/documentation/' + route,
              payload: data[route]
            }))
        })
    }
  },
  env: {
    local: stage === 'local',
    staging: stage === 'staging',
    production: stage === 'production',
    APP_STAGE: stage,
    TIPE_API_KEY: process.env.TIPE_API_KEY,
    TIPE_ID: process.env.TIPE_ID,
    SEGMENT_KEY: process.env.SEGMENT_KEY,
    API_URL: process.env.API_URL || getEnvVar({
      production: 'https://api.tipe.io',
      staging: 'https://staging.api.tipe.io',
      local: 'http://localhost:4500'
    }),
    COOKIE_NAME: process.env.COOKIE_NAME || getEnvVar({
      production: 'tipe-accessToken',
      staging: 'staging-tipe-accessToken',
      local: 'local-tipe-accessToken'
    })
  },
  head: {
    title: 'nuxt-tipe-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get started with Tipe + Nuxt + Vue' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['@nuxtjs/apollo', '@nuxtjs/bulma', '@nuxtjs/font-awesome'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  },
  css: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~plugins/analytics.js', ssr: false }
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

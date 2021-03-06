// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}

const stage = process.env.GRIDSOME_APP_STAGE = process.env.APP_STAGE = process.env.APP_STAGE || 'local'
const prefix = process.env.GRIDSOME_SITE_PREFIX = process.env.SITE_PREFIX = /prod/.test(stage) ? '/docs' : '' 

module.exports = {
  siteName: 'Tipe Docs',
  siteUrl: 'https://tipe.io/docs',
  pathPrefix: prefix,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Section',
        path: './src/sections/**/*.md'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Doc', // Required
        baseDir: './docs/pages', // Where .md files are located
        template: './src/templates/Doc.vue', // Optional,
        includePaths: ['./src/sections'],
        plugins: [
          '@gridsome/remark-prismjs',
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

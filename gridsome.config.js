// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const htmlText = require('html-to-text')

const path = require('path')

const collections = [
  {
    query: `{
      allDoc {
        edges {
          node {
            id
            slug
            title
            parentId
          } 
        }
      }
      allSection {
        edges {
          node {
            id
            content
            parent
          }
        }
      }
    }`,
    transformer: ({ data }) => {
      const content = {
        docs: data.allDoc.edges.map(({node}) => node),
        sections: data.allSections.edges.map(({node}) => node)
      }
      return content.sections.map((section) => {
        const parent = content.docs.find((doc) => {
          return doc.parentId === section.parent
        })
        console.log(section.content)
        const content = htmlText.fromString(section.content)
        return {...section, content, section: section.title, title: parent.title, slug: parent.slug}
      })
    },
    indexName: 'Docs',
    itemFormatter: (node) => {
      return {
        objectID: node.id,
        slug: node.slug,
        content: node.content
      }
    }
  }
]

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
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

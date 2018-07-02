<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import HighlightJs from 'highlight.js'
import Clicker from './Clicker.vue'
import Video from './Video.vue'
import Vue from 'vue'
const renderer = new Marked.Renderer()

const heading = renderer.heading
renderer.heading = function(text, level, raw) {
  if (typeof window === 'undefined') {
    return heading.call(this, text, level, raw)
  }
  const id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-')
  // debugger // eslint-disable-line
  const header = '<h' + level
  return '<a href="' + location.href.replace(/#.*$/, '') + '#' + id + '" class="anchor">' + heading.call(this, text, level, raw) + '</a>'
}
renderer.code = function(code, lang) {
  return `
    <div class="code-sample">
      <div class="lang-name">
        <span>${lang}</span>
      </div>
      <div class="code">
        <pre class="code-pre"><code class="${lang} hljs">${this.options.highlight(code, lang)}</code></pre>
      </div>
    </div>
  `
}

/*
note/aside - green
consider - yellow
tip  - blue
warning - red
*/
const getQuoteType = /(^<p>(warning|consider|tip|note|aside): )(.+)/
renderer.blockquote = function(quote) {
  if (getQuoteType.test(quote)) {
    const content = getQuoteType.exec(quote)
    return '<blockquote class="' + content[2] + '">\n' + content[3] + '</blockquote>\n'
  }
  return '<blockquote>\n' + quote + '</blockquote>\n'
}

function findPos(obj) {
  var curtop = 0
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop
    } while (obj = obj.offsetParent)
    return [curtop]
  }
}

const componentSelectors = [
  'graphiql',
  'box',
  'tipe-video'
]
const componentMap = {
  graphiql: Clicker,
  box: Clicker,
  'tipe-video': Video
}

export default {
  computed: {
    content () {
      Marked.setOptions({
        renderer,
        gfm: true,
        highlight: function (code) {
          return HighlightJs.highlightAuto(code).value
        }
      })

      return Marked(this.markdown || '')
    }
  },
  props: {
    markdown: String
  },
  head () {
    return {
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css'},
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css'}
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.bootstrap()
      // auto scroll
      const el = document.getElementById(window.location.hash.replace('#', ''))
      if (el) {
        window.scroll(0, findPos(el) - 60)
      }
    })
  },
  methods: {
    bootstrap () {
      componentSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(element => {
          // convert attrs to props with the correct type
          const vu = componentMap[selector]
          if (!vu) {
            // mismatch of component selector and component map
            return
          }
          const _props = Object.keys(vu.props).reduce((memo, prop) => {
            const attr = element.getAttribute(prop)
            if (attr !== null) {
              const construct = vu.props[prop].type ? vu.props[prop].type : vu.props[prop]
              memo[prop] = construct(element.getAttribute(prop))
            }
            if (vu.props[prop].default) {
              if (typeof vu.props[prop].default === 'function') {
                memo[prop] = memo[prop] || vu.props[prop].default()
              } else {
                memo[prop] = memo[prop] || vu.props[prop].default
              }
            }
            return memo
          }, {})
          const component = new Vue({
            ...componentMap[selector],
            $store: this.$store,
            created() {
              const vm = this
              Object.assign(vm, _props)
            }
          })
          component.$store = this.$store
          component.$mount(element)
        })
      })
    }
  }
}
</script>
<style lang="stylus">
  @require '~assets/theme/colors.styl'
  bgcolor = rgb(53,55,66)
  gradient = linear-gradient(73deg, lighten(bgcolor, 10%), bgcolor)
  .code-sample
    pre
      background-image gradient
      background-color bgcolor
      border-radius 0px 0px 3px 3px
      code
        background-color transparent

    .lang-name
      color white
      padding 5px 1.5em
      background-color bgcolor
      background-image gradient
      border-radius 3px 3px 0px 0px
      border-bottom 1px solid color-light
</style>

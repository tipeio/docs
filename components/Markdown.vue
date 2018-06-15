<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import HighlightJs from 'highlight.js'
import Clicker from './Clicker.vue'
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

const componentSelectors = [
  'graphiql',
  'box'
]
const componentMap = {
  graphiql: Clicker,
  box: Clicker
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
      if (typeof window !== 'undefined') {
        const el = document.getElementById(window.location.hash.replace('#', ''))
        if (el) {
          window.scroll(0, findPos(el) - 60)
        }
      }
      function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
          do {
            curtop += obj.offsetTop
          } while (obj = obj.offsetParent)
          return [curtop];
        }
      }
    })
  },
  methods: {
    bootstrap () {
      componentSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(element => {
          const component = new Vue({
            ...componentMap[selector],
            $store: this.$store
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

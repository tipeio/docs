<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import HighlightJs from 'highlight.js'
export default {
  computed: {
    content () {
      Marked.setOptions({
        highlight: function (code) {
          return HighlightJs.highlightAuto(code).value
        }
      })

      return Marked(this.markdown || '')
    }
  },
  props: {
    markdown: String
  }
}
</script>



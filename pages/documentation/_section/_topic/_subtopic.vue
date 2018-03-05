<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="content">
          <div class="header">
            <h1 class="title is-3 check-here">{{ doc.navName }}</h1>
          </div>
          <div class="body">
            <Markdown :markdown="doc.docs" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from '~/components/Markdown.vue'
export default {
  layout: 'docs',
  components: {
    Markdown
  },
  data () {
    return {
      doc: {}
    }
  },
  asyncData ({ params, error, payload, store }) {
    const document = store.state.docsByRoutes[params.section + '/' + params.topic + '/' + params.subtopic]
    return {
      doc: payload || document
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

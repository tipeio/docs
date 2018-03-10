<template>
  <div class="page">
    <section class="section">
      <div class="content">
        <div class="header">
          <h1 class="title is-3 check-here">{{ doc.navName }}</h1>
        </div>
        <div class="body">
          <Markdown :markdown="doc.docs" />
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
    return {
      doc: payload || store.state.docsByRoutes[params.section + '/' + params.topic]
    }
  }
}
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="content">
        <div class="header doc-header">
          <div>
            <h6 class="subtitle is-6">{{ $route.params.section }}</h6>
          </div>
          <div>
            <h1 class="title is-2">{{ doc.navName }}</h1>
          </div>
          <div>
            <h6 class="subtitle is-6">Last updated <i>{{ doc._meta.updatedAt | date }}</i></h6>
          </div>
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
  filters: {
    date (value) {
      return new Date(value).toDateString()
    }
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
<style lang="stylus" scoped>
@require '~assets/theme/colors.styl'
.doc-header
  padding 15px
  background-color color-primary-grey-light
  border-radius 3px
  margin-bottom 30px
  h1
    margin 10px 0px
  h6
    margin 5px 0px
  *
    color white
</style>

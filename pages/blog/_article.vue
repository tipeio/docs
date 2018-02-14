<template>
  <section class="section page">
    <div class="content">
      <div>
        <h1 class="title">{{ article.title }}</h1>
      </div>
      <div class="card">
        <div class="card-content">
          <Markdown :markdown="article.body"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import articlesQuery from '~/apollo/query/articles.graphql'
import Markdown from '~/components/Markdown.vue'

export default {
  components: {
    Markdown
  },
  computed: {
    article () {
      const slug = '/' + this.$route.params.article
      return this.articles.find(a => a.urlSlug === slug) || {}
    }
  },
   data () {
    return {
      articles: []
    }
  },
  head () {
    return {
      title: this.article.title
    }
  },
  apollo: {
    articles: {
      query: articlesQuery,
      prefetch: true
    }
  },
  transition(to, from) {
    if (!from || to.path === '/blog') return 'slide-left'
    return 'slide-right'
  }
}
</script>
<style lang="stylus" scoped>
  .page
    padding 5rem 10rem
</style>



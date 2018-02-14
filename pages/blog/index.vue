<template>
  <section class="section page">
    <div>
      <h1 class="title">
        Blog
      </h1>
    </div>
    <div class="columns is-centered is-multiline bloglist">
      <div class="column is-6" v-for="article in articles" :key="article._meta.id">
        <nuxt-link :to="'/blog' + article.urlSlug">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <img
                  :src="article.featuredImage.url"
                  :alt="article.featuredImage.name">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ article.author.name }}</p>
                </div>
              </div>
              <div class="content">
                <h2 class="title">{{ article.title }}</h2>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import articlesQuery from '~/apollo/query/articles.graphql'
export default {
  data () {
    return {
      articles: []
    }
  },
  head () {
    return {
      title: 'blog'
    }
  },
  apollo: {
    articles: {
      query: articlesQuery,
      prefetch: true
    }
  },
  transition(to, from) {
    if (!from || to.name === 'index') return 'slide-right'
    return 'slide-left'
  }
}
</script>
<style lang="stylus" scoped>
.bloglist
  padding 0px 15rem
</style>



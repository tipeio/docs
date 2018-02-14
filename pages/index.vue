<template>
  <div class="page">
    <Hero
      :cta="page.headerCtaText"
      :content="page.mainContent"
      :tweet="tweet"
    />
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import pagesQuery from '~/apollo/query/pages.graphql'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    AppLogo,
    Hero
  },
  computed: {
    page () {
      return this.pages[0] || {}
    },
    tweet () {
      return this.tweets[0] || {}
    }
  },
  data () {
    return {
      loading: 0,
      pages: [],
      tweets: []
    }
  },
  apollo: {
    data: {
      query: pagesQuery,
      prefetch: true,
      manual: true,
      result ({data, loading}) {
        if (!loading) {
          this.pages = data.pages
          this.tweets = data.tweets
        }
      }
    }
  },
  transition: 'slide-right'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

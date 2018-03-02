<template>
  <div class="page">
    <HomeHero
      :header="home.header"
      :sections="sections"
    />
  </div>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeQuery from '~/apollo/query/home.graphql'

export default {
  components: {
    AppLogo,
    HomeHero
  },
  computed: {
    sections () {
      return this.home._meta
        ? [
            this.home.concepts,
            this.home.apiRef,
            this.home.guides,
            this.home.faq
        ] : []
    }
  },
  data () {
    return {
      loading: 0,
      home: {}
    }
  },
  apollo: {
    data: {
      query: HomeQuery,
      variables: {
        id: '5a99d08fa459270013f89629'
      },
      prefetch: true,
      manual: true,
      result ({data, loading}) {
        this.home = data.home
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

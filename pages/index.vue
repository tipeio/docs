<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-tipe-starter
      </h1>
      <span>{{real}}</span>
      <h2 class="subtitle">
        Get started with Tipe + Nuxt + Vue
      </h2>
      <div class="links">
        <nuxt-link to="/hello" class="button--green">hello</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import pagesQuery from '~/apollo/query/pages.graphql'
export default {
  components: {
    AppLogo
  },
  computed: {
    real () {
      return this.pages || ['nope']
    }
  },
  data () {
    return {
      loading: 0,
      pages: []
    }
  },
  apollo: {
    pages: {
      query: pagesQuery,
      result (data) {
        console.log('result ', data)
      },
      prefetch: true
    }
  }
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

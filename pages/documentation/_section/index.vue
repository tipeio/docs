<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="content">
          <h2 class="title is-3">{{ title }}</h2>
        </div>
        <ul>
          <li v-for="topic of topics" :key="topic.navName">
            <nuxt-link :to="'/documentation/' + $route.params.section +  topic.path">
              {{ topic.navName }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  data () {
    return {
      doc: {}
    }
  },
  asyncData ({ params, error, payload, store }) {
    const topics = Object.keys(store.state.docsByRoutes)
      .filter(route => {
        return route.includes(params.section)
      })
      .filter(route => route.split('/').length === 2)
      .map(route => store.state.docsByRoutes[route])

    return {
      topics,
      title: params.section.split('-').join(' ').toUpperCase()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

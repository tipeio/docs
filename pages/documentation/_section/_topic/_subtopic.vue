<template>
  <div class="page">
    <section class="main-content">
      <div class="container">
        <div class="content">
          <div class="header">
            <h1 class="title is-3">{{ doc.navName }}</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  components: {},
  data () {
    return {
      section: this.$route.params.section,
      topic: this.$route.params.topic
    }
  },
  asyncData ({ params, error, payload, store }) {
    if (payload) {
      return {doc: payload}
    } else {
      
    }

  }
}
</script>

<style lang="stylus" scoped>
</style>

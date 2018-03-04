<template>
  <div class="page">
    <section class="main-content">
      <div class="container">
        <div class="content">
          <dov class="header">
            <h1 class="title is-3">{{ document.navName }}</h1>
          </dov>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  components: {},
  computed: {
    document () {
      return this.$store.state.docs.docs['/' + this.$route.params.topic] || {}
    }
  },
  created () {
    console.log(this.document)
    console.log(this.$store.state.docs.docs)
  },
  data () {
    return {
      section: this.$route.params.section,
      topic: this.$route.params.topic
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

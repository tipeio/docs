<template>
  <div class="page">
    <section class="main-content">
      <div class="container docs">
        <h1>hello</h1>
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
      tech: this.$route.params.tech
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

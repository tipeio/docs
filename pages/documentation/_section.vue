<template>
  <div class="page">
    <section class="main-content">
      <div class="container docs">
        <h1>{{ section }}</h1>
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
      section: this.$route.params.section
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

<template>
  <div class="page">
    <Sidebar class="is-hidden-mobile"
      title="Integrations"
      />
    <section class="main-content">
      <div class="container docs">
        <h1>hello</h1>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      tech: this.$route.params.tech
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/util.styl'
  .docs
    height 100vh - 3.25rem
    padding-left sidebar-width
    +mq(mobile)
      padding-left 0px
</style>

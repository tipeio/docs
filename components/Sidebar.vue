<template>
  <aside class="sidebar">
    <p class="menu-label is-hidden-touch">{{ title }}</p>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/util.styl'
  .sidebar
    height 100%
    position fixed
    left 0
    border-right 1px solid red
    width sidebar-width
    overflow-y auto
    padding 15px
</style>

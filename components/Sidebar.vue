<template>
  <aside class="sidebar">
    <p class="menu-label is-hidden-touch">{{ title }}</p>
    <ul class="menu-list">
      <li><a href="/">Dashboard</a></li>
      <li><a href="/">Customers</a></li>
      <li>
        <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
      </li>
    </ul>
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
    width sidebar-width
    overflow-y auto
    padding 15px
</style>

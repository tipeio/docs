<template lang="html">
  <div class="clicker">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isFullUser: state => state.user && state.user.id && state.user.org,
      user: state => state.user
    }),
    text () {
      return this.isFullUser
        ? 'user with org'
        : 'no user or no org'
    }
  }
}
</script>

<style lang="stylus">
  .clicker
    border 1px solid red
</style>

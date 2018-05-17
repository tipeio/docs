<template lang="html">
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=128">
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a target="_blank" href="https://chat.tipe.io/" class="navbar-item">Tipe Community Chat</a>
          <a target="_blank" href="https://portal.productboard.com/x5utguxz8tm6ibnj9o2fdfpn" class="navbar-item">Feature Roadmap</a>
          <a target="_blank" href="https://status.tipe.io/" class="navbar-item">Status Page</a>
          <a target="_blank" href="https://twitter.com/tipeio" class="navbar-item">Twitter</a>
          <a target="_blank" href="https://github.com/tipeio" class="navbar-item">Github</a>
          <nuxt-link to="/documentation/getting-started/faqs" class="navbar-item">FAQ</nuxt-link>
        </div>
        <div class="navbar-end">
          <a target="_blank" href="https://tipe.io/signup" class="navbar-item">Sign Up</a>
          <a target="_blank" href="https://tipe.io/signin" class="navbar-item">Login</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  componentName: 'Navbar'
}
</script>

<style lang="stylus">
@require '~assets/theme/colors.styl'
@require '~assets/theme/util.styl'
nav
.navbar
  // box-shadow 0 3px 5px rgba(57, 63, 72, 0.3)
  background-image linear-gradient(73deg, color-primary, color-light)

  .navbar-item
    color white
    &:hover
      background-color initial
      color white
</style>

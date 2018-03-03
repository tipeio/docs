<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=128">
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">Tipe Concepts</nuxt-link>
          <nuxt-link to="/" class="navbar-item">Guides</nuxt-link>
          <nuxt-link to="/" class="navbar-item">API Reference</nuxt-link>
          <nuxt-link to="/" class="navbar-item">FAQ</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<style lang="stylus">
@require '~assets/theme/colors.styl'
html
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*, *:before, *:after
  box-sizing border-box
  margin 0
  font-family "Lato", "Helvetica Neue", "Roboto", Arial, sans-serif

.page
  transition all .3s cubic-bezier(.55,0,.1,1)

.page-enter-active, .page-leave-active
  transition opacity .3s

.page-enter, .page-leave-active
  opacity 0

.slide-left-enter,
.slide-right-leave-active
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-active,
.slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.layout-padding
  padding 0px 100px

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

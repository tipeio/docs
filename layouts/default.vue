<template>
  <div class="app">
    <Navbar />
    <nuxt/>
    <footer class="footer">
      <div class="container">
        <div class="content">
          Copyright © Tipe inc 2017-2018. All rights reserved
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import Navbar from '~/components/Navbar.vue'
  export default {
    components: {
      Navbar
    },
    methods: {
      ...mapActions({
        getUser: 'getUser'
      })
    },
    created () {
      this.getUser()
    }
  }
</script>
<style lang="stylus">
@require '~assets/theme/colors.styl'
@require '~assets/theme/util.styl'
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

html,.page
  height 100%

body,#__layout
  display flex
  flex-direction column
  min-height 100vh

#__nuxt,.app
  flex 1

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
  padding-left 30px
  padding-right 30px
  +mq(tablet)
    padding-left 50px
    padding-right 50px
  +mq(desktop)
    padding-left 100px
    padding-right 100px
  +mq(widescreen)
    padding-left 150px
    padding-right 150px
  +mq(fullhd)
    padding-left 220px
    padding-right 220px

.footer
  color white
  padding 1rem
  background-image linear-gradient(73deg, color-primary-grey, color-primary-grey-light)

</style>

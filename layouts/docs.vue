<template>
  <div class="app">
    <Navbar />
    <div class="nav-panel">
      <Sidebar class="is-hidden-mobile" :docs="docs" />
    </div>
    <div class="columns main-content docs-panel">
      <div class="column is-12 is-narrow">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
import DocsQuery from '~/apollo/query/docs.graphql'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    docs () {
      return this.$store.state.docsFolder
    },
    user () {
      return this.$store.state.user
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    ...mapActions({
      getUser: 'getUser'
    }),
    saveToStore (docs) {
      const state = this.groupByPaths(docs.folders)
      this.$store.commit('docs/addDocs', state)
    },
    groupByPaths (folders, state = {}) {
      return folders.reduce((_state, folder) => {
        const name = folder.name
        const documents = [...folder.documents]
          .forEach(document => {
            _state[document.path] = document
          })

        if (folder.folders && folder.folders.length) {
          this.groupByPaths(folder.folders, _state)
        }
        return _state
      }, state)
    }
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
  min-height 100vh - (3.25rem * 2)

#__nuxt,.app
  flex 1

:target:before
  content ""
  display block
  height 60px /* fixed header height*/
  margin -60px 0 0 /* negative fixed header height */

.page
  transition all .3s cubic-bezier(.55,0,.1,1)

.page-enter-active, .page-leave-active
  transition opacity .2s

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

nav
.navbar
  // box-shadow 0 3px 5px rgba(57, 63, 72, 0.3)
  background-image linear-gradient(73deg, color-primary, color-light)

  .navbar-item
    color white
    &:hover
      background-color initial
      color white
.footer
  background-image linear-gradient(73deg, color-primary-grey, color-primary-grey-light)
.sidebar-main
  padding-left sidebar-width
  +mq(mobile)
    padding-left 0px
.nav-panel
  width sidebar-width
  position fixed
  left 0

// increase class points to ensure margin-left is always higher
.main-content.docs-panel
  margin-left sidebar-width
  +mq(mobile)
    margin-left 0px
</style>

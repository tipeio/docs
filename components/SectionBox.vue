<template>
  <nuxt-link to="/" class="section-box-container">
    <div class="section-box content columns is-gapless is-mobile is-centered">
      <div class="column is-3-mobile is-2-desktop">
        <div class="art">
          <img :src="section.art.url + '?w=120&h120'" :alt="section.title">
        </div>
      </div>
      <div class="column is-9-mobile is-10-desktop">
        <div class="title is-5">
          <h3>{{ section.title }}</h3>
        </div>
        <div class="body">
          <Markdown :markdown="section.body" />
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import Markdown from '~/components/Markdown.vue'

export default {
  name: 'SectionBox',
  components: {
    Markdown
  },
  props: {
    section: Object,
    default () {
      return {
        art: {}
      }
    }
  }
}
</script>

<style lang="stylus">
  @require '~assets/theme/colors.styl'
  @require '~assets/theme/util.styl'

  .section-box-container
    display flex
    height 100%
    .section-box
      width 100%
      border-radius 3px
      background-color color-grayscale
      padding 1rem
      transition box-shadow .2s ease-in-out
      shadow()
      color white
      &:hover
        shadow-hover()

    a
      text-decoration none
      color white
      &:hover
        color white

    .art
      width 60px
    .content *
      color white !important


</style>

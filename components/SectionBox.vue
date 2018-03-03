<template>
  <nuxt-link to="/" class="section-box-container">
    <div class="section-box content columns">
      <div class="art column is-one-third">
        <img :src="section.art.url + '?w=200'" :alt="section.title">
      </div>
      <div class="column is-two-thirds">
        <div class="title is-4">
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

    .content *
      color white !important


</style>

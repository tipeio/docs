<template>
  <nuxt-link to="/documentation/concesdfdpts" class="section-box-container">
    <article class="media section-box">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="section.art.url + '?w=128&h128'" :alt="section.title">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="title is-5">
            <h3>{{ section.title }}</h3>
          </div>
          <div class="body">
            <Markdown :markdown="section.body" />
          </div>
        </div>
      </div>
    </article>
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
    section: {
      type: Object,
      default () {
        return {
          art: {}
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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

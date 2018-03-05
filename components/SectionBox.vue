<template>
  <nuxt-link :to="{path: 'documentation' + section.path}" class="section-box-container">
    <article class="media section-box">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="section.art.url + '?w=128&h128'" :alt="section.title">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="is-4 title">{{ section.title }}</h3>
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

  .content figure
    margin-bottom 0px

  .section-box-container
    display flex
    height 100%

    article.media
      align-items center

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

      .image img
        border-radius 3px

      .title
        margin-bottom 5px


    a
      text-decoration none
      color white
      &:hover
        color white

    .content *
      color white !important


</style>

<template>
  <div class="section-box content columns">
    <div class="art column is-one-third">
      <img src="" alt="">
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
      return {}
    }
  }
}
</script>

<style lang="stylus">
  .section-box
    width 100%
    border-radius 3px
    background-color white
    padding 1rem
</style>

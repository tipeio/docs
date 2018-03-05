<template>
  <header class="home-hero hero">
    <div class="section">
      <div class="container">
        <div class="content">
          <div class="header title is-4">
            <h1>{{ header }}</h1>
          </div>
          <div class="sections columns is-multiline is-centered">
            <div class="doc-section column is-half" v-for="section of sections" :key="section._meta.id">
              <SectionBox :section="section" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import SectionBox from '~/components/SectionBox.vue'
export default {
  name: 'HomeHero',
  components: {
    SectionBox
  },
  props: {
    header: {
      type: String,
      default: ''
    },
    sections: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/colors.styl'
  .home-hero
    background-image linear-gradient(73deg, color-primary, color-light)

    .content *
      color white !important
</style>

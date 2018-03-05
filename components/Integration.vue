<template>
  <nuxt-link :to="to" class="integration-box">
    <div class="integration">
      <div class="logo">
        <figure class="image is-96x96">
          <img :src="tech.logo.url + '?w=192'" :alt="tech.name">
        </figure>
      </div>
      <div class="name">
        <span class="subtitle is-5">
          {{ tech.name }}
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Integration',
  computed: {
    to () {
      return {
        path: '/documentation/guides' + this.tech.path
      }
    }
  },
  props: {
    tech: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/colors.styl'
  .integration
    border 1px solid lighten(color-light, 70%)
    padding 20px
    border-radius 3px
    transition border .2s
    display flex
    flex-direction column
    justify-content center
    align-items center
    &:hover
      border 1px solid lighten(color-light, 20%)

    .logo
      margin-bottom 15px
</style>

<template>
  <nuxt-link to="/">
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

<style lang="css">
</style>

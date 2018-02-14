<template>
  <section class="hero">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body is-light">
      <div class="columns is-centered is-multiline">

        <div class="column is-narrow has-text-centered">
          <figure class="image is-128x128">
            <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=256" alt="Tipe, content backend for all your apps">
          </figure>
          <h2 class="subtitle">Tipe</h2>
        </div>

        <div class="column is-1 is-narrow">
          <h1 class="title">+</h1>
        </div>

        <div class="column is-narrow has-text-centered">
          <figure class="image is-128x128">
            <img src="https://cdn.tipe.io/tipe/nuxt.png?w=256" alt="Nuxt">
          </figure>
          <h2 class="subtitle">Nuxt</h2>
        </div>
        <div class="column is-1 is-narrow">
          <h1 class="title">+</h1>
        </div>
        <div class="column is-narrow has-text-centered">
          <figure class="image is-128x128">
            <img src="https://cdn.tipe.io/tipe/graphql.png?w=256" alt="GraphQL">
          </figure>
          <h2 class="subtitle">GraphQL</h2>
        </div>

        <div class="column is-12">
          <div class="columns is-centered">
            <div class="column is-6">
              <div class="content is-large">
                <Markdown :markdown="content" />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns">
            <div class="column is-narrow">
              <a class="button is-primary" href="https://tipe.io" target="_blank">
                Sign up
              </a>
            </div>
            <div class="column is-narrow">
              <a class="button is-primary is-outlined" href="https://docs.tipe.io" target="_blank">
                {{ cta }}
              </a>
            </div>
            <div class="column is-narrow">
              <a class="button is-text" ref="twitter"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Markdown from './Markdown'
export default {
  components: {
    Markdown
  },
  props: {
    content: String,
    cta: String,
    tweet: Object
  },
  mounted () {
    window.twttr.widgets.createShareButton(
      '/',
      this.$refs.twitter,
      {
        text: this.tweet.message,
        url: this.tweet.url,
        hashtags: this.tweet.hashtags
      }
    )
  }
}
</script>
<style lang="stylus" scoped>
  .hero
    height 80vh
</style>



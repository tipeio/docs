<template>
  <Layout :sidebar="false" transparent>
    <div class="content">
      <nav>
        <div class="col">
          <Shortcut link="/introduction/getting-started" text="Getting Started" icon="play-icon" />
        </div>
        <div class="col">
          <Shortcut link="/guides/gatsby" text="Guides" icon="navigation-icon" />
        </div>
        <div class="col">
          <Shortcut link="/sdks/javascript" text="SDKS" icon="terminal-icon" />
        </div>
        <div class="col">
          <Shortcut
            link="/reference/api"
            text="API Reference"
            icon="globe-icon"
          />
        </div>
        <div class="col">
          <Shortcut
            link="/starters/react"
            text="Starter Repos"
            icon="code-icon"
          />
        </div>
        
        
      </nav>
    </div>
  </Layout>
</template>

<script>
import Shortcut from "~/components/Shortcut.vue";

export default {
  components: {
    Shortcut
  },
  metaInfo: {
    title:
      "The ultimate static generated documentation theme for the JAM-stack",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "A theme for static site documentation based on Gridsome, ready to deploy to Netlify in one click."
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1,
h3 {
  text-align: center;
  max-width: 600px;
  margin: .5em auto;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

nav .col {
  flex: 0 0 auto;
  width: 100%;
  padding: 0.5rem;

  @include respond-above(sm) {
    width: 33%;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>

<template>
  <Layout :sidebar="false" transparent>
    <div class="content">
      <h1>Tipe Docs</h1>
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
      "Tipe",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Tipe is the Content Delivery Service that fits every app and works the way you write"
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
  margin: 1.5em auto 1.5em;

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

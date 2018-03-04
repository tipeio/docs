<template>
  <div class="page">
    <HomeHero
      :header="home.header"
      :sections="sections"
    />

    <section class="section layout-padding">
      <div class="header content">
        <h3 class="is-3">Integrations</h3>
        <small class="subtitle is-6">Get started in minutes</small>
      </div>
      <div class="integrations columns is-multiline">
        <div class="integration column is-3" v-for="integration of integrations" :key="integration">
          <Integration :tech="integration" />
        </div>
      </div>
    </section>

    <section class="section layout-padding">
      <div class="header content">
        <h3 class="is-3">Open Source and SDKs</h3>
        <small class="subtitle is-6">Get started in minutes</small>
      </div>
      <div class="integrations columns is-center is-multiline">
        <div class="integration column is-3" v-for="integration of integrations" :key="integration">
          <Integration :tech="integration" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeQuery from '~/apollo/query/home.graphql'
import Integration from '~/components/integration.vue'

export default {
  components: {
    AppLogo,
    HomeHero,
    Integration
  },
  computed: {
    sections () {
      return this.home._meta
        ? [
            this.home.concepts,
            this.home.apiRef,
            this.home.guides,
            this.home.faq
        ] : []
    }
  },
  data () {
    return {
      loading: 0,
      home: {},
      integrations: []
    }
  },
  apollo: {
    data: {
      query: HomeQuery,
      variables: {
        id: '5a99d08fa459270013f89629',
        folderId: "5a9aedcd53911b00135b838c"
      },
      prefetch: true,
      manual: true,
      result ({data, loading}) {
        this.home = data.home
        this.integrations = data.integrations.documents
      }
    }
  },
  transition: 'slide-right'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div class="page">
    <HomeHero
      :header="home.header"
      :sections="sections"
    />
    <section class="section">
      <div class="container">
        <div class="header content">
          <h3 class="title is-3">Integrations</h3>
          <h5 class="subtitle is-5">Get started in minutes</h5>
        </div>
        <div class="integrations columns is-multiline">
          <div class="integration column is-3" v-for="integration of integrations" :key="integration.name">
            <Integration :tech="integration" />
          </div>
        </div>
      </div>
    </section>

    <!--
    <section class="section">
      <div class="container">
        <div class="header content">
          <h3 class="title is-3">Open Source and SDKs</h3>
          <h5 class="subtitle is-5">Get started in minutes</h5>
        </div>
        <div class="integrations columns is-center is-multiline">
          <div class="integration column is-3" v-for="integration of integrations" :key="integration.name">
            <Integration :tech="integration" />
          </div>
        </div>
      </div>
    </section>
    -->
  </div>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeQuery from '~/apollo/query/home.graphql'
import Integration from '~/components/Integration.vue'

export default {
  components: {
    AppLogo,
    HomeHero,
    Integration
  },
  computed: {
    sections () {
      return this.home._meta && this.home._meta.published
        ? [
            this.home.concepts,
            this.home.apiRef,
            this.home.guides,
            this.home.faq
        ].filter(doc => doc._meta.published) : []
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

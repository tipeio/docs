<template>
  <aside class="sidebar">
    <div v-for="folder of formatMenu(docs.folders)" :key="folder.name">
      <p class="menu-label is-hidden-touch menu-section has-text-weight-bold has-text-black-bis">
        {{ folder.name }}
      </p>
      <ul class="menu-list" v-if="folder.documents.length">
        <li v-for="document of formatDocs(folder.documents)" :key="document._meta.id">
          <nuxt-link :to="{path: '/documentation/' + folderName(folder) + document.path}">
            {{ document.navName }}
          </nuxt-link>

          <ul v-if="getDocs(folder.folders, document).length">
            <li v-for="subdoc of getDocs(folder.folders, document)" :key="subdoc._meta.id">
              <nuxt-link :to="{path: '/documentation/' + folderName(folder) + document.path + subdoc.path}">
                {{ subdoc.navName }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    docs: {
      type: Object,
      default () {
        return {folders: []}
      }
    }
  },
  methods: {
    folderName (folder) {
      return folder.name.split(' ').join('-').toLowerCase()
    },
    getDocs (folders, document) {
      const matchedFolder = folders.find(folder => folder.name.trim().toLowerCase() === document._meta.name.trim().toLowerCase())
      let docs = []
      if (matchedFolder && Array.isArray(matchedFolder.documents)) {
        docs = matchedFolder.documents.filter(_doc => _doc._meta.published)
      }
      return docs
    },
    formatMenu (folders) {
      return folders
        .slice()
        .sort((a, b) => {
          const order = [
            'getting started',
            'concepts',
            'api reference',
            'guides'
          ]
          const left = order.indexOf(a.name) < order.indexOf(b.name)
          if (left) {
            return -1
          } else if (!left) {
            return 1
          }
          return 0
        })
    },
    formatDocs (docs) {
      return docs.filter(_doc => _doc._meta.published)
    }
  },
  mounted () {
    if (process.client) {
      const activeLink = window.document.querySelector('.is-active-link-exact')
      if (activeLink) {
        activeLink.scrollIntoView(false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/util.styl'
  @require '~assets/theme/colors.styl'
  .sidebar
    height 100vh - (3.25rem * 2)
    width sidebar-width
    overflow-y auto
    padding 15px 15px 75px 25px
    background-color alpha(color-primary-grey-light, 5%)
    .menu-section
      padding-top 1em

    .menu-list
      a:hover
        background-color alpha(color-primary-grey-light, 15%)

      .is-active-link-exact
        background-color color-primary
        color white

        &:hover
          background-color color-primary
          color white !important

</style>

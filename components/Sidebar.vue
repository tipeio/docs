<template>
  <aside class="sidebar">
    <div v-for="folder of docs.folders" :key="folder.name">
      <p class="menu-label is-hidden-touch">
        {{ folder.name }}
      </p>
      <ul class="menu-list" v-if="folder.documents.length">
        <li v-for="document of folder.documents" :key="document._meta.id">
          <nuxt-link :to="{path: folder.name + document.path}">{{ document.navName }}</nuxt-link>

          <ul v-if="getDocs(folder.folders, document).length">
            <li v-for="subdoc of getDocs(folder.folders, document)" :key="subdoc._meta.id">
              <nuxt-link to="index">
                {{ subdoc.navName }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <p class="menu-label is-hidden-touch">Concepts</p>
    <ul class="menu-list">
      <li><a>Text in your apps</a></li>
      <li>
        <a class="is-active">Documents</a>
        <ul>
          <li><a>Blocks</a></li>
          <li><a>Publishing</a></li>
        </ul>
      </li>
      <li><a>Templates</a></li>
      <li><a>Folders</a></li>
    </ul>

    <p class="menu-label is-hidden-touch">Getting Started</p>
    <ul class="menu-list">
      <li><a>Text planning</a></li>
      <li><a>Creating a Document</a></li>
      <li><a>Getting text into your App</a></li>
      <li><a>Organizing your Documents</a></li>
    </ul>

    <p class="menu-label is-hidden-touch">Guides</p>
    <ul class="menu-list">
      <li><a>Vue</a></li>
      <li><a>React</a></li>
      <li><a>Angular</a></li>
      <li><a>JavaScript</a></li>
      <li><a>Node js</a></li>
      <li><a>Android</a></li>
      <li><a>iOS</a></li>
      <li><a>Python</a></li>
      <li><a>PHP</a></li>
    </ul>

    <p class="menu-label is-hidden-touch">API Reference</p>
    <ul class="menu-list">
      <li><a>Authentication</a></li>
      <li>
        <a>REST</a>
        <ul>
          <li><a>Documents</a></li>
          <li><a>Folders</a></li>
        </ul>
      </li>
      <li>
        <a>GraphQL</a>
        <ul>
          <li><a>Documents</a></li>
          <li><a>Folders</a></li>
        </ul>
      </li>
      <li><a>Assets</a></li>
    </ul> -->
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
    getDocs (folders, document) {
      const matchedFolder = folders.find(folder => folder.name.trim().toLowerCase() === document._meta.name.trim().toLowerCase())
      if (!matchedFolder) {
        return []
      } else {
        return matchedFolder.documents || []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/theme/util.styl'
  @require '~assets/theme/colors.styl'
  .sidebar
    height 100vh - 3.25rem * 2
    position fixed
    left 0
    width sidebar-width
    overflow-y auto
    padding 15px
    border-right 1px solid color-light

    .is-active
      background-color color-primary
</style>

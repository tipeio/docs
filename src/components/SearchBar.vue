<template>
  <ais-instant-search-ssr :search-client="searchClient" index-name="Docs">
    <ais-search-box />
    <!-- <ais-hits>
      <ul slot-scope="{ items }">
        <li v-for="item in items" :key="item.objectID">
          <g-link class="item" :to="'/' + item.slug">{{item.slug}}</g-link>
        </li>
      </ul>
    </ais-hits> -->
    <ais-state-results>
      <template slot-scope="{ hits }">
        <ais-hits v-if="hits.length > 0">
          <ul slot-scope="{ items }">
            <li v-for="item in items" :key="item.objectID">
              <g-link class="item" :to="'/' + item.slug">{{item.slug}}</g-link>
            </li>
          </ul>
        </ais-hits>
        <div v-else>
          nothing found
        </div>
      </template>
    </ais-state-results>
  </ais-instant-search-ssr>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'YI1VYX015T',
        '452a5b0ee05a0069912944662debc4ec'
      ),
    };
  },
};
</script>

<style lang="scss">

body {
  font-family: sans-serif;
  padding: 1em;
}
</style>
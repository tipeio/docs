<template>
  <Layout>
    <h1>
      {{ $page.doc.title }}
    </h1>
     <VueRemarkContent class="markdown"/>
  </Layout>
</template>

<page-query>
query Doc ($id: ID!) {
  doc: doc (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
/deep/ > p {
  opacity: .8;
}

/deep/ > h2 {
  padding-top: 10px;
  // margin-top: -80px;

  @include respond-above(md) {
    font-size: 2rem;
  }
}
.dark .markdown /deep/ blockquote {
  color: rgba($textDark, .6);
  &:before {
    background: $sidebarDark;
  }
}
.bright .markdown /deep/ blockquote {
  color: rgba($textBright, .6);
  &:before {
    background: $sidebarBright;
  }
}

/deep/ blockquote {
  position: relative;
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  position: relative;
  padding-left: 20px;
  padding-bottom: 2px;
  margin: 32px 0px;
  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    left: 0px;
    border-radius: 6px;
  }
} 

/deep/ strong .language-text {
  background: $brandPrimary;
  color: white;
} 


.markdown {
  padding-bottom: 50vh;
}
</style>

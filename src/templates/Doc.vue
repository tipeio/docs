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

/deep/ table { padding: 0; border-spacing: 0px; }
/deep/ table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}
/deep/ table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
/deep/ table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
/deep/ table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px; 
  font-size: .8em;
}
/deep/ table tr th :first-child, /deep/ table tr td :first-child {
  margin-top: 0;
}
/deep/ table tr th :last-child, /deep/ table tr td :last-child {
  margin-bottom: 0; 
}
</style>

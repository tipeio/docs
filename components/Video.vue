<template lang="html">
  <div class="video">
    <video :width="width" controls>
      <source :src="src" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    width: {
      type: String,
      default: '50%'
    }
  }
}
</script>

<style lang="stylus">
</style>

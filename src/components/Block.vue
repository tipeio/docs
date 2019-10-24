<template>
  <div class="block">
    <small v-if="pretext" class="pretext">{{ pretext }}</small>
    <slot />
  </div>
</template>
<script>
  export default {
    props: {
      pretext: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .block {
    padding: 30px;
    border-radius: 6px;
    transition: background .15s linear;
    box-shadow: rgba(8, 35, 51, 0.05) 0px 3px 6px;
    margin-bottom: 50px;

    .pretext {
      font-size: .9rem;
      font-weight: 400;
      opacity: .6;
      text-transform: uppercase;
    }

    .dark & {
      background: $backgroundDark;
    }

    .bright & {
      background: $backgroundBright;
    }
  }
</style>

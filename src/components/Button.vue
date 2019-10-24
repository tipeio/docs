<template>
  <button class="button">
    <slot />
  </button>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  .button {
    padding: .5em .6em;
    box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
    line-height: 1.25;
    background: $brandPrimary;
    text-decoration: none;
    color: white;
    font-size: 1em;
    letter-spacing: .08em;
    text-transform: uppercase;
    position: relative;
    transition: background-color .6s ease;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:focus,
    &:hover {
      background: darken($brandPrimary,7%);
      outline: none;
    }
}
</style>

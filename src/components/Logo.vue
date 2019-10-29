<template>
  <g-link to="https://tipe.io" class="logo" title="Back to home">
    <transition name="theme">
      <div v-if="color == 'dark'" class="img">
        <g-image src="~/assets/img/logo-bright.svg" alt="logo" />
        <div class="pill">Docs</div>
      </div>
    </transition>
    <transition name="theme">
      <div v-if="color == 'bright'" class="img">
        <g-image src="~/assets/img/logo-dark.svg" alt="logo" />
        <div class="pill">
          <span>DOCS</span>
        </div>
      </div>
    </transition>
    
  </g-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 40px;
  display: block;
  transition: color .15s ease-in-out;
  color: $textBright;
  position: relative;
  perspective: 200px;

  .img {
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-item: center;
  }

  img {
    height: 100%;
    width: auto;
  }

  .pill {
    font-weight: bold;
    text-transform: uppercase;
    padding: 6px 10px;
    border-radius: 6px;
    margin: 0 10px;
    font-size: .8em;
    .dark & {
      background: $backgroundBright;
      color: $textBright;
    }

    .bright & {
      background: $backgroundDark;
      color: $textDark;
    }
  }
}

.theme-enter-active, .theme-leave-active {
  transition: opacity .15s ease-in-out;
}
.theme-enter, .theme-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

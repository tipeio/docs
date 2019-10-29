<template>
  <header class="header" :class="{'header--scrolled' : pageScrolled, transparent}">
    <div class="logo-container">   
      <Logo :color="logoColor" />
    </div>
    <nav class="nav">
      <div class="link">
        <a href="https://tipe.io">Home</a>
      </div>
      <div class="link">
        <a >Pricing</a>
      </div>
      <div class="link">
        <a >Features</a>
      </div>
      <div class="link">
        <a href="https://tipe.io/docs">Docs</a>
      </div>
      <div class="link">
        <a >Blog</a>
      </div>
      <div class="link">
        <a href="https://tipe.io/signin">Signin</a>
      </div>

      <ThemeSwitch v-on:theme-change="updateLogo" />
      <MenuToggle v-if="menuToggle" />
    </nav>
  </header>
</template>

<script>
import ThemeSwitch from "~/components/ThemeSwitch.vue";
import MenuToggle from "~/components/MenuToggle.vue";
import Logo from "~/components/Logo.vue";
import throttle from 'lodash/throttle'

export default {
  components: {
    ThemeSwitch,
    MenuToggle,
    Logo
  },
  props: {
    menuToggle: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageScrolled: false,
      logoColor: "bright"
    };
  },
  methods: {
    updateLogo: function() {
      this.logoColor = this.logoColor == "dark" ? "bright" : "dark";
    },
    headerScroll: function() {
      let fromTop = window.scrollY

      if ((fromTop > 40 && this.pageScrolled == false) || (fromTop <= 40 && this.pageScrolled == true)) {
        this.pageScrolled = !this.pageScrolled
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)

    if (process.isClient) {
      this.logoColor = localStorage.getItem("theme");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: -12px;
  left: 0;
  z-index: 10;
  transition: padding 0.15s linear, background 0.15s linear,
    border-color 0.15s linear;
  will-change: padding, background;
  border-bottom: 1px solid transparent;

  &--scrolled {
    
      .dark & {
        background: $sidebarDark !important;
        border-color: shade($sidebarDark, 40%);
      }

      .bright & {
        background: $sidebarBright !important;
        border-color: shade($sidebarBright, 10%);
      }
  }
}

nav {
  display: flex;
  align-items: center;
}

.nav, .logo-container {
  padding: 15px 30px;

  @include respond-above(sm) {
    padding: 30px;
  }
}

.logo-container {
  transition: padding 0.15s linear, background 0.15s linear,
    border-color 0.15s linear;
  will-change: padding, background;
  width: 300px;
  @include respond-above(sm) {
    & {
      border-right: 1px solid;
      border-bottom: 1px solid;
    }
    .dark & {
      background: $sidebarDark;
      border-color: shade($sidebarDark, 40%);
    }

    .bright & {
      background: $sidebarBright;
      border-color: shade($sidebarBright, 10%);
    }
    .transparent & {
      background: transparent;
      border-color: transparent;
    }
  }
  
}

.link {
  display: none;
  padding: 0 8px;
  border-radius: 8px;
  transition: background .15s linear;
  &:hover {
    background: $brandPrimary;
    a {
      color: white !important;
    }
  }

  a {
    color: $textBright;
    transition: color .15s linear;
    &:visited {
      color: $textBright;
    }
  }

  .dark & a {
    color: $textDark;
    &:visited {
      color: $textDark;
    }
  }
  @include respond-above(sm) {
    display: unset;
    margin: 0 1em;
  }
}
</style>

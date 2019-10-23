<template>
  <div class="shortcut">
    <h2>
      <g-link :to="link">
        <component :is="icon"></component>
        {{ text }}
      </g-link>
    </h2>
  </div>
</template>

<script>
import {
  PlayIcon,
  GlobeIcon,
  CodeIcon,
  NavigationIcon,
  TerminalIcon,
  ZapIcon
} from "vue-feather-icons";
export default {
  components: {
    ZapIcon,
    PlayIcon,
    GlobeIcon,
    CodeIcon,
    NavigationIcon,
    TerminalIcon
  },
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.shortcut {
  border: 1px solid shade($sidebarBright, 10%);
  background: $sidebarBright;
  padding: 2rem;
  border-radius: 3px;
  transition: background 0.15s ease-in-out, border-color 0.15s ease-in-out;
  width: 100%;
  height: 100%;

  .dark & {
    border: 1px solid shade($sidebarDark, 10%);
    background: $sidebarDark;
  }
}

a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

svg {
  width: 2em;
  height: 2em;
  margin-bottom: 1em;

  @include respond-above(md) {
    width: 3em;
    height: 3em;
  }
}
</style>

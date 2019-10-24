<template>
  <div class="next">
    <div class="message">
      <p>{{message}}</p>
    </div>
    <div class="action">
      <g-link :to="to">
        <btn>{{actionText}}</btn>
      </g-link>
    </div>
  </div>
</template>

<script>
  import Btn from '~/components/Button'
  export default {
    components: {
      Btn
    },
    props: {
      message: {
        type: String,
        default: 'congrats 🏆'
      },
      actionText: {
        type: String,
        default: 'next step'
      },
      to: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .next {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border: solid 1px;
    transition: border .15s ease-in-out;
  }

  .message {
    width: 64%;
    font-size: 1.2em;
  }
  .action {
    width: 32%;
    text-align: end;
  }

  .dark .next {
    border-color: $sidebarBright;
  }

  .bright .next {
    border-color: $sidebarDark;
  }
</style>

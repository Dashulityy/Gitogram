<template>
    <div class="c-header-nav">
        <button class="icon-button">
            <icon name="home" />
        </button>
        <button class="icon-button icon-button--avatar">
            <img class="avatar" :src="avatarUrl">
        </button>
        <button class="icon-button">
            <icon name="exit" />
        </button>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'headerNav',
  components: {
    icon
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
      default: 'https://p-hold.com/people/300/300'
    }
  }
}
</script>
<style lang="scss" src="./headerNav.scss" scoped></style>

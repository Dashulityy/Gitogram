<template>
    <button class="c-user-stories" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./userStories.scss" lang="scss" scoped></style>

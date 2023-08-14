<template>
    <div class="c-users">
        <div class="users__avatar">
            <img :src="avatarUrl" alt="user avatar" class="users__img">
        </div>
        <div class="users__login">
            {{ login }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    avatarUrl: {
      type: String,
      required: true,
      default: 'https://p-hold.com/people/300/300'
    },
    login: {
      type: String,
      required: true,
      default: 'user_login'
    }
  }
}
</script>
<style lang="scss" src="./users.scss" scoped></style>

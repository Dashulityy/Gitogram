<template>
<button :class="['button', {'follow' : !isFollow}]" @click="follow">
    {{ isFollow ? "Unfollow" : "Follow" }}
</button>
</template>

<script>
export default {
  data () {
    return {
      isFollow: false
    }
  },
  methods: {
    follow () {
      this.isFollow = !this.isFollow
    }
  }
}
</script>
<style lang="scss" src="./button.scss" scoped></style>

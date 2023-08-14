<template>
    <div class="c-post">
        <div class="post__user">
            <users />
        </div>
        <div class="post__card">
            <card />
        </div>
        <div class="comments">
            <feed />
        </div>
    </div>
</template>

<script>
import { users } from '../users'
import { feed } from '../feed'
import { card } from '../card'
export default {
  name: 'post',
  components: {
    users,
    feed,
    card
  }
}
</script>
<style lang="scss" src="./post.scss" scoped></style>

<template>
    <div class="c-feed">
        <toggler @onToggle="toggle"/>
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments__item" v-for="commentdata in commentsData" :key="commentdata.id">
                    <comment
                    :username="commentdata.username"
                    :text="commentdata.text"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import commentsData from './data.json'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment
  },
  data () {
    return {
      commentsData,
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>
<style lang="scss" src="./feed.scss" scoped></style>

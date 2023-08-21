<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <logo />
                </div>
                <div class="navigation">
                  <headerNav />
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories__item" v-for="item in items" :key="item.id">
                        <user-stories
                        :avatar="item.owner.avatar_url"
                        :username="item.name"
                        @onPress="handlePress(story.id)"
                      />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="container">
      <ul class="post-list">
        <li class="post__item" v-for="n in 3" :key="n">
          <post />
        </li>
      </ul>
      <slide />
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
import { userStories } from '../../components/userStories'
import stories from './data.json'
import { post } from '../../components/post'
import { headerNav } from '../../components/headerNav'
import { slide } from '../../components/slide'
import * as api from '../../api'
export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    userStories,
    post,
    headerNav,
    slide
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" src="./feeds.scss" scoped></style>

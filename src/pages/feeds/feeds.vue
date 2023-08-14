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
                    <li class="stories__item" v-for="story in stories" :key="story.id">
                        <user-stories
                        :avatar="story.avatar"
                        :username="story.username"
                        @onPress="handlePress(story.id)"
                      />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="container">
      <feed />
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
import { userStories } from '../../components/userStories'
import stories from './data.json'
import { feed } from '../../components/feed'
import { headerNav } from '../../components/headerNav'
export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    userStories,
    feed,
    headerNav
  },
  data () {
    return {
      stories
    }
  }
}
</script>
<style lang="scss" src="./feeds.scss" scoped></style>

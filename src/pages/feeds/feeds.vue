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
                  <li class="stories__item" v-for="item in items" :key="item.id" :id="item.id">
                      <user-stories :data=getStoryData(item)
                      @onPress="$router.push({name: 'stories', params: {initialSlide: item.id}})"
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
      <!--<slider />-->
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
import { userStories } from '../../components/userStories'
import { post } from '../../components/post'
import { headerNav } from '../../components/headerNav'
// import { slider } from '../../components/slider'
import * as api from '../../api'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    userStories,
    post,
    headerNav
    // slider
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    })
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userLogin: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" src="./feeds.scss" scoped></style>

<template>
    <div class="c-slide" :class="{ active }">
        <div class="slide__head">
            <div class="slide__progress">
                <progressBar :active="active" @onFinish="$emit('onFinish')" />
            </div>
            <div class="slide__user">
                <users :login="data.userLogin" :src="data.userAvatar"/>
            </div>
        </div>
        <div class="slide__body">
            <div class="loader" v-if="loading">
                <spinner />
            </div>
            <div class="content" v-else>
                <div v-if="data.content?.length" class="slide__text" v-html="data.content"></div>
                <div class="slide__content" v-else>
                    <slideContent />
                </div>
            </div>
        </div>
        <div class="slide__footer">
            <xbutton />
        </div>
    </div>
    <template>
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('next')">
            <span class="icon">
                <icon name="arrow" />
            </span>
        </button>
        <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prev')">
            <span class="icon">
                <icon name="arrow" />
            </span>
        </button>
    </template>
</template>

<script>
import { users } from '../users'
import { button as xbutton } from '../button'
import { progress as progressBar } from '../progress'
import { content as slideContent } from '../content'
import { icon } from '../../icons'

export default {
  components: {
    users,
    xbutton,
    progressBar,
    slideContent,
    icon
  },
  data () {
    return {}
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  created () {
    console.log(this.data)
  }
}
</script>
<style lang="scss" src="./slide.scss" scoped></style>

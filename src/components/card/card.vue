<template>
    <div class="c-card">
        <div class="card__title">{{ cardTitle }}</div>
        <div class="card__desc"><span class="card__desc--title">{{ cardDescTitle }}</span>{{ cardDesc }}</div>
        <div class="card__rating">
          <rating />
        </div>
    </div>
</template>

<script>
import { rating } from '../rating'
export default {
  name: 'card',
  props: {
    cardTitle: {
      type: String,
      required: true,
      default: 'Vue.js'
    },
    cardDescTitle: {
      type: String,
      required: true,
      default: 'JavaScript '
    },
    cardDesc: {
      type: String,
      required: true,
      default: 'framework for building interactive web applications ⚡'
    }
  },
  components: {
    rating
  }
}
</script>
<style lang="scss" src="./card.scss" scoped></style>

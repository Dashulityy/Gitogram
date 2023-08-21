<template>
    <div class="c-slide">
        <div class="slide__head">
            <div class="slide__progress">
                <progressBar />
            </div>
            <div class="slide__user">
                <users />
            </div>
        </div>
        <div class="slide__body">
            <slideContent />
        </div>
        <div class="slide__footer">
            <xbutton />
        </div>
    </div>
</template>

<script>
import { users } from '../users'
import { button as xbutton } from '../button'
import { progress as progressBar } from '../progress'
import { content as slideContent } from '../content'

export default {
  components: {
    users,
    xbutton,
    progressBar,
    slideContent
  }
}
</script>
<style lang="scss" src="./slide.scss" scoped></style>

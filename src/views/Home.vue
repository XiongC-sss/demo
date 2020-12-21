<template>
  <div :class="$style['home']">
    <left-content></left-content>
    <right-content></right-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeftContent from '@/components/LeftContent.vue' // @ is an alias to /src
import RightContent from '@/components/RightContent.vue' // @ is an alias to /src

@Component({
  components: {
    LeftContent,
    RightContent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" module>
.home{
  width: 1000px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
</style>

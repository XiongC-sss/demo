<template>
  <div :class="$style['left-wrp']">
    <div class="left-top">
      <div class="title-item active-item">推荐</div>
      <div class="title-item">关注</div>
      <div class="title-item">热榜</div>
    </div>
    <div class="left-main">
      <paper
        v-for="paper in showList"
        :key="paper.id"
        :paper="paper"></paper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Paper from '@/components/Paper.vue'
import { PaperItem } from '@/types'
import { Getter } from 'vuex-class'

@Component({
  components: {
    Paper
  }
})
export default class LeftContent extends Vue {
  paperList: PaperItem[] = []
  showList: PaperItem[] = []

  @Getter total?: number

  @Watch('total', { immediate: true })
  totalChange (newVal: number) {
    this.showList = this.paperList.slice(0, newVal)
  }

  created () {
    this.$axios.get('api/getnewslist').then(res => {
      this.showList = this.paperList = res.data.message
    })
  }
}

</script>

<style lang="scss" module>
.left-wrp{
  width: 694px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  :global{
    .left-top{
      display: flex;
      border-bottom: 1px solid #eee;
      .title-item{
        &.active-item{
          color: #0084ff;
        }
        cursor: pointer;
        height: 58px;
        line-height: 58px;
        margin-left: 22px;
      }
    }
    .left-main{

    }
  }
}
</style>

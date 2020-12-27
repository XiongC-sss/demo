<template>
  <div :class="$style['left-wrp']">
    <div class="left-top">
      <div class="title-item active-item">推荐</div>
      <div class="title-item">关注</div>
      <div class="title-item">热榜</div>
    </div>
    <div class="left-main">
      <paper
        v-for="paper in paperList"
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
  getFlag = true
  loading = false

  @Getter keyword?: string

  @Watch('keyword')
  keywordChange () {
    this.getFlag = true
    this.paperList = []
    this.getList()
  }

  created () {
    this.getList()
  }

  mounted () {
    window.addEventListener('scroll', this.loadData)
  }

  destroyed () {
    window.removeEventListener('scroll', this.loadData)
  }

  // 滚动加载
  loadData () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    scrollTop + windowHeight + 50 >= scrollHeight && this.getList()
  }

  getList () {
    if (!this.getFlag || this.loading) return
    this.loading = true
    const params = {
      type: 'home',
      limit: 5,
      word: this.keyword,
      lastId: this.paperList[this.paperList.length - 1] ? this.paperList[this.paperList.length - 1].id : 0
    }
    this.$axios.get('api/getnewslist', { params }).then(res => {
      const list = res.data.message
      this.getFlag = list.length > 0
      this.paperList = [...this.paperList, ...list]
    }).catch(err => console.log(err)).finally(() => { this.loading = false })
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

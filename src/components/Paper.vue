<template>
  <div :class="$style['paper-wrp']">
    <h2>{{paper.title}}</h2>
    <div class="paper" v-if="!showInfo">
      <div class="small-img-wrp">
        <img :class="{'small-img': true}" :src="paper.img_url" alt="">
      </div>
      <div :class="{'small-text': true}">{{paper.zhaiyao}}~接口返回的文字较少，~~~下面请大家用普通念出
        改革春风吹满地
        吹满地
        春风吹满地
        中国人民真争气
        真争气
        人民真争气
        这个世界太疯狂
        耗子都给猫当伴娘
        齐德隆
        齐东强
        齐德隆的咚得隆咚锵</div>
    </div>
    <div class="paper-info" v-if="showInfo">
      <div class="info-img-wrp">
        <img :src="paper.img_url" alt="">
      </div>
      <div class="text" v-html="text"></div>
    </div>
    <div class="operation">
      <div class="operation-content">
        <div class="good"><i class="mdi mdi-thumb-up"></i> {{paper.click}} 赞</div>
        <div class="bad"><i class="mdi mdi-thumb-down"></i> 踩</div>
        <div class="operation-item"><i class="mdi mdi-message" style="font-size: 12px"></i> 评论</div>
        <div class="operation-item"><i class="mdi mdi-share" style="font-size: 16px"></i> 分享</div>
        <div class="operation-item"><i class="mdi mdi-star" style="font-size: 16px"></i> 收藏</div>
        <div class="operation-item"><i class="mdi mdi-heart" style="font-size: 14px"></i> 喜欢</div>
        <div class="operation-item more">...</div>
        <div class="operation-item" @click="openInfo">{{ showInfo ? '收起' : '展开'}} <i class="mdi" :class="showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down'" style="font-size: 16px"></i></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { PaperItem } from '@/types/index'

@Component
export default class Paper extends Vue {
  @Prop() paper: PaperItem | undefined
  paperInfo: PaperItem | null = null
  showInfo = false
  scrollTop = 0

  get text () {
    return this.paperInfo ? this.paperInfo.content : ''
  }

  openInfo () {
    this.scrollTop = window.scrollY
    console.log(this.scrollTop, '---------------------------')
    this.showInfo = !this.showInfo
    !this.showInfo && this.$nextTick(() => {
      window.scrollTo(0, this.scrollTop)
    })
    this.paper && this.showInfo && this.$axios.get(`api/getnew/${this.paper.id}`).then(res => {
      this.paperInfo = res.data.message[0]
    })
  }
}
</script>

<style lang="scss" module>
.paper-wrp{
  border-bottom: 1px solid #eee;
  :global{
    h2{
      padding: 10px 20px;
      margin: 0;
      font-size: 18px;
    }
    .paper{
      padding: 0 20px 20px;
      margin-top: 10px;
      overflow: hidden;
      .small-img-wrp{
        width: 190px;
        height: 105px;
        overflow: hidden;
        border-radius: 5px;
        float: left;
        .small-img{
          width: 100%;
        }
      }
      .small-text{
        padding-left: 20px;
        line-height: 25px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
    }
    .paper-info{
      .info-img-wrp{
        width: 100%;
        padding: 10px;
        img{
          width: calc(100% - 20px);
        }
      }
      .text{
        padding: 10px;
      }
    }
    .operation{
      height: 32px;
      padding: 10px;
      box-shadow: 0 -1px 3px rgba(18,18,18,.1);
      .operation-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 32px;
        div{
          cursor: pointer;
        }
        .good,.bad{
          padding: 0 12px;
          background-color: rgba(0,132,255,.15);
          border-radius: 5px;
          color: #0084ff;
          &.bad{
            margin-left: 10px;
          }
        }
        .operation-item{
          line-height: 22px;
          margin-left: 39px;
          color: #8590a6;
          &.more{
            font-weight: bolder;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div :class="$style['right-wrp']">
    <div class="right-top">
      <div class="right-top-main">
        <div class="item">
          <div class="item-btn answer">
            <i class="mdi mdi-book-edit-outline"></i>
          </div>
          <span>回答问题</span>
        </div>
        <div class="item">
          <div class="item-btn video">
            <i class="mdi mdi-video-outline"></i>
          </div>
          <span>发视频</span>
        </div>
        <div class="item">
          <div class="item-btn write">
            <i class="mdi mdi-pencil-minus-outline"></i>
          </div>
          <span>写文章</span>
        </div>
        <div class="item">
          <div class="item-btn idea">
            <i class="mdi mdi-lightbulb-on-outline"></i>
          </div>
          <span>写想法</span>
        </div>
      </div>
      <div class="right-top-footer">
        <div class="footer-btn">稍后答</div>
        <div class="footer-btn">草稿箱</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RightContent extends Vue {
}
</script>

<style lang="scss" module>
.right-wrp{
  width: 296px;
  :global{
    .right-top{
      position: sticky;
      top: 60px;
      padding-top: 30px;
      height: 160px;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
      .right-top-main{
        margin: 0 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item{
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          .item-btn{
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 26px;
            font-weight: lighter;
            border-radius: 50%;
            background-color: #e1f1ff;
            margin-bottom: 10px;
          }
          .answer{
            color: #0084ff;
          }
          .video{
            background-color: #fff3e2;
            color: #ff9607;
          }
          .write{
            background-color: #fef9e2;
            color: #f4c807;
          }
          .idea{
            background-color: #e5f7f7;
            color: #26bfbf;
          }
        }
      }
      .right-top-footer{
        border-top: 1px solid #eeeeee;
        margin-top: 36px;
        display: flex;
        height: 57px;
        justify-content: space-between;
        .footer-btn{
          cursor: pointer;
          flex: 1;
          line-height: 57px;
          text-align: center;
          border-right: 1px solid #eeeeee;
          font-size: 14px;
          color: #8590a6;
        }
      }
    }
  }
}
</style>

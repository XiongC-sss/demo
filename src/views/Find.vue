<template>
  <div :class="$style['find-wrp']">
    <h1><i class="mdi mdi-file-table-box-multiple" style="color: #0084ff"></i><span>最新专题</span></h1>
    <div class="main">
      <div class="topic-item">
        <img class="item-img" src="https://pic4.zhimg.com/100/v2-dad96557f1b792c489fe90a4ea7fdd67_hd.png">
        <div class="title-wrp">
          <div class="title-text">
            破除日常用车伪科学
            <div class="title-time">
              昨天 19:02 更新 61,703,077 浏览
            </div>
          </div>
          <div class="title-btn">关注专题</div>
        </div>
        <div class="footer-wrp">
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            加油站的燃油宝到底有用没？
          </div>
          <div class="content">
            <span class="content-btn">科学用车扩散器</span>
            对于哪些基础的汽车常识，我国大众普遍存在错误的认知？
          </div>
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            朋友圈科普「去某加油站加油，看到油罐车刚开走，应该掉头去别的加油站」这种说法是否属实？？
          </div>
        </div>
      </div>
      <div class="topic-item">
        <img class="item-img" src="https://pic4.zhimg.com/100/v2-dad96557f1b792c489fe90a4ea7fdd67_hd.png">
        <div class="title-wrp">
          <div class="title-text">
            破除日常用车伪科学
            <div class="title-time">
              昨天 19:02 更新 61,703,077 浏览
            </div>
          </div>
          <div class="title-btn">关注专题</div>
        </div>
        <div class="footer-wrp">
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            加油站的燃油宝到底有用没？
          </div>
          <div class="content">
            <span class="content-btn">科学用车扩散器</span>
            对于哪些基础的汽车常识，我国大众普遍存在错误的认知？
          </div>
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            朋友圈科普「去某加油站加油，看到油罐车刚开走，应该掉头去别的加油站」这种说法是否属实？？
          </div>
        </div>
      </div>
      <div class="topic-item">
        <img class="item-img" src="https://pic4.zhimg.com/100/v2-dad96557f1b792c489fe90a4ea7fdd67_hd.png">
        <div class="title-wrp">
          <div class="title-text">
            破除日常用车伪科学
            <div class="title-time">
              昨天 19:02 更新 61,703,077 浏览
            </div>
          </div>
          <div class="title-btn">关注专题</div>
        </div>
        <div class="footer-wrp">
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            加油站的燃油宝到底有用没？
          </div>
          <div class="content">
            <span class="content-btn">科学用车扩散器</span>
            对于哪些基础的汽车常识，我国大众普遍存在错误的认知？
          </div>
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            朋友圈科普「去某加油站加油，看到油罐车刚开走，应该掉头去别的加油站」这种说法是否属实？？
          </div>
        </div>
      </div>
      <div class="topic-item">
        <img class="item-img" src="https://pic4.zhimg.com/100/v2-dad96557f1b792c489fe90a4ea7fdd67_hd.png">
        <div class="title-wrp">
          <div class="title-text">
            破除日常用车伪科学
            <div class="title-time">
              昨天 19:02 更新 61,703,077 浏览
            </div>
          </div>
          <div class="title-btn">关注专题</div>
        </div>
        <div class="footer-wrp">
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            加油站的燃油宝到底有用没？
          </div>
          <div class="content">
            <span class="content-btn">科学用车扩散器</span>
            对于哪些基础的汽车常识，我国大众普遍存在错误的认知？
          </div>
          <div class="content">
            <span class="content-btn">用车谣言粉碎机</span>
            朋友圈科普「去某加油站加油，看到油罐车刚开走，应该掉头去别的加油站」这种说法是否属实？？
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Find extends Vue {

}
</script>

<style lang="scss" module>
.find-wrp{
  width: 1000px;
  height: 1000px;
  margin: 10px auto;
  :global{
    h1{
      margin: 0;
      span{
        margin-left: 20px;
      }
    }
    .main{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .topic-item{
        cursor: pointer;
        width: 490px;
        height: 460px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 20px;
        .item-img{
          width: 100%;
        }
        .title-wrp{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          .title-text{
            font-size: 24px;
            font-weight: bold;
            .title-time{
              margin-top: 8px;
              font-size: 14px;
              color: #999;
              font-weight: normal;
              line-height: 20px;
            }
          }
          .title-btn{
            display: inline-block;
            width: 102px;
            height: 34px;
            line-height: 34px;
            font-weight: bold;
            border-radius: 3px;
            text-align: center;
            background-color: rgba(0,132,255,.08);
            color: #0084ff;
          }
        }
        .footer-wrp{
          border-top: 1px solid #eeeeee;
          margin: 0 20px;
          padding-top: 10px;
          .content{
            line-height: 24px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .content-btn{
              display: inline-block;
              padding: 0 8px;
              height: 24px;
              line-height: 24px;
              font-size: 12px;
              color: #8590a6;
              background-color: #f6f6f6;
              border-radius: 2px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

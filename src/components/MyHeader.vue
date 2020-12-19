<template>
  <div :class="$style['warp']">
    <div class="head-box">
      <span class="demo-name">益乎</span>
      <div class="my-tabs">
        <div :class="['my-tabs-item', {'active-tab': activeTab === 'home'}]" @click="setActiveTab('home')">首页</div>
        <div :class="['my-tabs-item', {'active-tab': activeTab === 'vip'}]" @click="setActiveTab('vip')">会员</div>
        <div :class="['my-tabs-item', {'active-tab': activeTab === 'find'}]" @click="setActiveTab('find')">发现</div>
        <div :class="['my-tabs-item', {'active-tab': activeTab === 'wait'}]" @click="setActiveTab('wait')">等你来答</div>
      </div>
      <el-select v-model="keyword" filterable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="toSearch"><span class="search-img"></span></el-button>
      <div class="right-box">
        <img class="right-img" src="../assets/img/inform.png" alt="">
        <img class="right-img" src="../assets/img/message.png" alt="">
        <img class="photo" src="../assets/img/avatar.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation, Getter } from 'vuex-class'
import { SetActiveTab } from '@/store/type'

@Component
export default class Header extends Vue {
  activeName = 'first'
  keyword = ''
  options = [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }]

  @Getter activeTab: string | undefined

  @Mutation setActiveTab: SetActiveTab | undefined

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toSearch () {
  }
}
</script>

<style lang="scss" module>
.warp{
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  :global{
    .head-box{
      width: 1000px;
      height: 50px;
      box-sizing: border-box;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding: 0 20px;
      .demo-name{
        padding: 5px 0 10px;
        font-size: 26px;
        color: #0084ff;
      }
      .my-tabs{
        width: 270px;
        margin-left: 40px;
        display: flex;
        height: 50px;
        line-height: 50px;
        .my-tabs-item{
          cursor: pointer;
          margin-right: 20px;
          font-size: 15px;
          color: #8590a6;
          &.active-tab{
            color: #0084ff;
            border-bottom: 2px solid #0084ff;
          }
        }
      }
      .el-select{
        margin-left: 30px;
        .el-input__inner{
          width: 262px;
          height: 32px;
          border-radius: 0;
          border-right: none;
        }
        .el-input__suffix{
          display: none;
        }
      }
      .el-button{
        border-radius: 0 3px 3px 0;
        height: 32px;
        width: 40px;
        background-color: #0084ff;
        padding: 0;
        .search-img{
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url('../assets/img/search.png');
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
      .right-box{
        width: 200px;
        margin-left: 54px;
        img{
          vertical-align: middle;
          margin-left: 40px;
          cursor: pointer;
        }
        .right-img{
          width: 22px;
          height: 22px;
        }
        .photo {
          width: 30px;
          height: 30px;
          border-right: 4px;
        }
      }
    }
  }
}
</style>

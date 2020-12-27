<template>
  <div :class="$style['warp']">
    <div class="head-box">
      <span class="demo-name">益乎</span>
      <div class="my-tabs">
        <div :class="['my-tabs-item', {'active-tab': $route.name === 'Home'}]" @click="toOtherPage('Home')">首页</div>
        <div :class="['my-tabs-item', {'active-tab': $route.name === 'Vip'}]" >会员</div>
        <div :class="['my-tabs-item', {'active-tab': $route.name === 'Find'}]" @click="toOtherPage('Find')">发现</div>
        <div :class="['my-tabs-item', {'active-tab': $route.name === 'Wait'}]" >等你来答</div>
      </div>
      <el-select
        v-model="query"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="getOptions">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="setKeyword(query)"><span class="search-img"></span></el-button>
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
import { SetFunc } from '@/store/type'

@Component
export default class Header extends Vue {
  query = ''
  options = []

  @Getter activeTab?: string
  @Getter total?: number

  @Mutation setActiveTab?: SetFunc
  @Mutation setKeyword?: SetFunc

  toOtherPage (name: string) {
    this.$router.push({ name })
  }

  getOptions (query: string) {
    this.$axios.get('api/getsearchword', { params: { word: query } })
      .then(res => {
        this.options = res.data.message
      }).catch(err => this.$message.error(err.data.message))
  }
}
</script>

<style lang="scss" module>
.warp{
  position: sticky;
  width: 100%;
  height: 50px;
  top: 0;
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
        margin-left: 106px;
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

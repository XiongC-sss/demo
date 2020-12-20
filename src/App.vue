<template>
  <div id="app">
    <my-header></my-header>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyHeader from '@/components/MyHeader.vue'
@Component({
  components: {
    MyHeader
  }
})
export default class App extends Vue {
}

</script>
<style lang="scss">
body{
  padding: 0;
  margin: 0;
  background-color: #f6f6f6;
}

</style>

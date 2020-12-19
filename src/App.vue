<template>
  <div id="app">
    <my-header></my-header>
    <home></home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyHeader from '@/components/MyHeader.vue'
import Home from '@/views/Home.vue'
@Component({
  components: {
    MyHeader,
    Home
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

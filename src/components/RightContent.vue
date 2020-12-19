<template>
  <div :class="$style['right-wrp']">
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
  height: 100%;
  width: 296px;
  border: 1px solid #0084ff;
}
</style>

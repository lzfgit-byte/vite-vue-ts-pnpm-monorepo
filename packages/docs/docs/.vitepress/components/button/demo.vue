<template>
  <h2
    ><p class="p-test">{{ a }}</p></h2
  >
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const a = ref('b');
</script>
<style lang="less">
  .p-test {
    color: red;
  }
</style>

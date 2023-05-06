<template>
  <h1>Hello word!</h1>
  <button @click="handlerClick">{{ `click:${count}` }}</button>
</template>
<script setup lang="ts">
  import { ref } from '@vue/reactivity';

  const count = ref(0);
  const handlerClick = () => {
    count.value++;
  };
</script>

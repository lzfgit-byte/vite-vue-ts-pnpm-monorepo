<template>
  <h1>Hello word!</h1>
  <button class="button_a" @click="handlerClick">{{ `click:${count}` }}</button>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const count = ref(0);
  const handlerClick = () => {
    count.value++;
  };
</script>
<style lang="less">
  .button_a {
    cursor: pointer;
    border: 1px solid;
    outline: none;
    padding: 12px 20px;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    transition: all 0.3s;
  }

  .button_a:hover {
    opacity: 0.8;
  }

  .button_a:active {
    opacity: 1;
  }

  .button_a + .button_a {
    margin-left: 10px;
  }

  .button_a--default {
    color: #606266;
    background: #fff;
    border-color: #dcdfe6;
  }

  .button_a {
    background: #1890ff;
    border-color: #1890ff;
  }

  .button_a--danger {
    background: #f5222d;
    border-color: #f5222d;
  }
</style>

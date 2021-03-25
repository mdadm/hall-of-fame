<template>
  <div class="bg">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout"
})
</script>

<style scoped>
  .bg {
    height: 100vh;
    background: url(../assets/hof-bg.jpeg) no-repeat center;
    background-size: cover;
  }

  .wrapper {
    max-width: 1060px;
    margin: 0 auto;
    padding: 0;
  }
</style>

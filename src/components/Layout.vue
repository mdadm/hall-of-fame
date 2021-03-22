<template>
  <div class="bg">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Layout",
  components: {

  }
}
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

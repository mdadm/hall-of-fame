<template>
  <main class="main">
    <section class="intro">
      <div class="wrapper">
        <Header />
        <Battles />
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Battles from "@/components/Battles";

export default {
  name: 'App',
  components: {
    Battles,
    Header,
  }
}
</script>

<style>

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .wrapper {
    max-width: 1060px;
    margin: 0 auto;
    padding: 0;
  }

  .intro {
    height: 100vh;
    background: url(./assets/hof-bg.jpeg) no-repeat center;
    background-size: cover;
  }
</style>

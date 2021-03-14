<template>
  <Header />
  <main class="main">
    <section class="intro">
      <div class="wrapper">
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
    margin-top: 60px;
  }

  .wrapper {
    max-width: 1060px;
    margin: 0 auto;
  }

  .intro {
    height: 100vh;
    background: url(./assets/hof-bg.jpeg) no-repeat center;
    background-size: cover;
    padding-top: 100px;
  }
</style>

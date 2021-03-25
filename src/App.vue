<template>
  <Layout>
    <Header />
    <Battles />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Battles from "@/components/Battles";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Layout,
    Header,
    Battles,
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
</style>

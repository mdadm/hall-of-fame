<template>
  <Layout>
    <Header />
    <router-view />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Layout,
  },
  setup () {
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>

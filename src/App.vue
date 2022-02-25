<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './template/Header.vue'
import Footer from './template/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style>

</style>

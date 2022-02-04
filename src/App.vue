<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/template/Header.vue'
import Footer from './components/template/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style>

</style>

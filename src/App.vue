<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>

import './assets/css/global.css'

import Header from './template/Header.vue'
import Main from './template/Main.vue'
import Footer from './template/Footer.vue'

export default {
  name: 'App',
  components: { Header, Main, Footer }
}
</script>

<style>

</style>

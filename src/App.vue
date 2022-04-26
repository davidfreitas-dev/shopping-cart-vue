<template>
  <div id="app">
    <Header />
    <transition mode="out-in" 
      enter-active-class="animate__animated animate__fadeIn" 
      leave-active-class="animate__animated animate__fadeOut">
      <router-view />
    </transition>
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
.animate__animated.animate__fadeIn {
  --animate-duration: .5s;
}

.animate__animated.animate__fadeOut {
  --animate-duration: .5s;
}
</style>

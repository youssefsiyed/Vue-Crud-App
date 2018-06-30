<template>
  <div id="app">
    <Navbar/>
    <br>
    <router-view></router-view>
    <br>    
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,Footer
  }
}
</script>

<style>
</style>

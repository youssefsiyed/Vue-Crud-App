<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Page',
      showAlert : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  background-color: blue;
  width: 100%;
  height: 30px;
}
</style>

<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <svg-icon icon-class="man"></svg-icon>
        home
      </router-link>
      <router-link to="/about">
        <svg-icon icon-class="snow"></svg-icon>
        about
      </router-link>
    </nav>
    <router-view></router-view>

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <svg-icon iconClass="man"></svg-icon>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

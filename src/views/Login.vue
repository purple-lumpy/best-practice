<template>
  <div>
    <h2>用户登录</h2> <div>
    <input type="text" v-model="username">
    <button @click="login">登录</button> </div>
  </div>
</template>

<script>
export default {
  name: 'Login.vue',
  data () {
    return {
      username: 'admin'
    }
  },
  methods: {
    login () {}
  }
}
</script>

<style scoped>

</style>

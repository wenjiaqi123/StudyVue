<template>
  <div class="Login">
    <input type="text" value="" placeholder="手机号">
    <br>
    <button @click="userLogin">登录</button>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {}
    },
    methods: {
      userLogin: function () {
        this.axios.post("/login/userLogin.html", {

        });
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-for="(obj,i) in userList">{{obj}}</div>
    <br>
    <button @click="sendGet">点我发送Get请求</button>
    <button @click="sendPost">点我发送Post请求</button>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        userList: []
      }
    },
    methods: {
      sendGet: function () {
        this.axios.get("/demo/selectUsers", {
          params: {
            id:1
          }
        })
          .then(resp => {
          let data = resp.data;
          this.userList = data;
        })
          .catch(resp => {

          })
      },
      sendPost:function () {
        this.axios.post("/demo/insertUser",{
            user:{
              id:100,
              userName:"闻家奇"
            }
        })
          .then(resp=>{

          })
          .catch(resp=>{

          })
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    myheader
    <button @click="getSome">点我发送请求</button>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    methods: {
      getSome: function () {
        this.axios.get("/course/selectCourseDetailsList", {
          params: {
          }
        }).then(data => {

        })
          .catch(data => {

          })
      }
    },

  }
</script>

<style scoped>

</style>

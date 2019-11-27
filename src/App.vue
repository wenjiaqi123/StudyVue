<template>
  <div id="app">
    <div>
      <Demo></Demo>
    </div>
  </div>
</template>

<script>
  import Demo from './components/demo/Demo'

  export default {
    name: 'App',
    components: {
      Demo
    },
    data() {
      return {
      }
    },
    mounted(){

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none; /*下划线*/
    list-style: none; /* ul li 的小圆点*/
    font-family: Arial; /*字体*/
    font-size: 16px; /*文字大小*/
    text-align: center; /*文字居中*/
  }
</style>

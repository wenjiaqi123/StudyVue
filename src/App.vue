<template>
  <div id="app">
    <div>
      <MyHeader></MyHeader>
    </div>
    <div>
      <HomeBody></HomeBody>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/header/MyHeader'
  import HomeBody from './components/home/HomeBody'
  export default {
    name: 'App',
    components: {
      // "homeBody":HomeBody
      HomeBody,
      MyHeader
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

<template>
  <div class="mallNav">
    <ul>
      <li>
        <span>a</span>
        <span @click="intoBook">书刊</span>
      </li>
      <li>
        <span>bb</span>
        <span>外设</span>
      </li>
      <li>
        <span>cc</span>
        <span>软件</span>
      </li>
      <li>
        <span>dd</span>
        <span>康复指南</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {
        buttonSize: 'large'
      }
    },
    methods: {
      intoBook: function () {
      }
    }
  }
</script>

<style scoped>
  .mallNav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mallNav li {
    display: inline-block;
    width: 216px;
    height: 63px;
    margin: 6px auto;
    background-color: #F3F5F6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

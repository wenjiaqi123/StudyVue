<template>
  <div class="Login">
    <input type="text" v-model="iphoneNo" placeholder="手机号">
    {{iphoneNo}}
    <br>
    <input type="text" value="" placeholder="请输入验证码"><span>X785</span>
    <br>
    <input type="text" v-model="smsCode" placeholder="手机验证码">
    {{smsCode}}
    <br>
    阅读同意协议
    <br>
    <Checkbox v-model="keepPwd">记住密码</Checkbox>
    <button @click="userLogin">登录</button>
  </div>
</template>

<script>
  import Header from "@/components/header/Header"
  import {
    setCookie
  } from "../../tools/cookie";

  export default {
    name: "",
    components: {},
    data() {
      return {
        //手机号
        iphoneNo: 15251922665,
        //手机短信验证码
        smsCode: 123456,
        //是否记住密码，默认记住
        keepPwd: true
      }
    },
    methods: {
      userLogin: function () {
        let data = {
          "iphoneNo": this.iphoneNo,
          "smsCode": this.smsCode
        }
        this.axios.post("/smsCode/checkSmsCode", this.qs.stringify(data))
          .then(resp => {
            //登录成功
            let data = resp.data;
            let msg = data.msg;
            let userInfo = data.userInfo;
            if (msg === "success") {
              this.$router.push("userCenter")
            }
            //
            window.sessionStorage.setItem("isLogin", true);
            window.sessionStorage.setItem("userInfo", userInfo);
            //如果记住密码，设置cookie
            if (this.keepPwd) {
              setCookie("isLogin", true);
              setCookie("userInfo", userInfo);
            }
            window.location.reload();
          })
          .catch(resp => {
            let data = resp.data;
            console.log(`响应500 ${data}`);
          });
      }
    }
  }
</script>

<style scoped>

</style>

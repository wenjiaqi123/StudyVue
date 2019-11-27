// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//全局配置axios
// axios.defaults.baseURL="http://www.wyxjava.com"
axios.defaults.baseURL="http://localhost:8001/StudySpringBoot"
// axios.defaults.headers.common['Authorization'] = 'Token'、
//解决 options 预请求
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
};


//添加原型对象,组件中可以直接使用this.axios
Vue.prototype.axios = axios;


Vue.use(ViewUI)

//创建一个 Vue 对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

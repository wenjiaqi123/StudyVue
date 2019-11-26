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

Vue.use(ViewUI)

//创建一个 Vue 对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



















import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// // 加入 axios 套件至原型內
// Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

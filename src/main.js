import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from "vue-axios";

Vue.config.productionTip = false

Vue.use(router);
Vue.use(ElementUI)

Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
  router,
  ElementUI

}).$mount('#app')

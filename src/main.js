import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import zComponentes from './index.js'

Vue.use(zComponentes);

new Vue({
  render: h => h(App)
}).$mount('#app')

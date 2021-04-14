import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
 new Vue({

 }).$mount('#app')

 */

//동일


/** new Vue ({
  el: '#app'
})
**/
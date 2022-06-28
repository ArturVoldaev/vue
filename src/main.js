import Vue from 'vue'
import App from './App.vue'
import {str1, str2} from '../src/test-exsport'
import fun from '../src/function-allert'

Vue.config.productionTip = false

fun(str1)
fun(str2)

new Vue({
  render: h => h(App),
}).$mount('#app')
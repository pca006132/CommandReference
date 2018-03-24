import Vue from 'vue'
import bootstrapVue from "bootstrap-vue"
import App from './app.vue'

Vue.use(bootstrapVue)

new Vue({
    el: '#app',
    render: h => h(App)
})
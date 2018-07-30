import Vue from 'vue'
import App from './App'
import router from './router'
import index from './views/scoring/index'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: "<App/>",
    components: {App},
    // render: h => h(index) 
});
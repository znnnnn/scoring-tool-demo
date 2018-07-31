import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// import index from './views/scoring/index'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: "<App/>",
    components: {App},
    render: h => h(App)
});
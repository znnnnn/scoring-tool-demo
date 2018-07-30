import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/scoring/index'
// import rootApp from '../components/rootApp'
// import hello from '../components/hello'
// import world from '../components/world'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index
    }/*, {
        path: '/hello',
        component: hello
    }, {
        path: '/world',
        component: world
    }*/]
})
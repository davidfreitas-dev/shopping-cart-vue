import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/Product',
        component: Product
    }, {
        path: '/Cart',
        component: Cart
    }]
})
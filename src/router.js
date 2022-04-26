import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

Vue.use(Router)

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/product/:id',
        component: Product
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/checkout',
        component: Checkout
    }]
})
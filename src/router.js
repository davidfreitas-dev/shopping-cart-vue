import Vue from 'vue'
import Router from 'vue-router'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Products
    }, {
        path: '/product/:id',
        component: Product
    }, {
        path: '/cart',
        component: Cart
    }]
})
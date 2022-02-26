import Vue from 'vue'
import Router from 'vue-router'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'

Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) 
            return savedPosition        
        else if (to.hash) 
            return { selector: to.hash }
        else
            return { x: 0, y: 0 }
    },
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
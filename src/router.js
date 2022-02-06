import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: ProductList
    }, {
        path: '/product-details',
        component: ProductDetails
    }, {
        path: '/cart',
        component: Cart
    }]
})
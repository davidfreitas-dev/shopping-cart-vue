import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: ProductsList
    }, {
        path: '/product/:id',
        component: ProductDetails
    }, {
        path: '/cart',
        component: Cart
    }]
})
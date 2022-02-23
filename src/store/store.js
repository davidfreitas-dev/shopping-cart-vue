import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: 'Processor Intel Core i5 8th Gen', imageURL: 'proc-intel.png', price: 1200.00 },
            { id: 2, name: 'Processor Amd Ryzen 5 2400G', imageURL: 'proc-amd.png', price: 900.00 },
            { id: 3, name: 'Corsair SSD M.2 NVME 256GB', imageURL: 'ssd-corsair.png', price: 300.00 },
            { id: 4, name: 'Motherboard ASUS H310M', imageURL: 'motherboard.png', price: 450.00 },
            { id: 5, name: 'Kingston Hyper X RAM Memory 8GB', imageURL: 'ram-memory.png', price: 200.00 },
            { id: 6, name: 'Personal Gamer Computer', imageURL: 'gamer-pc.png', price: 3500.00 },
        ],
        cart: [
            {
                products: []
            }
        ]
    },
    getters: {
        cartTotal(state) {  
            return state.cart[0].products.map(item => item.qty * item.price)
                .reduce((total, current) => total + current, 0)
        },
    },
    mutations: {
        addItemQty(state, itemId) {
            state.cart[0].products.filter(item => {
                if (item.id == itemId) {
                    item.qty++
                }
            })
        },
        reduceItemQty(state, itemId) {
            state.cart[0].products.filter(item => {
                if (item.id == itemId && item.qty > 1) {
                    item.qty--
                }
            })
        },
        addToCart(state, product) {
            state.cart[0].products.push(product)
        },
        removeItemCart(state, productId) {
            state.cart[0].products = state.cart[0].products.filter(p => {
                return p.id != productId
            })
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: 'Processor Intel Core i5 8th Gen', imageURL: 'proc-intel.png', qty: 2, price: 1200.00 },
            { id: 2, name: 'Processor Amd Ryzen 5 2400G', imageURL: 'proc-amd.png', qty: 3, price: 900.00 },
            { id: 3, name: 'Corsair SSD M.2 NVME 256GB', imageURL: 'ssd-corsair.png', qty: 1, price: 300.00 },
            { id: 4, name: 'Motherboard ASUS H310M', imageURL: 'motherboard.png', qty: 3, price: 450.00 },
            { id: 5, name: 'Kingston Hyper X RAM Memory 8GB', imageURL: 'ram-memory.png', qty: 4, price: 200.00 },
            { id: 6, name: 'Personal Gamer Computer', imageURL: 'gamer-pc.png', qty: 1, price: 3500.00 },
        ],
        cart: [
            {
                products: [
                    { id: 1, name: 'Processor Intel Core i5 8th Gen', imageURL: 'proc-intel.png', qty: 2, price: 1200.00 },
                    { id: 3, name: 'Corsair SSD M.2 NVME 256GB', imageURL: 'ssd-corsair.png', qty: 1, price: 300.00 },
                    { id: 6, name: 'Personal Gamer Computer', imageURL: 'gamer-pc.png', qty: 1, price: 3500.00 },
                ]
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
        setTotalItem(state) {
            state.cart[0].products.map(item => {
                item.total = item.qty * item.price
            })
        },
        removeItemCart(state, productId) {
            state.cart[0].products = state.cart[0].products.filter(p => {
                return p.id != productId
            })
        }
    }
})
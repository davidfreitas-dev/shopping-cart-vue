import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: 'Processor Intel Core i5 8th Gen', images: ['proc-intel.png', 'proc-amd.png', 'ram-memory.png'], price: 1200.00 },
            { id: 2, name: 'Processor Amd Ryzen 5 2400G', images: ['proc-amd.png', 'proc-intel.png', 'ram-memory.png'], price: 900.00 },
            { id: 3, name: 'Corsair SSD M.2 NVME 256GB', images: ['ssd-corsair.png', 'ram-memory.png', 'proc-intel.png'], price: 300.00 },
            { id: 4, name: 'Motherboard ASUS H310M', images: ['motherboard.png', 'ram-memory.png', 'proc-amd.png'], price: 450.00 },
            { id: 5, name: 'Kingston Hyper X RAM Memory 8GB', images: ['ram-memory.png', 'motherboard.png', 'ssd-corsair.png'], price: 200.00 },
            { id: 6, name: 'Personal Gamer Computer', images: ['gamer-pc.png', 'kit-gamer.png', 'motherboard.png' ], price: 3500.00 },
        ],
        cart: [
            { products: [] }
        ]
    },
    getters: {
        products(state) {
            return state.products
        },
        product(state) {
            return (productId) => {
                return state.products.find(product => product.id == productId)
            }
        },
        cart(state) {
            return state.cart
        }
    },
    mutations: {
        addItemQty(state, itemId) {
            state.cart[0].products.filter(item => {
                if (item.id == itemId) {
                    item.quantity++
                }
            })
        },
        reduceItemQty(state, itemId) {
            state.cart[0].products.filter(item => {
                if (item.id == itemId && item.quantity > 1) {
                    item.quantity--
                }
            })
        },
        addToCart(state, product) {
            if (!product) {
                return
            }

            state.cart[0].products.push(product)
        },
        removeItemCart(state, productId) {
            // Remover item usando o splice
            state.cart[0].products = state.cart[0].products.filter(p => {
                return p.id != productId
            })
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: 'Processor Intel Core i5 8th Gen', image: 'proc-intel.png', price: 1200.00 },
            { id: 2, name: 'Processor Amd Ryzen 5 2400G', image: 'proc-amd.png', price: 900.00 },
            { id: 3, name: 'Corsair SSD M.2 NVME 256GB', image: 'ssd-corsair.png', price: 300.00 },
            { id: 4, name: 'Motherboard ASUS H310M', image: 'motherboard.png', price: 450.00 },
            { id: 5, name: 'Kingston Hyper X RAM Memory 8GB', image: 'ram-memory.png', price: 200.00 },
            { id: 6, name: 'Personal Gamer Computer', image: 'gamer-pc.png', price: 3500.00 },
        ]
    }
})
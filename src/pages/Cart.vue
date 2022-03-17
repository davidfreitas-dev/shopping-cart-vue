<template>
	<main>
		<div class="product-cart">
			<div class="wrapper">
				<div class="cart-collection">
					<div class="cart-header">
						<p>Item</p>
						<p>Quantity</p>
						<p>Unit Price</p>
						<p>Total</p>
					</div>
            <div class="cart-item" v-for="(product, i) in cart.products" :key="i">						
              <div class="cart-product">
                <router-link :to="`product/${product.id}`">
                  <div class="cart-image" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${product.images[0]}`) + ')' }"></div>
                </router-link>
                <div class="cart-product-info">
                  <router-link :to="`product/${product.id}`">
                    <p class="cart-product-name">{{ product.name }}</p>
                  </router-link>
                  <p class="cart-price-sm">{{ product.price | formatValue }}</p>
                  <small>x {{ product.quantity }}</small>
                  <div class="remove" @click="removeItemCart(product.id)">
                    <span class="ti-trash"></span> Remove
                  </div>
                </div>
              </div>
              <div class="cart-quantity-md">
                <div class="cart-quantity-controls">
                  <button @click="reduceItemQty(product.id)">-</button>
                  <input type="number" :value="product.quantity" readonly />
                  <button @click="addItemQty(product.id)">+</button>
                </div>
              </div>
              <div class="cart-unit-price">
                <h4>{{ product.price | formatValue }}</h4>
              </div>
              <div class="cart-product-total">
                <h4>{{ product.total | formatValue }}</h4>
              </div>
              <div class="cart-controls-sm">
                <div class="remove-sm" @click="removeItemCart(product.id)">
                  <span class="ti-trash"></span> Remove
                </div>
                <div class="cart-quantity-controls-sm">
                  <button @click="reduceItemQty(product.id)">-</button>
                  <input type="number" :value="product.quantity" readonly />
                  <button @click="addItemQty(product.id)">+</button>
                </div>
              </div>
            </div>
				</div>				
				<div class="cart-total-holder">
					<div class="cart-total">
						<p>Total:</p>
						<p>{{ cartTotal | formatValue }}</p>
					</div>
					<div class="cart-action-button">
						<router-link to="/">Continue Shopping</router-link>
						<router-link to="/checkout" class="btn-main">Proceed to Checkout</router-link>
					</div>
				</div>
			</div>
		</div>
		<About />
	</main>
</template>

<script>
import About from '../template/About.vue'
export default {
  components: {
    About,
  },
  data() {
    return {
      cart: null,
      cartTotal: null
    }
  },
  methods: {
    loadData() {
      this.cart = this.$store.getters.cart[0]
      this.calcTotalItem()
      this.calcTotalCart()
    },
    calcTotalItem() {
      this.cart.products.map(p => {
        const totalItem = p.quantity * p.price
        this.$set(p, 'total', totalItem)
      })
    },
    calcTotalCart() {  
      this.cartTotal = this.cart.products.map(item => item.quantity * item.price)
        .reduce((total, current) => total + current, 0)
    },
    addItemQty(itemId) {
      this.$store.commit('addItemQty', itemId)
      this.loadData()
    },
    reduceItemQty(itemId) {
      this.$store.commit('reduceItemQty', itemId)
      this.loadData()
    },
    removeItemCart(productId) {
      this.$store.commit('removeItemCart', productId)
      this.loadData()
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>
  .btn-main {
    font-size: 1rem !important;
  }

  .product-cart {
    margin-top: 1rem;
  }

  .cart-collection {
    margin-top: 0rem;
  }

  .cart-item {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 0rem 1.3rem;
    border: 1px solid #efefef;
    margin-bottom: 1rem;
  }

  .cart-product {
    display: grid;
    grid-template-columns: 80px auto;
    grid-gap: 0rem 1.3rem;
    padding: 1rem 1rem;
  }

  .cart-image {
    height: 75px;
    border-radius: 7px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .cart-quantity-md,
  .cart-unit-price,
  .cart-product-total {
    display: none;
  }

  .cart-controls-sm {
    display: flex;
    justify-content: space-between;
    padding: .8rem;
  }

  .remove-sm {
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--main);
  }

  .remove{
    display: none;
  }

  .cart-quantity-controls-sm {
    display: flex;
  }

  .cart-quantity-controls-sm button,
  .cart-quantity-controls-sm input,
  .cart-quantity-controls button,
  .cart-quantity-controls input {
    height: 25px;
    width: 25px;
    border: none;
    outline: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    color: #505050;
  }

  .cart-quantity-controls-sm input,
  .cart-quantity-controls input {
    margin: 0;
    width: 40px;
  }

  .cart-quantity-controls-sm button,
  .cart-quantity-controls button {
    background: var(--main);
    color: #fff;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
  }

  .cart-product-name {
    font-weight: bold;
    color: #505050;
    margin-bottom: .3rem;
  }

  .cart-price-sm {
    color: var(--main);
    font-weight: bold;
    margin-bottom: .3rem;
  }

  .cart-product-info small {
    font-weight: bold;
    color: #333;
  }

  .cart-total-holder {
    margin-top: 1rem;
  }

  .cart-total {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .cart-total p {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .cart-action-button {
    display: flex;
    flex-direction: column;
  }

  .cart-action-button a {
    display: block;
    text-align: center;
    font-weight: 600;
    padding: .7rem;
    margin-bottom: .5rem;
    border: 4px solid var(--dark);
    border-radius: 5px;
  }

  .cart-action-button a:first-child {
    order: 1;
    background: var(--dark);
    color: #fff;
  }

  .cart-header {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .cart-quantity-md,
    .cart-unit-price,
    .cart-product-total {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15%;
    }

    .cart-item:first-child {
      border-top: 1px solid #efefef;
    }

    .cart-item {
      border: none;
      display: flex;
      border-bottom: 1px solid #efefef;
    }

    .cart-controls-sm {
      display: none;
    }

    .cart-product {
      border: none;
      flex: 1;
      align-items: center;
    }

    .cart-product small {
      display: none;
    }
    
    .product-cart {
      margin-top: 0rem;
      padding-bottom: 2rem;
    }

    .cart-collection {
      margin-top: 1rem;
    }

    .cart-header {
      display: flex;
      padding: 1rem 0rem;
    }

    .cart-header p {
      font-weight: bold;
      color: #505050;
      width: 16.5%;
      text-align: center;
    }

    .cart-header p:first-child {
      width: auto;
      flex: 1;
      text-align: left;
    }

    .cart-total,
    .cart-action-button {
      justify-content: flex-end;
      flex-direction: row;
    }

    .cart-total p:first-child {
      margin-right: 1rem;
    }

    .cart-action-button a {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .cart-action-button a:first-child {
      margin-right: 1.2rem;
      order: 0;
    }

    .cart-quantity-controls-sm input,
    .cart-quantity-controls input {
      margin-left: .85rem;
      width: 45px;
    }

    .cart-price-sm {
      display: none;
    }

    .remove {
      display: block;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      color: var(--main);
    }
  }
</style>
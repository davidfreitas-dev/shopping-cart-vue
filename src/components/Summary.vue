<template>
    <div class="summary">
        <div class="summary-items">
            <span class="title">Summary</span>
            <template v-for="(product, i) in cart.products">
              <div class="item" :key="i">
                <p>{{ product.name }} <small>x {{ product.quantity }}</small></p>
                <div>{{ product.total | formatValue }}</div>
              </div>
            </template>
        </div>
        <div class="summary-actions">
            <button>Finish</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cart: null
    }
  },
  methods: {
    loadData() {
      this.cart = this.$store.state.cart
    }
  },
  created () {
    this.loadData();
  },
}
</script>

<style>
.summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin: 1rem .5rem;
  padding: 1.3rem;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
}

.summary-items .title {
  font-size: 1.3rem;
  font-weight: 700;
}

.summary-items .item {
  display: flex;
  justify-content: space-between;
  margin-top: .75rem;
  margin-bottom: 0;
  border-bottom: 1px solid #c3c3c3;
}

.item p {
  font-size: .85rem;
  padding: .5rem 0;
}

.item small {
  color: var(--main);
  font-weight: 600;
  padding-right: .25rem;
}

.item div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.summary-actions button {
  width: 100%;
  height: 45px;
  color: #fff;
  margin: 1rem 0;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: .05rem;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: var(--main);
  outline: none;
  border: none;
  cursor: pointer;
}

.summary-actions button:hover {
  background-color: #eb6550;
}

@media only screen and (min-width: 768px) {
  .summary {
    width: 50%;
    margin: 0 .5rem;
  }

  .summary-actions button {
    margin-top: 0;
  }
}

@media only screen and (min-width: 1024px) {
  .summary {
    width: 40%;
  }
}
</style>
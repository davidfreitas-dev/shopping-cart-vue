<template>
  <main>
    <div class="wrapper">
      <div class="section-info">
        <h3>Checkout</h3>
        <hr class="separator">
      </div>
      <div class="checkout">
        <div class="form-checkout">
          <input type="text" name="zipcode" placeholder="zipcode"/>
          <input type="text" name="address" placeholder="address"/>
          <input type="text" name="number" placeholder="number"/>
          <input type="text" name="complement" placeholder="complement"/>
          <input type="text" name="neighborhood" placeholder="neighborhood"/>
          <input type="text" name="city" placeholder="city"/>
          <input type="text" name="state" placeholder="state"/>
          <input type="text" name="country" placeholder="country"/>
        </div>
        <Summary />
      </div>
    </div>
    <About />
  </main>
</template>

<script>
import Summary from '../components/Summary.vue'
import About from '../template/About.vue'

export default {
  components: {
    About,
    Summary
  },
}
</script>

<style>
.checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
}

.form-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem;
}

.form-checkout input {
  color: var(--dark);
  font-size: 1rem;
  width: 100%;
  padding: .85rem;
  margin-bottom: .5rem;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  outline: none;
}

@media only screen and (min-width: 768px) {
  .checkout {
    flex-direction: row;
  }

  .form-checkout {
    width: 60%;
  }
}
</style>
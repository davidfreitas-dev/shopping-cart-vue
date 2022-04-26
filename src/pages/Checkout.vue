<template>
  <main>
    <div class="wrapper">
      <Breadcrumb :page-title="pageTitle"/>
      <div class="checkout">
        <div class="form-checkout">
          <input type="text" name="zipcode" placeholder="zipcode" v-model="zipcode" @keyup="searchZipcode()"/>
          <input type="text" name="address" :value="data.logradouro" placeholder="address"/>
          <input type="text" name="number" :value="data.numero" placeholder="number"/>
          <input type="text" name="complement" :value="data.complemento" placeholder="complement"/>
          <input type="text" name="neighborhood" :value="data.bairro" placeholder="neighborhood"/>
          <input type="text" name="city" :value="data.localidade" placeholder="city"/>
          <input type="text" name="state" :value="data.uf" placeholder="state"/>
        </div>
        <Summary />
      </div>
    </div>
    <About />
  </main>
</template>

<script>
import Breadcrumb from '../components/template/Breadcrumb.vue'
import Summary from '../components/Summary.vue'
import About from '../components/template/About.vue'

export default {
  components: {
    About,
    Summary,
    Breadcrumb
  },
  data() {
    return {
      pageTitle: 'Checkout',
      zipcode : null,
      data : '',
      message: null
    }
  },
  methods : {
		searchZipcode () {
			if(this.zipcode.length == 8) {
				this.$http.get(`https://viacep.com.br/ws/${ this.zipcode }/json/`)
				.then( response => this.data = response.data )
				.catch( error => console.log(error) )
			}
		}
	}
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
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .form-checkout {
    width: 60%;
  }
}
</style>
<template>
	<main>
		<div class="wrapper">
			<section class="best-sellers" id="best-sellers">
				<Breadcrumb :page-title="pageTitle"/>
				<div class="product-grid">
          <template v-for="product in products">
            <Product :product="product" :key="product.id"/>
          </template>
				</div>
			</section>			
		</div>
		<About />
	</main>
</template>

<script>
import Breadcrumb from '../template/Breadcrumb.vue'
import Product from '../components/Product.vue'
import About from '../template/About.vue'
export default {
	components: {
		Breadcrumb, Product, About,
	},
	computed: {
		products() {
			return this.$store.state.products
		}
	},
  data() {
    return {
      pageTitle: 'Best Products'
    }
  },
}
</script>

<style>
  main {
    margin-top: 65px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr );
    grid-gap: 1.1rem 1rem;
    margin-bottom: 1.5rem;
  }

  .product {
    background: #fff;
  }

  .product-img {
    height: 170px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 1rem;
  }

  .product-desc h3 {
    color: #333;
    font-size: 1.1rem;
    padding: 0 .5rem;
    text-transform: capitalize;
    margin-bottom: .2rem;
  }

  .product-desc h4 {
    color: var(--main);
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: .2rem;
  }

  .product-desc p {
    color: #333;
    font-size: .8rem;
    padding: 0 .5rem;
    margin-bottom: .2rem;
  }

  .product-desc a {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: bold;
  }

  @media only screen and (min-width: 768px) {
    .product-img {
      height: 35vh;
      margin-top: 0rem;
    }

    .product-grid {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 1.2rem;
    }

    .product {
      margin-bottom: 1.3rem;
    }
  }

  @media only screen and (min-width: 1124px) {
    .product-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

</style>
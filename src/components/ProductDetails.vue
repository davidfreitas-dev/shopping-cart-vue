<template>
	<main>
		<div class="product-detail-grid" v-for="(detail, i) in product" :key="i">			
			<ProductDetailsImages :image-url="detail.imageURL"/>
			<div class="wrapper product-description">
				<h3>{{ detail.name }}</h3>
				<div class="stars">
					<span class="star-icon full">☆</span>
					<span class="star-icon full">☆</span>
					<span class="star-icon full">☆</span>
					<span class="star-icon half">☆</span>
					<span class="star-icon">☆</span>
				</div>
				<div class="sale-info">
					<small class="sale bg-main">SALE</small>
					<span class="price text-main">{{ detail.price | formatValue }}</span>
				</div>
				<p class="short-describe">
					Lorem ipsum condimentum mollis pulvinar phasellus fusce sodales.
				</p>
				<div class="product-action-button small">
					<div class="quantity-controls">
						<button>-</button>
						<input type="number" value="1" readonly="">
						<button>+</button>
					</div>
					<div class="tocart-control">
						<button class="btn-main">
							<span class="ti-shopping-cart"></span>
							Buy Now
						</button>
					</div>
				</div>
				<div class="product-action-button large">
					<div class="quantity-controls">
						<button>-</button>
						<input type="number" value="1" readonly="">
						<button>+</button>
					</div>
					<div class="tocart-control">
						<button class="btn-main">
							<span class="ti-shopping-cart"></span>
							Buy Now
						</button>
					</div>
				</div>
				<div class="additional-info">
					<span>Status: <strong>In Stock</strong></span>
					<span>Quantity: <strong>35</strong></span>
					<span>Category: <strong>Hardware</strong></span>
					<span>Code Product: <strong>0125</strong></span>
				</div>
			</div>
		</div>
		<section class="long-description">
			<div class="wrapper">
				<div class="long-describe">
					<h3>Description</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
					</p>
				</div>
			</div>
		</section>
		<SimilarProducts />
		<About />
	</main>
</template>

<script>
import SimilarProducts from './SimilarProducts.vue'
import ProductDetailsImages from './ProductDetailsImages.vue'
import About from './template/About.vue'

export default {
	components: {
		SimilarProducts,
		ProductDetailsImages,
		About
    },
	data() {
		return {
			id: this.$route.params.id
		}
	},
	computed: {
		product() {
			return this.$store.state.products.filter(p => {
				return p.id == this.id
			})
		}
	}
}
</script>

<style>
	.product-detail-grid {
		padding-top: 1rem;
	}

	.product-description {
		margin: .5rem;
	}
	
	.product-description h3 {
		font-size: 2.3rem !important;
		margin-bottom: .7rem;
		color: #333;
		text-transform: capitalize;
	}

	.product-description .sale-info {
		display: flex;
		justify-content: start;
		align-items: center;
	}

	.product-description .sale {
		padding: .2rem .5rem;
	}

	.product-description .price {
		font-size: 1.5rem;
		font-weight: bold;
		padding-left: .5rem;
	}

	.short-describe {
		margin: 1rem 0rem;
		color: #505050;
	}

	.product-action-button {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
		overflow-x: hidden;
	}

	.product-action-button.large {
		display: none;
	}

	.product-action-button.small {
		display: flex;
	}

	.quantity-controls {
		display: flex;
		border: 2px solid #ccc;
		border-radius: 5px;
	}

	.quantity-controls button,
	.quantity-controls input {
		width: 45px;
		height: 35px;
		border: none;
		outline: none;
		background: none;
		font-size: 1.1rem;
		text-align: center;
		font-weight: bold;
		color: #505050;
	}

	.quantity-controls button:first-child {
		border-right: 2px solid #ccc;
		font-size: 1.4rem;
	}

	.quantity-controls button:last-child {
		border-left: 2px solid #ccc;
		font-size: 1.4rem;
	}

	.tocart-control {
		flex: 1;
		margin-left: 1rem;
	}

	.tocart-control button {
		height: 40px;
		padding: .3rem 1.3rem;
		text-transform: uppercase;
		font-size: 1rem;
		cursor: pointer;
	}

	.additional-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		font-size: 1rem;
		line-height: 1.7rem;
		color: #505050;
		padding-top: 1.85rem;
	}

	.long-describe {
		border-bottom: 1px solid #ccc;
		padding-bottom: 1rem;
	}

	.long-describe h3 {
		text-align: center;
		font-size: 1.5rem;
		padding: .7rem 0rem;
		margin-bottom: .8rem;
		margin-top: 1rem;
	}

	.long-describe p {
		color: #505050;
		font-size: .9rem;	
		line-height: 1.5rem;
		margin-top: .85rem;
		margin-bottom: .75rem;
	}

	.stars {
		margin-bottom: .7rem;
	}

	.star-icon {
		color: #ddd;
		font-size: 1.5rem;
		position: relative;
		cursor: pointer;
	}
	.star-icon.full:before {
		text-shadow: 0 0 2px rgba(0,0,0,0.7);
		color: #FDE16D;
		content: '\2605'; /* Full star in UTF-8 */
		position: absolute;
		left: 0;
	}
	.star-icon.half:before {
		text-shadow: 0 0 2px rgba(0,0,0,0.7);
		color: #FDE16D;
		content: '\2605'; /* Full star in UTF-8 */
		position: absolute;
		left: 0;
		width: 50%;
		overflow: hidden;
	}

	@-moz-document url-prefix() { /* Firefox Hack :( */
		.star-icon {
			font-size: 50px;
			line-height: 34px;
		}
	}

	@media only screen and (min-width: 768px){		
		.product-detail-grid {
			padding-top: 1rem;
		}

		.star-icon {
			font-size: 1.8rem;
		}
	}

	@media only screen and (min-width: 960px) {			
		.product-detail-grid {
			display: grid;
			grid-template-columns: 55% 45%;
			width: 95%;
			margin: auto;
			padding-top: 1rem;
		}

		.product-images.wrapper, 
		.wrapper.product-description {
			width: 100%;
		}

		.wrapper.product-description {
			display: block !important;
			margin-top: 0;
		}
	}

	@media only screen and (min-width: 1124px) {
		.product-detail-grid {
			display: grid;
			grid-template-columns: 55% 45%;
			width: 80%;
			margin: auto;
			padding-top: 1rem;
		}

		.product-description h3 {
			font-size: 1.8rem;
		}

		.product-description .price {
			font-size: 1.6rem;
		}

		.product-action-button.large {
			display: flex;
		}

		.product-action-button.small {
			display: none;
		}
	}
</style>
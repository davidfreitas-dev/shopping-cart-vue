<template>
  <main>
		<section class="page-banner bg-secondary">
			<div class="wrapper page-banner-desc">
				<h1>Product Details</h1>
				<div><span class="text-main">Home</span> / <span>product-details</span></div>
			</div>
		</section>

		<div class="product-detail-grid">
			<div class="product-images wrapper">
				<div class="swiper gallery-top">
					<div class="swiper-wrapper">
						<div class="swiper-slide" style="background-image:url(img/intel.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/ssd-nvme.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/memoria.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/placa-mae.png)"></div>					
					</div>
				</div>

				<div class="swiper gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide" style="background-image:url(img/intel.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/ssd-nvme.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/memoria.png)"></div>
						<div class="swiper-slide" style="background-image:url(img/placa-mae.png)"></div>
					</div>
				</div>

			</div>

			<div class="wrapper product-description">
				<h3>Intel Kit Setup</h3>

				<p>
					<small class="sale bg-main">SALE</small>
					<span class="price text-main">$2.500</span>
				</p>

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
							Add to cart
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
							Add to cart
						</button>
					</div>
				</div>

				<div class="additional-info">
					<span>Status: <strong>In Stock</strong></span>
					<span>Quantity: <strong>35</strong></span>
				</div>
			</div>
		</div>

		<section class="long-description">
			<div class="wrapper">
				<div class="long-describe">
					<h3>Description</h3>

					<p>Lorem ipsum condimentum mollis pulvinar phasellus fusce sodales, dictumst facilisis eros id donec lacus, semper lectus curabitur tristique blandit malesuada. risus quisque praesent nisi praesent netus elementum purus molestie, condimentum leo et lobortis pulvinar. 
					</p>

					<p>Lorem ipsum condimentum mollis pulvinar phasellus fusce sodales, dictumst facilisis eros id donec lacus, semper lectus curabitur tristique blandit malesuada. risus quisque praesent nisi praesent netus elementum purus molestie. 
					</p>

					<p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
					</p>

					<br>
				</div>
			</div>
		</section>

		<section >
			<div class="wrapper">
				<div class="similar-products">
					<h3>SIMILAR PRODUCTS</h3>

					<div class="swiper similar-swiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/ssd-nvme.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="" class="text-main">View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/kitgamer.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="product.html" class="text-main">
											View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/gabinete.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="product.html" class="text-main">
											View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/placa-mae.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="product.html" class="text-main">
											View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/intel.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="product.html" class="text-main">
											View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="product">
									<div class="product-img"  style="background-image: url('img/amd.png')"></div>
									<div class="product-desc">
										<h3>Product Title</h3>
										<p>Description Lorem ipsum dolor</p>
										<a href="product.html" class="text-main">
											View details 
											<span class="ti-arrow-right"></span>
										</a>
									</div>
								</div>
							</div>			
						</div>

						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</div>
				</div>
			</div>
		</section>

		<section class="mobile-contact-section bg-secondary">
			<div class="wrapper">
				<div class="section-info">					
					<h2>About</h2>

					<div class="section-desc">
						<span>Developed By <a href="https://davidfreitas.dev.br/">David Freitas</a></span>
						<span>See on <a href="#">Github</a></span>
					</div>
					
					<div class="mobile-social-links">
						<span class="ti-linkedin"></span>
						<span class="ti-github"></span>
						<span class="ti-twitter-alt"></span>
					</div>
				</div>				
			</div>
		</section>
	</main>

</template>

<script>
export default {

}
</script>

<style>
	.product-detail-grid {
		padding-top: 1rem;
	}

	.product-images.wrapper {
		padding: 0rem;
	}

	.gallery-top {
		width: 100%;
		height: 50vh;
	}

	.gallery-thumbs {
		width: 100%;
		height: 15vh;
		padding: .5rem;
	}

	.swiper-slide {
		background-size: cover;
		background-position: center;
		border-radius: 10px;
	}

	.gallery-thumbs .swiper-slide {
		width: 25%;
	}

	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
	}

	.product-description h3 {
		font-size: 1.5rem;
		margin-bottom: .7rem;
		color: #333;
		text-transform: capitalize;
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
	}

	.additional-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		color: #505050;
		padding-top: 1.5rem;
	}

	.long-describe {
		border-bottom: 1px solid #ccc;
	}

	.long-describe h3 {
		text-align: center;
		font-size: 1.5rem;
		padding: .7rem 0rem;
		margin-bottom: .8rem;
	}

	.long-describe p {
		color: #505050;
		font-size: .9rem;	
		line-height: 1.5rem;
		margin-top: .85rem;
		margin-bottom: .3rem;
	}

	.similar-products {
		padding-bottom: 1.5rem;
	}

	.similar-products h3 {
		margin-bottom: 1.8rem;
		color: #333;
	}

	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: .75rem;
		padding: .5rem .7rem;
		border-radius: 100%;
		background: var(--main);
		color: #fff;
	}

	@media only screen and (min-width: 768px){
		.product-images.wrapper {
			padding: 1rem;
			padding-top: 0rem;
		}

		.product-images {
			display: grid;
			grid-template-columns: 20% 80%;
		}

		.gallery-top {
			height: 75vh;
			margin-top: 0;
			order: 1;
		}

		.gallery-thumbs {		
			padding: 0rem .5rem;
			height: 75vh;
			order: 0;
		}

		.gallery-thumbs .swiper-slide {
			width: 100% !important;
			height: 25%;
		}

		.product-detail-grid {
			padding-top: 1rem;
		}

		@media only screen and (min-width: 960px) {
			
			.product-detail-grid {
				padding-top: 1rem;
			}

		}

		@media only screen and (min-width: 1124px) {

			.product-detail-grid {
				display: grid;
				grid-template-columns: 65% 35%;
				width: 80%;
				padding-top: 1rem;
				margin: auto;
			}

			.product-images.wrapper, 
			.wrapper.product-description {
				width: 100%;
			}

			.wrapper.product-description {
				display: block !important;
				margin-top: 0;
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

			.similar-products {
				margin-top: 2rem;
			}
		}
	}
</style>
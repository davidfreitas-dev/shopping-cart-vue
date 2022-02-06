<template>
  <main>
		<div class="wrapper">
			<section class="best-sellers" id="best-sellers">
				<div class="section-info">
					<h3>Best Products</h3>
					<hr class="separator">
				</div>

				<div class="product-grid">
					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></div>
						<div class="product-desc">
							<h3>Product Title</h3>
							<p>Description Lorem ipsum dolor</p>
							<a href="product.html" class="text-main">
								View details 
								<span class="ti-arrow-right"></span>
							</a>
						</div>
					</div>

					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></div>
						<div class="product-desc">
							<h3>Product Title</h3>
							<p>Description Lorem ipsum dolor</p>
							<a href="product.html" class="text-main">
								View details 
								<span class="ti-arrow-right"></span>
							</a>
						</div>
					</div>

					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></div>
						<div class="product-desc">
							<h3>Product Title</h3>
							<p>Description Lorem ipsum dolor</p>
							<a href="product.html" class="text-main">
								View details 
								<span class="ti-arrow-right"></span>
							</a>
						</div>
					</div>

					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/placa-mae.png') + ')' }"></div>
						<div class="product-desc">
							<h3>Product Title</h3>
							<p>Description Lorem ipsum dolor</p>
							<a href="product.html" class="text-main">
								View details 
								<span class="ti-arrow-right"></span>
							</a>
						</div>
					</div>

					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/kitgamer.png') + ')' }"></div>
						<div class="product-desc">
							<h3>Product Title</h3>
							<p>Description Lorem ipsum dolor</p>
							<a href="product.html" class="text-main">
								View details 
								<span class="ti-arrow-right"></span>
							</a>
						</div>
					</div>

					<div class="product">
						<div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/gabinete.png') + ')' }"></div>
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
			</section>			
		</div>
		
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
  main {
    margin-top: 65px;
  }

  .separator {
    border: 3px solid var(--main);
    width: 3rem;
    margin-bottom: 1.5rem;
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
    text-transform: capitalize;
    margin-bottom: .2rem;
  }

  .product-desc p {
    font-size: .8rem;
    margin-bottom: .2rem;
  }

  .product-desc a {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: bold;
  }

  .mobile-social-links span {
    font-size: 1.3rem;
    margin: 0rem .5rem;
    color: var(--main);
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
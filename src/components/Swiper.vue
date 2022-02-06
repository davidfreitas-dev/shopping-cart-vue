<template>
    <section >
        <div class="wrapper">
            <div class="similar-products">
                <h3>Similar Products</h3>

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
</template>

<script>
export default {

}
</script>

<style>
	.swiper-slide {
		background-size: cover;
		background-position: center;
		border-radius: 10px;
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

    @media only screen and (min-width: 1124px) {
        .similar-products {
            margin-top: 2rem;
        }
    }

</style>
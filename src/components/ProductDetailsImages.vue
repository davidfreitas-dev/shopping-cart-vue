<template>
    <section>
        <div class="wrapper">
            <div class="similar-products">
                <h3>Similar Products</h3>
                <div class="swiper similar-swiper">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/memoria.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/placa-mae.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide">
                                <div class="product">
                                    <div class="product-img" :style="{ backgroundImage: 'url(' + require('@/assets/img/gabinete.png') + ')' }"></div>
                                    <div class="product-desc">
                                        <h3>Product Title</h3>
                                        <p>Description Lorem ipsum dolor</p>
                                        <a href="" class="text-main">View details 
                                            <span class="ti-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
        </div>        
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                spaceBetween: 20,
                slidesPerView: 2,

                breakpoints: {
                    768: { slidesPerView: 3 },
                    960: { slidesPerView: 4 }
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style>
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
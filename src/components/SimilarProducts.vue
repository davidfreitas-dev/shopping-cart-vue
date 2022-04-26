<template>
    <section>
        <div class="wrapper">
            <div class="similar-products">
                <h3>Similar Products</h3>
                <div class="swiper similar-swiper">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="(product, i) in products" :key="i">
                            <div class="swiper-slide">
                                <Product :product="product"/>
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
import Product from '../components/Product.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Product,
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
    },
    computed: {
		products() {
			return this.$store.state.products
		}
	}
}
</script>

<style scoped>
	.similar-products {
		padding-bottom: 1.5rem;
	}

	.similar-products h3 {
		color: #333;
        font-size: 1.75rem;
        text-align: center;
		padding-top: 1rem;
		padding-bottom: 1.5rem;
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
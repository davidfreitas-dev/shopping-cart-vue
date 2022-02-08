<template>
    <div class="product-images wrapper">
        <div class="swiper gallery-top">
            <div class="swiper-wrapper">
                <swiper ref="mySwiper" :options="galleryTop">
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/placa-mae.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></swiper-slide>					
                </swiper>
            </div>
        </div>

        <div class="swiper gallery-thumbs">
            <div class="swiper-wrapper">
                <swiper ref="mySwiper" :options="galleryThumbs">
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/placa-mae.png') + ')' }"></swiper-slide>
                    <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></swiper-slide>
                </swiper>
            </div>
        </div>        
    </div>
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
            galleryThumbs: {
                spaceBetween: 10,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				direction: 'horizontal'
            },
			galleryTop: {
                spaceBetween: 10,
				thumbs: {
					swiper: this.galleryThumbs
				}
            }
        }
    },
	methods: {
		changeDirection(x) {
			if (x.matches) {
				this.galleryThumbs =  {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					direction: 'vertical',
				}
			}
		}
	},
	created() {
		let x = window.matchMedia("(min-width: 768px)")
        x.addEventListener("change", () => {
            this.changeDirection(x);
        })
	}
}
</script>

<style>
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
    }

    @media only screen and (min-width: 1124px) {
		.product-images.wrapper, 
		.wrapper.product-description {
			width: 100%;
		}
	}
</style>
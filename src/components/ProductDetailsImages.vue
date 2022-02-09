<template>
    <div class="product-images wrapper">
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></swiper-slide>
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></swiper-slide>
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></swiper-slide>
        </swiper>
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/intel.png') + ')' }"></swiper-slide>
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/amd.png') + ')' }"></swiper-slide>
            <swiper-slide :style="{ backgroundImage: 'url(' + require('@/assets/img/ssd-nvme.png') + ')' }"></swiper-slide>	
        </swiper>
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
            swiperOptionTop: {
                loop: true,
                loopedSlides: 3, // looped slides should be the same
                spaceBetween: 10,
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 3, // looped slides should be the same
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 3,
                touchRatio: 0.2,
                slideToClickedSlide: true,
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    }
}
</script>

<style scoped>
    .product-images {
        height: 60vh;
    }

    .swiper-slide {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
    }

    .gallery-top {
        height: 75%;
        width: 100%;
    }

    .gallery-thumbs {
        height: 25%;
        box-sizing: border-box;
        margin-top: .5rem;
        padding: 0;
    }

    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }

    @media only screen and (min-width: 768px) {
        .product-images {
            height: 85vh;
        }
    }
</style>
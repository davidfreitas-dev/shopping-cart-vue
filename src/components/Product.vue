<template>
    <div class="product">
        <router-link :to="`/product/${product.id}`">
            <div class="product-img" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${product.images[0]}`) + ')' }"></div>
            <div class="product-desc">
                <h3>{{ product.name }}</h3>
                <p>Description Lorem ipsum dolor</p>
                <h3 class="text-main">{{ product.price | formatValue }}</h3>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
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
        .product {
            margin-bottom: 1.3rem;
        }
        
        .product-img {
            height: 35vh;
            margin-top: 0rem;
        }
    }
</style>
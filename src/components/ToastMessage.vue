<template>
  <div class="toast-msg animate__animated animate__fadeInDown" :class="data.color" v-if="visibility">
        <span class="msg">
            <strong>Ops:</strong> {{ data.msg }}
        </span>
        <div class="btn-close" @click="handleHide">
            <span class="ti-close"></span>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            require: true 
        },
    },
    data() {
        return {
            visibility: false
        }
    },
    methods: {
        handleShow() {
            if (this.data.status) {
                this.visibility = true
            }
        },
        handleHide() {
            this.visibility = false
        }
    }
}
</script>

<style scoped>
    .animate__animated.animate__fadeInDown {
        --animate-duration: .35s;
    }
    
    .toast-msg {
        position: fixed;
        width: 85%;
        top: 10%;
        left: 7%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .85rem;
        font-weight: 500;
        color: #fff;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 0px #3c3c3c;
        z-index: 1;
    }

    .error {        
        background-color: tomato;
    }

    .success {        
        background-color: #35e68d;
    }

    .msg {
        padding: 1rem;
    }

    .btn-close {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .85rem;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        .toast-msg {
            width: 70%;
            left: 15%;
        }
    }
</style>
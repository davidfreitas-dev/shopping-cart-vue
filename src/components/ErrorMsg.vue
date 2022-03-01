<template>
  <div class="error-msg animate__animated animate__bounceInDown" v-if="visibility">
        <span class="msg">
            <strong>Ops:</strong> {{ error.msg }}
        </span>
        <div class="close-error-msg" @click="hideErrorMsg">
            <span class="ti-close"></span>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        error: {
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
        hideErrorMsg() {
            this.visibility = false
        }
    },
    watch: {
        error() {
            if (this.error.status) {
                this.visibility = true
            }
        }
    },
}
</script>

<style scoped>
    .error-msg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .85rem;
        font-weight: 500;
        color: #fff;
        background-color: tomato;
        position: fixed;
        width: 70%;
        top: 13%;
        left: 15%;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 0px #3c3c3c;
        z-index: 1;
    }

    .msg {
        padding: 1rem;
    }

    .close-error-msg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .85rem;
        cursor: pointer;
    }
</style>
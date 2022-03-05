<template>
    <div class="modal success-msg" v-if="true">
        <div class="modal-content">
            <span class="close" @click="hideSuccessMsg">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibility: false
        }
    },
    methods: {
        showSuccessMsg() {
            this.visibility = true
        },
        hideSuccessMsg() {
            this.visibility = false
        }
    },
    watch: {
        success() {
            if (this.error.status) {
                this.visibility = true
            }
        }
    },
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 25% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 7px;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {			
    .modal-content {
        width: 45%;
        margin: 10% auto; /* 15% from the top and centered */
    }
}

@media only screen and (min-width: 960px) {			
    .modal-content {
        width: 35%;
    }
}
</style>
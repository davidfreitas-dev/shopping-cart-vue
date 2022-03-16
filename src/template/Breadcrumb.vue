<template>
    <div class="breadcrumb">
        <h3 class="breadcrumb-title">{{ pageTitle }}</h3>
        <hr class="breadcrumb-separator">
    </div>
</template>

<script>
export default {
    props: {
        pageTitle: {
            type: String,
            require: true 
        },
    },
}
</script>

<style>
.breadcrumb {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

.breadcrumb-title {
	font-size: 2rem;
	color: #333;
}

.breadcrumb-separator {
    border: 3px solid var(--main);
    width: 3rem;
    margin-bottom: 1.5rem;
}
</style>
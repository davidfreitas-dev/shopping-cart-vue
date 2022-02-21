<template>
    <section class="mobile-contact-section bg-secondary">
        <div class="wrapper">
            <div class="section-info">					
                <h2>About</h2>
                <div class="section-desc">
                    <span>Developed By <a href="https://davidfreitas.dev.br/">David Freitas</a></span>
                    <span>See on <a href="#">Github</a></span>
                </div>                
                <div class="mobile-social-links">
                    <span class="ti-linkedin"></span>
                    <span class="ti-github"></span>
                    <span class="ti-twitter-alt"></span>
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
    .mobile-social-links span {
        font-size: 1.3rem;
        margin: 0rem .5rem;
        color: var(--dark);
        cursor: pointer;
    }

    .mobile-social-links span:hover {
        color: var(--main);
    }
</style>
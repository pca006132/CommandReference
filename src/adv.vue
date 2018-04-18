<template>
    <div class="wrapper">
        <div class="carousel slide" data-ride="carousel" controls indicators id="advertisement" data-interval="3000">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(url, src, index) in (pics || {})" :key="src" v-bind:class="{active: index === 0}">
                    <a :href="url" target="_blank">
                        <img :src="src" style="width: 100%;"/>
                    </a>
                </div>
            </div>

            <a class="carousel-control-prev" href="#advertisement" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#advertisement" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'advertisement',
    props: {
        pics: Object
    },
    methods: {
        open(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style>
    .wrapper {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .carousel {
        background: #ababab;
    }

</style>

<template>
    <div class="wrapper">
        <b-carousel controls indicators background="#ababab" id="advertisement" :interval="3000">
            <b-carousel-slide v-for="(url, src) in (pics || {})" :key="src" :img-src="src" @click.native="open(url)">
            </b-carousel-slide>
        </b-carousel>
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
</style>

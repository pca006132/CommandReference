<template>
    <div class="offset" :id="name"></div>
</template>
<script>
export default {
    name: 'offset',
    props: {
        name: String
    }
}
</script>
<style>
    .offset {
        top: -5em;
        position: relative;
    }
</style>

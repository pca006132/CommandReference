<template>
    <b-form-input id="search" v-model="value" placeholder="搜索标题..." v-on:input="lazy_search" type="text">
    </b-form-input>
</template>

<script>
let timer = null;

export default {
    name: 'title_search',
    methods: {
        lazy_search: function () {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                this.$emit('update', this.value);
                timer = null;
            }, 1000);
        }
    },
    data () {
        return {
            value: ''
        }
    }
}
</script>
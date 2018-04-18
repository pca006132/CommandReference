<template>
    <input type="text" class="form-control" id="search" aria-describedby="搜索标题..." placeholder="搜索标题..." v-model="value" v-on:input="lazy_search"/>
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
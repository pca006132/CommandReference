<template>
    <b-card title="标题搜索">
            <b-form-group>
               <b-form-input id="search" v-model="value" v-on:input="lazy_search" type="text">
            </b-form-input>
        </b-form-group>
    </b-card>
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
                this.$emit('update', this.$data.value);
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
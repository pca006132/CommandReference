<template>
   <b-card title="筛选Tag" >
        <b-badge class="noselect" v-on:click="toggle" variant="light" v-for="tag in tags" :key="tag">{{tag}}</b-badge>
   </b-card>
</template>

<script>
export default {
    name: 'tag_filter',
    props: {
        tags: Array
    },
    methods: {
        toggle: function(event) {
            if ($(event.target).hasClass('badge-light')) {
                $(event.target).removeClass('badge-light');
                $(event.target).addClass('badge-secondary');
                this.$data.filter.push($(event.target).text());
            } else {
                $(event.target).removeClass('badge-secondary');
                $(event.target).addClass('badge-light');
                let index = this.$data.filter.indexOf($(event.target).text());
                if (index > -1) {
                    this.$data.filter.splice(index, 1);
                }
            }
            this.$emit('update', this.$data.filter);
        }
    },
    data () {
        return {
            filter: []
        }
    }
}
</script>

<style>
.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
     -khtml-user-select: none;   /* Konqueror HTML */
       -moz-user-select: none;   /* Firefox */
        -ms-user-select: none;   /* Internet Explorer/Edge */
            user-select: none;   /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
}
</style>
<template>
   <b-card title="筛选Tag" >
        <b-badge v-on:click="toggle" variant="light" v-for="tag in tags" :key="tag">{{tag}}</b-badge>
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
            filter: [],
            tags: this.$props.tags
        }
    }
}
</script>
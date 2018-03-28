<template>
   <b-card :title="title" >
        <b-badge class="noselect" v-on:click="toggle" variant="light" v-for="tag in tags" :key="tag">{{tag}}</b-badge>
        <hr v-if="exclude" />
        <b-form-checkbox v-if="exclude" v-model="exclude_mode">排除模式</b-form-checkbox>
   </b-card>
</template>

<script>
export default {
    name: 'tag_filter',
    props: {
        tags: Array,
        maximum: Number,
        title: String,
        exclude: Boolean
    },
    methods: {
        toggle: function(event) {
            if ($(event.target).hasClass('badge-light')) {
                if (this.maximum && this.filter.length === this.maximum) {
                    return;
                }

                $(event.target).removeClass('badge-light');

                if (this.exclude_mode) {
                    $(event.target).addClass('badge-danger');
                    this.$data.excludes.push($(event.target).text());
                } else {
                    $(event.target).addClass('badge-success');
                    this.$data.filter.push($(event.target).text());
                }

            } else {
                $(event.target).removeClass('badge-danger');
                $(event.target).removeClass('badge-success');

                $(event.target).addClass('badge-light');
                let index = this.filter.indexOf($(event.target).text());
                if (index > -1) {
                    this.filter.splice(index, 1);
                }

                index = this.excludes.indexOf($(event.target).text());
                if (index > -1) {
                    this.excludes.splice(index, 1);
                }
            }
            this.$emit('update', this.filter, this.excludes);
        }
    },
    data () {
        return {
            filter: [],
            excludes: [],
            exclude_mode: false
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
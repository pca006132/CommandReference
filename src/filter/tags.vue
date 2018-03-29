<template>
    <div class="text-left">
        <strong>{{title}}</strong><br/>
        <div class="container">
            <p><b-badge class="noselect" v-on:click="toggle" href="#" variant="light" v-for="tag in tags" :key="tag">{{tag}}</b-badge></p>
            <div v-if="exclude" class="form-check">
                <input v-model="exclude_mode" class="form-check-input" type="checkbox" id="exclude">
                <label class="form-check-label" for="exclude">
                    排除标签模式
                </label>
            </div>
        </div>
    </div>
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
            $(event.target).blur();
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
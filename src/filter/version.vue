<template>
    <b-card title="选择版本">
        <b-form-select id="version_select" v-model="version_selected" v-on:input="update" :options="options"></b-form-select>
    </b-card>
</template>

<script>
export default {
    name: 'version_selector',
    props: {
        min: Number,
        max: Number
    },
    methods: {
        update: function() {
            this.$emit('update', this.version_selected);
        }
    },
    data() {
        return {
            version_selected: '任意版本'
        }
    },
    computed: {
        options: function () {
            let opts = [];
            opts.push('任意版本');
            for (let i = this.max; i >= this.min; i--) {
                opts.push('1.' + i.toString());
            }
            return opts;
        }
    }
}
</script>

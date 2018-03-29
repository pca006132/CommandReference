<template>
    <div class="text-left">
        <span class="bmd-form-group is-filled">
            <b-form-select v-model="version_selected" :options="options" id="version"/>
        </span>
    </div>
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

<style>
    #version {
        background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
        background-size: 8px 10px;
    }
</style>

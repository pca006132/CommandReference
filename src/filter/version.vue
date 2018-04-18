<template>
    <div class="text-left">
        <span class="bmd-form-group is-filled">
            <select class="custom-select" @input="update" selectedIndex="0" id="version">
                <option v-for="opt in options" :key="opt" :value="opt">{{opt}}</option>
            </select>
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
        update: function(event) {
            this.$emit('update', $(event.target).val());
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

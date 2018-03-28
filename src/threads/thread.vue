<template>
    <b-row class="thread">
        <b-col class="col-12 col-md-6">
            <div class="box text-left">
                <a class="title" v-bind:href="url" target="_blank">{{properties.title}}</a>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="box text-left">
                <b-badge class="noselect tag" v-if="properties['version-min']" variant="success">{{version}}</b-badge>

                <b-badge class="noselect tag" v-for="tag in properties.tags"
                :key="tag" :variant="variant(tag)" v-b-tooltip.hover="get_tips(tag)">{{tag}}</b-badge>
            </div>
        </b-col>
        <b-col class="col-12 col-md-2">
            <div class="box">
                <span class="align-middle">{{properties["last-update"] || '未知/不适用'}}</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'thread',
    props: {
        properties: Object,
        url: String
    },
    methods: {
        variant: function(tag) {
            if (tag === '过时') {
                return 'danger';
            }
            if (tag === '即将过时') {
                return 'warning';
            }
            if (tag === '预览版') {
                return 'success';
            }
            if (tag === '英语') {
                return 'warning';
            }
            return 'secondary';
        },
        get_tips: function(tag) {
            if (tag === '过时') {
                return '在最新正式版失效';
            }
            if (tag === '即将过时') {
                return '在最新预览版失效';
            }
            if (tag === '预览版') {
                return '仅在预览版有效';
            }
            return '';
        }
    },
    computed: {
        version: function () {
            if (!this.$props.properties["version-min"]) {
                return "-";
            }
            return "1." + this.$props.properties["version-min"].toString() +
                (this.$props.properties["version-min"] === this.$props.properties["version-max"] ?
                "" : ("-1." + this.$props.properties["version-max"].toString()));
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

.title {
    color: #28a745;
}

.thread {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
}

.box {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.tag {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}

</style>
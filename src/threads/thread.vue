<template>
    <b-row class="thread text-left">
        <b-col class="col-12 col-md-4">
            <div class="box">
                <a class="title" v-bind:href="url" target="_blank">{{properties.title}}</a>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="box">
                <b-badge class="noselect tag" v-if="properties['version-min']" variant="success">{{version}}</b-badge>

                <b-badge class="noselect tag" v-for="tag in properties.tags"
                :key="tag" :variant="variant(tag)" v-b-tooltip.hover="get_tips(tag)">{{tag}}</b-badge>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <b-row>
                <b-col v-if="properties['authors'] && properties['authors'].length > 0">
                    <div class="box">
                    <span class="align-middle">
                        {{properties['authors'][0]}}
                        <div class="d-inline" v-if="properties['authors'].length > 1">
                            <b-button variant="link" size="sm" class="hint">
                                <span class="authors">{{properties['authors'].slice(1).map(a=>', ' + a).join("")}}</span>
                            </b-button>
                        </div>
                    </span>
                    </div>
                </b-col>
                <b-col>
                    <div class="box">
                        <span class="align-middle">{{properties["last-update"] || '未知/不适用'}}</span>
                    </div>
                </b-col>
            </b-row>

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
            if (tag === '部分过时') {
                return 'danger';
            }
            if (tag === '预览版') {
                return 'success';
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
            if (tag === '部分过时') {
                return '帖子部分内容已经过时';
            }
            if (tag === '预览版') {
                return '仅在预览版有效';
            }
            return '';
        }
    },
    computed: {
        version: function () {
            if (!this.properties["version-min"]) {
                return "-";
            }
            return "1." + this.properties["version-min"].toString() +
                (this.properties["version-min"] === this.properties["version-max"] ?
                "" : ("-1." + this.properties["version-max"].toString()));
        }
    }
}
</script>

<style>
.hint {
    padding: 0;
    text-decoration: none;
    display: inline;
}

.hint::after {
    content: "...";
}

.hint:focus {
    color: black;
    text-decoration: none;
    padding: 0;
    display: inline;
}

.hint:focus::after {
    content: "";
}

.authors {
    display: none;
}

.hint:focus .authors {
    display: inline;
}

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
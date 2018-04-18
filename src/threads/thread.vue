<template>
    <div class="row thread text-left">
        <div class="col-12 col-md-4">
            <div class="box">
                <a class="title" v-bind:href="url" target="_blank">{{properties.title}}</a>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="box">
                <span class="badge badge-success noselect tag" v-if="properties['version-min']">{{version}}</span>

                <span v-for="tag in properties.tags"
                :key="tag" :class="'badge noselect tag badge-' + variant(tag)" >{{tag}}</span>

                <span v-for="tag in ['过时', '即将过时', '预览版']" :key="tag" :variant="variant(tag)"
                v-if="match(tag)" :class="'badge noselect tag badge-' + variant(tag)" >{{tag}}</span>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="row">
                <div class="col" v-if="properties['authors'] && properties['authors'].length > 0">
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
                </div>
                <div class="col">
                    <div class="box">
                        <span class="align-middle">{{properties["last-update"] || '未知/不适用'}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'thread',
    props: {
        properties: Object,
        url: String,
        vmax: Number,
        vmin: Number,
        snapshot: Boolean
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
        match: function (tag) {
            switch (tag) {
                case '过时':
                    let max = this.vmax;
                    if (this.snapshot) {
                        max--;
                    }
                    if (!this.properties["version-min"]) {
                        return false;
                    }
                    return this.properties["version-max"] < max;
                case '即将过时':
                    if (!this.properties["version-min"]) {
                        return false;
                    }
                    return this.snapshot && this.properties["version-max"] < this.vmax;
                case '预览版':
                    if (!this.properties["version-min"]) {
                        return false;
                    }
                    return this.snapshot && this.properties["version-min"] === this.vmax;
            }
            return false;
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
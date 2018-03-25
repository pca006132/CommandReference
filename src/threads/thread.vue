<template>
    <b-row class="thread">
        <b-col class="col-12 col-md-6">
            <div class="box">
                <b-badge class="noselect tag" variant="success">{{version}}</b-badge>
                <a v-bind:href="url" target="_blank">{{properties.title}}</a>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="box">
                <b-badge class="noselect tag" variant="secondary" v-for="tag in properties.tags" :key="tag">{{tag}}</b-badge>
            </div>
        </b-col>
        <b-col class="col-12 col-md-2">
            <div class="box">
                <span class="align-middle">{{properties["last-update"]}}</span>
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
    computed: {
        version: function () {
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

.thread {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
}

.box {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.tag {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1em;
}

</style>
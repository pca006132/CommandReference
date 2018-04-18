<template>
    <div>
        <div class="card category">
            <div class="card-header category-header text-left" :id="collapse_name + '_h'"  data-toggle="collapse"
                :data-target="'#' + collapse_name" :aria-expanded="shown" :aria-controls="collapse_name">
                <div class="header-content">
                    <span class="when-opened">▲</span><span class="when-closed">▼</span>{{header}}
                </div>
            </div>

            <div :id="collapse_name" v-bind:class="{show: shown}" class="collapse" :aria-labelledby="collapse_name + '_h'">
                <div class="card-body">
                    <div class="container-fluid">
                        <thread v-for="url in sorted" :key="url"
                        :properties="threads[url]" :url="url" :vmax="vmax" :vmin="vmin" :snapshot="snapshot"></thread>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
import thread from './thread.vue';

export default {
    name: 'category',
    components: {
        thread: thread
    },
    props: {
        header: String,
        threads: Object,
        sorted: Array,
        name: String,
        shown: {
            default: true,
            type: Boolean
        },
        vmax: Number,
        vmin: Number,
        snapshot: Boolean
    },
    computed: {
        collapse_name() {
            return this.name + '_collapse';
        }
    }
}
</script>

<style>
.category-header {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
     -khtml-user-select: none;   /* Konqueror HTML */
       -moz-user-select: none;   /* Firefox */
        -ms-user-select: none;   /* Internet Explorer/Edge */
            user-select: none;   /* Non-prefixed version, currently
                                    supported by Chrome and Opera */

}

.category-header.collapsed {
    border-bottom: none;
}

.category-header.collapsed .when-opened {
    display: none;
}

.category-header:not(.collapsed) .when-closed {
    display: none;
}

.category .card-body {
    padding-left: 0.2em;
    padding-right: 0.2em;
}

.category .thread:first-child {
    margin-top: -0.25em;
}
.category .thread:last-child {
    margin-bottom: -0.25em;
}
.category .thread:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,.125);
}
</style>
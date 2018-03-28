<template>
    <div class="card category">
        <header class="card-header category-header" v-b-toggle="collapse_name">
            <div class="header-content">
                {{header}}<span class="when-opened">▲</span><span class="when-closed">▼</span>
            </div>
        </header>
        <b-collapse :visible="shown" :id="collapse_name">
            <div class="card-body">
                <b-container>
                    <thread v-for="url in sorted"
                        :key="url" :properties="threads[url]" :url="url"></thread>
                </b-container>
            </div>
        </b-collapse>
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
        }
    },
    computed: {
        collapse_name() {
            return this.name + '_collapse';
        }
    }
}
</script>

<style>
.card-header {
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
<template>
    <div id="app">
        <b-navbar variant="dark" type="dark" sticky="true" toggleable="md">
            <b-navbar-brand href="#intro">
                <img src="./assets/logo.png" style="width:1.5em;" class="d-inline-block align-top"> 命令资源大全
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav="true" id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="#words">常用字词表</b-nav-item>
                    <b-nav-item to="https://github.com/pca006132/CommandReference">GitHub</b-nav-item>
                    <b-nav-item to="#searchbar" class="d-md-none">搜索</b-nav-item>
                    <b-nav-item-dropdown variant="dark" type="dark" text="分类" right>
                        <b-dropdown-item variant="dark" type="dark" v-for="category in categories" :href="'#' + category[1]" :key="category[1]">
                            {{category[0]}}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container fluid="true" id="container">
            <b-row fluid="true">
                <b-col class="col-12 col-md-9 bd-content" id="content">
                    <intro></intro>
                    <adv :pics="pics"></adv>
                    <manager :threads="threads" :title="title" :tags="filter_tags" :version="version" v-on:update="update_categories"></manager>
                    <hr />
                    <h3 id="words">常用字词表</h3>
                    <b-table class="text-left" striped hover :items="words"></b-table>
                </b-col>

                <b-col class="col-12 col-md-3 order-md-first" id="searchbar">
                    <hr class="d-md-none" />
                    <search v-on:update="update_title"></search>
                    <tags :tags="tags" v-on:update="update_tags"></tags>
                    <version :min="version_min" :max="version_max" v-on:update="update_version"></version>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import title_search from './filter/search.vue';
    import tags_filter from './filter/tags.vue';
    import version_selector from './filter/version.vue';
    import manager from './threads/manager.vue';
    import intro from './intro.vue';
    import adv from './adv.vue';

    export default {
        name: 'app',
        components: {
            search: title_search,
            tags: tags_filter,
            version: version_selector,
            manager: manager,
            intro: intro,
            adv: adv
        },
        props: {
            version_min: Number,
            version_max: Number,
            tags: Array,
            threads: Array,
            words: Array,
            pics: Object
        },
        data() {
            return {
                categories: [],
                filter_tags: [],
                title: '',
                version: '任意版本'
            }
        },
        methods: {
            update_categories(content) {
                this.$data.categories = content;
            },
            update_tags(content) {
                this.$data.filter_tags = content;
            },
            update_title(content) {
                this.$data.title = content;
            },
            update_version(content) {
                this.$data.version = content;
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #container {
        padding: 1.5em;
    }

    #searchbar {
        @media only screen and (min-width: 768px) {
            border-right: 1px solid gray;
            height: 90vh;
            overflow-y: auto;
            position: sticky;
            top: 5em;
        }
    }

    .bg-dark .dropdown-menu {
        min-width: 200px;
        padding: 5px 0;
        margin: 2px 0 0;
        background-color: #343a40 !important;
        border: 1px solid rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
                box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    }

    .bg-dark .dropdown-menu .divider {
        border: 1px solid rgba(0, 0, 0, 0.8);
    }
    .bg-dark .dropdown-menu > a {
        padding: 6px 20px;
        color: rgba(255,255,255,.5);
    }
    .bg-dark .dropdown-menu > a:hover,
    .bg-dark .dropdown-menu > a:focus {
        color: rgba(255,255,255,.75);
        background-color: #343a40 !important;
        text-decoration: none;
    }
    .bg-dark .dropdown-menu > a,
    .bg-dark .dropdown-menu > a:hover,
    .bs-dark .dropdown-menu > a:focus {
        background-color: #343a40 !important;
        text-decoration: none;
        outline: 0;
    }

    .card {
        margin-bottom: 2em;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
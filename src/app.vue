<template>
    <div id="app">
        <div class="navbar navbar-dark bg-dark navbar-expand-md sticky-top">
            <a class="navbar-brand" href="#intro">
                <img src="./assets/logo.png" style="width:1.5em;" class="d-inline-block align-top"> 命令资源大全
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                aria-label="Toggle navigation" aria-controls="nav_collapse" data-target="#nav_collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nav_collapse">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#words">
                            常用字词表
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./tool.html">
                            添加帖子工具
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="text-transform: none;" href="https://github.com/pca006132/CommandReference">
                            GitHub
                        </a>
                    </li>
                    <li class="nav-item d-md-none">
                        <a class="nav-link" href="#searchbar">
                            搜索
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            分类
                        </a>
                        <div aria-labelledby="dropdown-toggle" class="dropdown-menu dropdown-menu-right" id="cat-dropdown">
                            <a class="dropdown-item" v-for="category in categories" :href="'#' + category[1]" :key="category[1]">
                                {{category[0]}}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid" fluid="true" id="container">
            <div class="row row-fluid">
                <offset name="intro" />
                <main class="col-12 col-md-10 bd-content" id="content">
                    <intro :pics="pics"></intro>
                    <manager :threads="threads" :title="title" :tags="filter_tags"
                    :exclusion="exclude_tags" :version="version" v-on:update="update_categories"
                    :vmax="version_max" :vmin="version_min" :snapshot="snapshot"></manager>
                    <offset name="words" />
                    <h3 class="text-left">常用字词表</h3>

                    <table class="table text-left">
                        <thead>
                            <tr>
                                <th scope="col">缩写</th>
                                <th scope="col">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="word in words" :key="word['描述']">
                                <td>{{word['缩写']}}</td>
                                <td>{{word['描述']}}</td>
                            </tr>
                        </tbody>
                    </table>
                </main>

                <div class="col-12 col-md-2 order-md-first" id="sidebar">
                    <hr class="d-md-none" />
                    <form>
                        <div class="form-group">
                        <offset name="searchbar" />
                        <search v-on:update="update_title"></search>
                        <hr />
                        <tags :exclude="true" title="筛选 Tag" :tags="tags" v-on:update="update_tags"></tags>
                        <hr />
                        <version :min="version_min" :max="version_max" v-on:update="update_version"></version>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import title_search from './filter/search.vue';
    import tags_filter from './filter/tags.vue';
    import version_selector from './filter/version.vue';
    import manager from './threads/manager.vue';
    import intro from './intro.vue';
    import offset from './util/offset.vue';

    export default {
        name: 'app',
        components: {
            search: title_search,
            tags: tags_filter,
            version: version_selector,
            manager: manager,
            intro: intro,
            offset: offset
        },
        props: {
            version_min: Number,
            version_max: Number,
            snapshot: Boolean,
            tags: Array,
            threads: Array,
            words: Array,
            pics: Object
        },
        data() {
            return {
                categories: [],
                filter_tags: [],
                exclude_tags: [],
                title: '',
                version: '任意版本'
            }
        },
        methods: {
            update_categories(content) {
                this.categories = content;
            },
            update_tags(content, excludes) {
                this.filter_tags = content;
                this.exclude_tags = excludes;
            },
            update_title(content) {
                this.title = content;
            },
            update_version(content) {
                this.version = content;
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
        @media only screen and (min-width: 768px) {
            padding-top: 0px;
            padding-bottom: 0px;
        }
    }

    #content {
        @media only screen and (min-width: 768px) {
            padding-top: 1.5em;
        }
    }

    #sidebar {
        @media only screen and (min-width: 768px) {
            padding-top: 1.5em;
            border-right: 1px solid rgba(0,0,0,.1);
            height: calc(100vh - 56px);
            overflow-y: auto;
            position: sticky;
            top: 56px;
        }
    }

    .bg-dark {
        z-index: 999;
        max-height: 100vh;
        @media only screen and (max-width: 768px) {
            overflow-y: auto;
        }
    }

    .bg-dark .dropdown-menu {
        min-width: 200px;
        padding: 5px 0;
        margin: 2px 0 0;
        background-color: #424242!important;

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
        background-color: #424242!important;
        text-decoration: none;
    }
    .bg-dark .dropdown-menu > a,
    .bg-dark .dropdown-menu > a:hover,
    .bs-dark .dropdown-menu > a:focus {
        background-color: #424242!important;
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
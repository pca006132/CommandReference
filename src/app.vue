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
                    <b-nav-item-dropdown text="章节" right>
                        <b-dropdown-item v-for="category in categories" :href="'#' + category[1]" :key="category[1]">
                            {{category[0]}}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container fluid="true" id="container">
            <b-row fluid="true">
                <b-col class="col-12 col-md-9 bd-content" id="content">
                    <div class="d-block">
                        <div class="d-inline-block">
                            <img src="./assets/logo.png">
                        </div>
                        <br class="d-md-none" />
                        <div class="d-inline-block align-middle">
                            <h1 id="intro">命令资源大全</h1>
                            <p>您的命令参考索引</p>
                        </div>
                    </div>
                    <hr />
                    <div class="d-block text-center">
                        <p class="text-left d-inline-block">
                            命令资源大全是一个命令相关资源的索引网站，各位可以：<br/>
                            1. 阅读各新人教程，学习命令 <br />
                            2. 搜索各种黑科技，制作更好的系统和地图 <br />
                            3. 找到需要的生成器软件，加快系统编写效率 <br /><br />
                            各教程及生成器作者更可以在此宣传各位的作品！
                        </p>
                        <p>
                            命令资源大全（原新人手册）进行了大量更新，现在急需各位帮助更新！详情请点击
                            <a href="https://github.com/pca006132/CommandReference">命令资源大全(GitHub)</a>。
                        </p>
                    </div>
                    <manager :threads="threads" :title="title" :tags="filter_tags" :version="version" v-on:update="update_categories"></manager>

                    <hr />
                    <h3 id="words">常用字词表</h3>
                    <b-table striped hover :items="words"></b-table>
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

    export default {
        name: 'app',
        components: {
            search: title_search,
            tags: tags_filter,
            version: version_selector,
            manager: manager
        },
        props: {
            version_min: Number,
            version_max: Number,
            tags: Array,
            threads: Array,
            words: Array
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
            min-height: 85vh;
        }
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
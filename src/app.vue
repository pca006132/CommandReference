<template>
    <div id="app">
        <b-navbar variant="dark" type="dark" sticky="true" toggleable="md">
            <b-navbar-brand href="#intro">
                <img src="./assets/logo.png" style="width:1.5em;" class="d-inline-block align-top"> 命令快车
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav="true" id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/faq">FA Q</b-nav-item>
                    <b-nav-item to="/contribution">贡献 </b-nav-item>
                    <b-nav-item to="#searchbar" class="d-md-none">搜索</b-nav-item>
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
                            <h1 id="intro">命令快车</h1>
                            <p>您的命令参考索引</p>
                        </div>
                    </div>

                    <b-card title="Test">
                        <b-container>
                            <thread v-bind:url="url" v-bind:properties="properties"></thread>
                            <thread v-bind:url="url" v-bind:properties="properties"></thread>
                            <thread v-bind:url="url" v-bind:properties="properties"></thread>
                        </b-container>
                    </b-card>
                </b-col>

                <b-col class="col-12 col-md-3 order-md-first" id="searchbar">
                    <hr class="d-md-none" />
                    <title-search v-on:update="update"></title-search>
                    <tags v-bind:tags="tags" v-on:update="update"></tags>
                    <version v-bind:min="version_min" v-bind:max="version_max" v-on:update="update"></version>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import title_search from './filter/search.vue';
    import tags_filter from './filter/tags.vue';
    import version_selector from './filter/version.vue';
    import thread from './thread.vue';

    export default {
        name: 'app',
        components: {
            'title-search': title_search,
            tags: tags_filter,
            version: version_selector,
            thread: thread
        },
        data() {
            return {
                version_min: 8,
                version_max: 13,
                tags: [
                    "基础",
                    "进阶",
                    "计算",
                    "几何",
                    "算法",
                    "特技",
                    "NBT",
                    "游戏机制",
                    "黑科技",
                    "人生经验",
                    "游戏系统",
                    "命令介绍",
                    "原版模组",
                    "地图作品",
                    "概念验证",
                    "OOC生成",
                    "自定义生成器",
                    "其他生成器/资源",
                    "实例",
                    "过时",
                    "即将过时",
                    "英语"
                ],
                properties: {
                    "title": "NBT操作：从入门到mjsb",
                    "last-update": "2018-03-24",
                    "tags": ["基础", "命令介绍", "NBT"],
                    "category": "命令/格式教程",
                    "version-min": 13,
                    "version-max": 13,
                    "recommended": 2
                },
                url: "http://www.mcbbs.net/thread-787422-1-1.html"
            }
        },
        methods: {
            update: function (content) {
                //TODO: ADD THREADs FILTER
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
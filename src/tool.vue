<template>
    <div class="container">
        <form>
        <div class="form-group">
        <h1>很简单很简单的帖子资料生成器</h1>
        <div class="row">
            <div class="col">
                <p>
                    注意，使用此生成器前亦应先阅读
                    <a href="https://github.com/pca006132/CommandReference/blob/master/format.md" target="_blank">资料格式</a>。
                    里面说明了各种标签和类型的含义和用法。
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input class="form-control" v-model="title" type="text" placeholder="帖子标题">
            </div>
        </div>
        <div class="row">
            <div class="col"><input class="form-control" v-model="url" type="text" placeholder="URL"></div>
        </div>
        <div class="row">
            <div class="col"><tags v-on:update="update_tags" title="Tag （最多8个）" :tags="tags" :maximum="tags_max"></tags></div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-sm-3"><label for="category">类型</label></div>
            <div class="col col-sm-9">
                <select id="category" class="form-control" >
                    <option v-for="c in categories" :key="c" :value="c">{{c}}</option>
                </select>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-sm-3"><label for="ver-min">最低版本</label></div>
            <div class="col col-sm-9">
                <select id="ver-min" class="form-control" >
                    <option v-for="c in versions" :key="c" :value="c">{{c}}</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-3"><label for="ver-max">最高版本</label></div>
            <div class="col col-sm-9">
                <select id="ver-max" class="form-control" >
                    <option v-for="c in versions" :key="c" :value="c">{{c}}</option>
                </select>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-sm-3"><label for="last-update">最后主要更新日期</label></div>
            <div class="col col-sm-3">
                <input class="form-control form-check-input" type="checkbox" v-model="no_update" id="no_update">
                <label class="form-check-label" for="no_update">
                不适用
                </label>
            </div>
            <div class="col col-sm-6">
                <input class="form-control" type="date" id="last-update" v-model="last_update" v-bind:class="{disabled: no_update}">
                <!--<b-form-input class="form-control" :disabled="no_update" type="date" id="last-update" v-model="last_update"></b-form-input class="form-control">-->
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-sm-3">
                <label for="authors">作者（以半角逗号分隔不同作者名称）</label>
            </div>
            <div class="col col-sm-9">
                <input class="form-control" v-model="authors" type="text" placeholder="作者名称" id="authors">
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-sm-3"><label for="recommended">推荐程度（0为一般，1为推荐阅读，2为推荐新人阅读）</label></div>
            <div class="col col-sm-9">
                <input class="form-control" type="number" max="2" min="0" id="recommended" v-model="recommended" />
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col"><p>只需要把输出写进 data.json 里的 threads 部分，或扔给 pca 即可。<br />看！我多爱你们！ </p></div>
            <div class="col"><code>{{thread}}</code></div>
        </div>
        </div>
        </form>
    </div>
</template>

<script>
import tags_input from './filter/tags.vue';
const date_time = /\d{4}-\d{2}-\d{2}/;

export default {
    name: 'tools',
    components: {
        'tags': tags_input
    },
    props: {
        version_min: Number,
        version_max: Number,
        tags: Array,
        tags_max: Number,
        categories: Array
    },
    data() {
        return {
            title: '',
            url: '',
            tag_list: [],
            recommended: 0,
            last_update: '',
            no_update: false,
            authors: ''
        }
    },
    computed: {
        thread() {
            if (this.title === '') {
                return '错误: 帖子应该有标题。';
            }
            if (this.url === '') {
                return '错误: 帖子应该有 URL 。';
            }
            if ($('#category').val() === '') {
                return '错误: 帖子应该有类型。';
            }
            if ($('#ver-min').val() === '' || $('#ver-max').val() === '') {
                return '错误: 请正确输入版本。';
            }
            if (!this.no_update && !date_time.exec(this.last_update)) {
                return '错误: 请选择最后更新日期。';
            }

            return `"${this.url}":` + JSON.stringify({
                title: this.title,
                tags: this.tag_list,
                category: $('#category').val(),
                'version-min': ($('#ver-min').val() === '不适用' || $('#ver-max').val() === '不适用')? undefined : parseInt($('#ver-min').val().substring(2)),
                'version-max': ($('#ver-min').val() === '不适用' || $('#ver-max').val() === '不适用')? undefined :parseInt($('#ver-max').val().substring(2)),
                'last-update': this.no_update? undefined : this.last_update,
                recommended: parseInt(this.recommended),
                authors: (this.authors !== '')? this.authors.split(',') : undefined
            })
        },
        versions() {
            let versions = ["不适用"];
            for (let i = this.version_max; i >= this.version_min; i--) {
                versions.push('1.' + i.toString());
            }
            return versions;
        }
    },
    methods: {
        update_tags(tags) {
            this.tag_list = tags;
        }
    }
}
</script>

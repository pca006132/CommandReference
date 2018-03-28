<template>
    <div class="categories">
        <hr />
        <div v-for="cat in categories[0]" :key="cat[1]">
            <offset :name="cat[1]"/>
            <category :header="cat[0]" :sorted="categories[1][cat[0]]" :threads="threads" ></category>
        </div>
    </div>
</template>

<script>
/*
    放飞自我！
*/

import category_component from './category.vue';
import offset from '../util/offset.vue';

function sort_threads(threads) {
    return Object.keys(threads).sort((a, b)=> {
        if (threads[a].recommended > threads[b].recommended) {
            return -1;
        }
        if (threads[a].recommended < threads[b].recommended) {
            return 1;
        }
        let i = threads[a]["tags"].indexOf("基础");
        let j = threads[b]["tags"].indexOf("基础");

        if ((i != -1) != (j != -1)) {
            if (i != -1) {
                return -1;
            } else {
                return 1;
            }
        }
        if ((threads[a]["last-update"] || '') > (threads[b]["last-update"] || '')) {
            return -1;
        }
        if ((threads[a]["last-update"] || '') < (threads[b]["last-update"] || '')) {
            return 1;
        }
        return 0;
    })
}

function categorize(sorted_urls, threads) {
    function slice2(list, predicate) {
        let end = list.length;
        for (let i = 0; i < list.length; i++) {
            if (predicate(i)) {
                end = i;
                break;
            }
        }
        return list.slice(0, end);
    }
    let categories = {};
    let sorted_categories = ["命令快讯", "编辑推荐"];

    categories["命令快讯"] = slice2(slice2(sorted_urls, i=>threads[sorted_urls[i]].recommended < 1)
        .sort((a, b)=> {
            if ((threads[a]["last-update"] || '') > (threads[b]["last-update"] || '')) {
                return -1;
            }
            if ((threads[a]["last-update"] || '') < (threads[b]["last-update"] || '')) {
                return 1;
            }
            return 0;
        }), i=> i === 10);
    categories["编辑推荐"] = slice2(sorted_urls, i=>threads[sorted_urls[i]].recommended < 2);

    for (let url of sorted_urls) {
        if (!categories[threads[url].category]) {
            categories[threads[url].category] = [];
            sorted_categories.push(threads[url].category);
        }
        categories[threads[url].category].push(url);
    }

    return [sorted_categories, categories];
}

function thread_match(version, tags, title) {
    let version_match = ((version) => {
        if (version === "任意版本") {
            return thread=>true;
        }
        let num = parseInt(version.substring(2));
        return thread=> {
            return !thread["version-min"] || (thread["version-min"] <= num && num <= thread["version-max"]);
        }
    })(version);
    function tags_match(thread, tags) {
        if (tags.length === 0) {
            return true;
        }
        for (let tag of tags) {
            if (thread.tags.indexOf(tag) === -1) {
                return false;
            }
        }
        return true;
    }
    let title_match = ((title) => {
        if (title.length === 0) {
            return thread=>true;
        }
        title = title.toLowerCase();
        return thread=>thread.title.toLowerCase().indexOf(title) !== -1;
    })(title)
    return (thread)=>version_match(thread) && tags_match(thread, tags) && title_match(thread);
}

function filter(sorted_categories, categories, threads, predicate) {
    let result_sorted_categories = [];
    let result_categories = {};

    for (let i = 0; i < sorted_categories.length; i++) {
        let category = sorted_categories[i];
        let content = categories[category].filter(url=>predicate(threads[url]));
        if (content.length > 0) {
            result_sorted_categories.push([category, "cat" + i.toString()]);
            result_categories[category] = content;
        }
    }

    return [result_sorted_categories, result_categories];
}

export default {
    name: 'category_manager',
    components: {
        category: category_component,
        offset: offset
    },
    props: {
        threads: Array,
        tags: Array,
        version: String,
        title: String
    },
    computed: {
        raw: function() {
            return categorize(sort_threads(this.threads), this.threads);
        },
        categories: function() {
            let result = filter(this.raw[0], this.raw[1], this.threads,
                thread_match(this.version, this.tags, this.title));
            this.$emit("update", result[0]);

            return result;
        }
    }
}
</script>

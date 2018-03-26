import Vue from 'vue'
import bootstrapVue from "bootstrap-vue"
import tool from './tool.vue';

Vue.use(tool);
$.get("https://raw.githubusercontent.com/pca006132/CommandReference/master/schema.json", (result)=> {
    let data = JSON.parse(result);
    let properties = data.properties.threads.patternProperties;
    let thread_format = properties[Object.keys(properties)[0]].properties;
    let props = {
        version_min: thread_format["version-min"].minimum,
        version_max: thread_format["version-min"].maximum,
        tags: thread_format.tags.items.enum,
        tags_max: thread_format.tags.maxItems,
        categories: thread_format.category.enum
    }
    new Vue({
        el: '#tool',
        render: h => h(tool, {
            props: props
        })
    })
})


!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,r){"use strict";function s(e,t,r,s,n,a,i,o){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),s&&(d.functional=!0),a&&(d._scopeId=a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):n&&(c=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,t){return c.call(t),u(e,t)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return{exports:e,options:d}}r.d(t,"a",function(){return s})},function(e,t,r){"use strict";function s(e,t){for(var r=[],s={},n=0;n<t.length;n++){var a=t[n],i=a[0],o={id:e+":"+n,css:a[1],media:a[2],sourceMap:a[3]};s[i]?s[i].parts.push(o):r.push(s[i]={id:i,parts:[o]})}return r}r.r(t),r.d(t,"default",function(){return p});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=n&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,r,n){c=r,u=n||{};var i=s(e,t);return f(i),function(t){for(var r=[],n=0;n<i.length;n++){var o=i[n];(l=a[o.id]).refs--,r.push(l)}t?f(i=s(e,t)):i=[];for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function f(e){for(var t=0;t<e.length;t++){var r=e[t],s=a[r.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](r.parts[n]);for(;n<r.parts.length;n++)s.parts.push(g(r.parts[n]));s.parts.length>r.parts.length&&(s.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(g(r.parts[n]));a[r.id]={id:r.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,r,s=document.querySelector("style["+m+'~="'+e.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(v){var n=l++;s=o||(o=h()),t=C.bind(null,s,n,!1),r=C.bind(null,s,n,!0)}else s=h(),t=function(e,t){var r=t.css,s=t.media,n=t.sourceMap;s&&e.setAttribute("media",s);u.ssrId&&e.setAttribute(m,t.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,s),r=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else r()}}var _,x=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function C(e,t,r,s){var n=r?"":s.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",s=e[3];if(!s)return r;if(t&&"function"==typeof btoa){var n=(i=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[r].concat(a).concat([n]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(s[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&s[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t){e.exports=Vue},function(e,t,r){"use strict";var s={name:"tag_filter",props:{tags:Array,maximum:Number,title:String,exclude:Boolean},methods:{toggle:function(e){if($(e.target).hasClass("badge-light")){if(this.maximum&&this.filter.length===this.maximum)return;$(e.target).removeClass("badge-light"),this.exclude_mode?($(e.target).addClass("badge-danger"),this.$data.excludes.push($(e.target).text())):($(e.target).addClass("badge-success"),this.$data.filter.push($(e.target).text()))}else{$(e.target).removeClass("badge-danger"),$(e.target).removeClass("badge-success"),$(e.target).addClass("badge-light");let t=this.filter.indexOf($(e.target).text());t>-1&&this.filter.splice(t,1),(t=this.excludes.indexOf($(e.target).text()))>-1&&this.excludes.splice(t,1)}$(e.target).blur(),this.$emit("update",this.filter,this.excludes)}},data:()=>({filter:[],excludes:[],exclude_mode:!1})},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-left"},[r("strong",[e._v(e._s(e.title))]),r("br"),e._v(" "),r("div",{staticClass:"container"},[r("p",e._l(e.tags,function(t){return r("a",{key:t,staticClass:"badge badge-light noselect",attrs:{href:"#"},on:{click:e.toggle}},[e._v(e._s(t))])})),e._v(" "),e.exclude?r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.exclude_mode,expression:"exclude_mode"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exclude"},domProps:{checked:Array.isArray(e.exclude_mode)?e._i(e.exclude_mode,null)>-1:e.exclude_mode},on:{change:function(t){var r=e.exclude_mode,s=t.target,n=!!s.checked;if(Array.isArray(r)){var a=e._i(r,null);s.checked?a<0&&(e.exclude_mode=r.concat([null])):a>-1&&(e.exclude_mode=r.slice(0,a).concat(r.slice(a+1)))}else e.exclude_mode=n}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"exclude"}},[e._v("\n                排除标签模式\n            ")])]):e._e()])])};n._withStripped=!0;var a=r(0),i=!1;var o=function(e){i||r(7)},l=Object(a.a)(s,n,[],!1,o,null,null);l.options.__file="src\\filter\\tags.vue";t.a=l.exports},,function(e,t,r){(e.exports=r(2)(!0)).push([e.i,"\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\n}\r\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/filter/src/filter/tags.vue"],names:[],mappings:";AAuEA;IACA,4BAAA,CAAA,gBAAA;IACA,0BAAA,GAAA,YAAA;KACA,yBAAA,GAAA,oBAAA;OACA,uBAAA,GAAA,aAAA;QACA,sBAAA,GAAA,4BAAA;YACA,kBAAA,GAAA;oEACA;CACA",file:"tags.vue",sourcesContent:['<template>\r\n    <div class="text-left">\r\n        <strong>{{title}}</strong><br/>\r\n        <div class="container">\r\n            <p><a class="badge badge-light noselect" v-on:click="toggle" href="#" v-for="tag in tags" :key="tag">{{tag}}</a></p>\r\n            <div v-if="exclude" class="form-check">\r\n                <input v-model="exclude_mode" class="form-check-input" type="checkbox" id="exclude">\r\n                <label class="form-check-label" for="exclude">\r\n                    排除标签模式\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: \'tag_filter\',\r\n    props: {\r\n        tags: Array,\r\n        maximum: Number,\r\n        title: String,\r\n        exclude: Boolean\r\n    },\r\n    methods: {\r\n        toggle: function(event) {\r\n            if ($(event.target).hasClass(\'badge-light\')) {\r\n                if (this.maximum && this.filter.length === this.maximum) {\r\n                    return;\r\n                }\r\n\r\n                $(event.target).removeClass(\'badge-light\');\r\n\r\n                if (this.exclude_mode) {\r\n                    $(event.target).addClass(\'badge-danger\');\r\n                    this.$data.excludes.push($(event.target).text());\r\n                } else {\r\n                    $(event.target).addClass(\'badge-success\');\r\n                    this.$data.filter.push($(event.target).text());\r\n                }\r\n\r\n            } else {\r\n                $(event.target).removeClass(\'badge-danger\');\r\n                $(event.target).removeClass(\'badge-success\');\r\n\r\n                $(event.target).addClass(\'badge-light\');\r\n                let index = this.filter.indexOf($(event.target).text());\r\n                if (index > -1) {\r\n                    this.filter.splice(index, 1);\r\n                }\r\n\r\n                index = this.excludes.indexOf($(event.target).text());\r\n                if (index > -1) {\r\n                    this.excludes.splice(index, 1);\r\n                }\r\n            }\r\n            $(event.target).blur();\r\n            this.$emit(\'update\', this.filter, this.excludes);\r\n        }\r\n    },\r\n    data () {\r\n        return {\r\n            filter: [],\r\n            excludes: [],\r\n            exclude_mode: false\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\r\n}\r\n</style>'],sourceRoot:""}])},function(e,t,r){var s=r(6);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,r(1).default)("e6cacfac",s,!1,{})},,function(e,t,r){"use strict";r.r(t);var s=r(3),n=r.n(s);const a=/\d{4}-\d{2}-\d{2}/;var i={name:"tools",components:{tags:r(4).a},props:{version_min:Number,version_max:Number,tags:Array,tags_max:Number,categories:Array},data:()=>({title:"",url:"",tag_list:[],recommended:0,last_update:"",no_update:!1,authors:""}),computed:{thread(){return""===this.title?"错误: 帖子应该有标题。":""===this.url?"错误: 帖子应该有 URL 。":""===$("#category").val()?"错误: 帖子应该有类型。":""===$("#ver-min").val()||""===$("#ver-max").val()?"错误: 请正确输入版本。":this.no_update||a.exec(this.last_update)?`"${this.url}":`+JSON.stringify({title:this.title,tags:this.tag_list,category:$("#category").val(),"version-min":"不适用"===$("#ver-min").val()||"不适用"===$("#ver-max").val()?void 0:parseInt($("#ver-min").val().substring(2)),"version-max":"不适用"===$("#ver-min").val()||"不适用"===$("#ver-max").val()?void 0:parseInt($("#ver-max").val().substring(2)),"last-update":this.no_update?void 0:this.last_update,recommended:parseInt(this.recommended),authors:""!==this.authors?this.authors.split(","):void 0}):"错误: 请选择最后更新日期。"},versions(){let e=["不适用"];for(let t=this.version_max;t>=this.version_min;t--)e.push("1."+t.toString());return e}},methods:{update_tags(e){this.tag_list=e}}},o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("form",[r("div",{staticClass:"form-group"},[r("h1",[e._v("很简单很简单的帖子资料生成器")]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"帖子标题"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("tags",{attrs:{title:"Tag （最多8个）",tags:e.tags,maximum:e.tags_max},on:{update:e.update_tags}})],1)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(1),e._v(" "),r("div",{staticClass:"col col-sm-9"},[r("select",{staticClass:"form-control",attrs:{id:"category"}},e._l(e.categories,function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(2),e._v(" "),r("div",{staticClass:"col col-sm-9"},[r("select",{staticClass:"form-control",attrs:{id:"ver-min"}},e._l(e.versions,function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))])]),e._v(" "),r("div",{staticClass:"row"},[e._m(3),e._v(" "),r("div",{staticClass:"col col-sm-9"},[r("select",{staticClass:"form-control",attrs:{id:"ver-max"}},e._l(e.versions,function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(4),e._v(" "),r("div",{staticClass:"col col-sm-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.no_update,expression:"no_update"}],staticClass:"form-control form-check-input",attrs:{type:"checkbox",id:"no_update"},domProps:{checked:Array.isArray(e.no_update)?e._i(e.no_update,null)>-1:e.no_update},on:{change:function(t){var r=e.no_update,s=t.target,n=!!s.checked;if(Array.isArray(r)){var a=e._i(r,null);s.checked?a<0&&(e.no_update=r.concat([null])):a>-1&&(e.no_update=r.slice(0,a).concat(r.slice(a+1)))}else e.no_update=n}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"no_update"}},[e._v("\n            不适用\n            ")])]),e._v(" "),r("div",{staticClass:"col col-sm-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.last_update,expression:"last_update"}],staticClass:"form-control",class:{disabled:e.no_update},attrs:{type:"date",id:"last-update"},domProps:{value:e.last_update},on:{input:function(t){t.target.composing||(e.last_update=t.target.value)}}})])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(5),e._v(" "),r("div",{staticClass:"col col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.authors,expression:"authors"}],staticClass:"form-control",attrs:{type:"text",placeholder:"作者名称",id:"authors"},domProps:{value:e.authors},on:{input:function(t){t.target.composing||(e.authors=t.target.value)}}})])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(6),e._v(" "),r("div",{staticClass:"col col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recommended,expression:"recommended"}],staticClass:"form-control",attrs:{type:"number",max:"2",min:"0",id:"recommended"},domProps:{value:e.recommended},on:{input:function(t){t.target.composing||(e.recommended=t.target.value)}}})])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[e._m(7),e._v(" "),r("div",{staticClass:"col"},[r("code",[e._v(e._s(e.thread))])])])])])])};o._withStripped=!0;var l=r(0),c=Object(l.a)(i,o,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("p",[this._v("\n                注意，使用此生成器前亦应先阅读\n                "),t("a",{attrs:{href:"https://github.com/pca006132/CommandReference/blob/master/format.md",target:"_blank"}},[this._v("资料格式")]),this._v("。\n                里面说明了各种标签和类型的含义和用法。\n            ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"category"}},[this._v("类型")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"ver-min"}},[this._v("最低版本")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"ver-max"}},[this._v("最高版本")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"last-update"}},[this._v("最后主要更新日期")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"authors"}},[this._v("作者（以半角逗号分隔不同作者名称）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col col-sm-3"},[t("label",{attrs:{for:"recommended"}},[this._v("推荐程度（0为一般，1为推荐阅读，2为推荐新人阅读）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col"},[t("p",[this._v("只需要把输出写进 data.json 里的 threads 部分，或扔给 pca 即可。"),t("br"),this._v("看！我多爱你们！ ")])])}],!1,null,null,null);c.options.__file="src\\tool.vue";var d=c.exports;n.a.use(d),$.get("https://raw.githubusercontent.com/pca006132/CommandReference/master/schema.json",e=>{let t=JSON.parse(e).properties.threads.patternProperties,r=t[Object.keys(t)[0]].properties,s={version_min:r["version-min"].minimum,version_max:r["version-min"].maximum,tags:r.tags.items.enum,tags_max:r.tags.maxItems,categories:r.category.enum};new n.a({el:"#tool",render:e=>e(d,{props:s})})})}]);
//# sourceMappingURL=tool.js.map
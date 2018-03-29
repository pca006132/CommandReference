<template>
    <div>
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
        <b-row>
            <b-col>
                <div class="d-inline-block align-middle text-center">
                <p class="text-left d-inline-block">
                    命令资源大全是一个命令相关资源的索引网站，各位可以：<br/>
                    1. 阅读各新人教程，学习命令 <br />
                    2. 搜索各种黑科技，制作更好的系统和地图 <br />
                    3. 找到需要的生成器软件，加快系统编写效率 <br /><br />
                    各教程及生成器作者更可以在此宣传各位的作品！
                </p>
                <p>
                    命令资源大全（原新人手册）进行了大量更新，现在急需各位帮助更新！<br />
                    详情请点击
                    <a href="https://github.com/pca006132/CommandReference">命令资源大全(GitHub)</a>。
                </p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 offset-md-3 col-md-6">
                <adv :pics="pics"></adv>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import adv from './adv.vue';
export default {
    name: 'introduction',
    components: {
        adv: adv
    },
    props: {
        pics: Array
    }
}
</script>

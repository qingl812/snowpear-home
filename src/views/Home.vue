<template>
    <div class="home">
        <card-page
            title="雪梨云盘"
            context="使用开源的 nextcloud 构建的云盘系统."
            :imageSrc="require('@/assets/nextcloud.jpg')"
            enterSrc="http://nextcloud.winterwonder.top/"
            docSrc="http://nextcloud.winterwonder.top/"
        ></card-page>
        <card-page
            title="docs"
            context="使用开源的 gitbook 构建的 docs, 用以记录开发中遇到的各种问题."
            :imageSrc="require('@/assets/gitbook.png')"
            enterSrc="http://nextcloud.winterwonder.top/"
            docSrc="http://nextcloud.winterwonder.top/"
        ></card-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardPage from '@/components/CardPage.vue'

@Component({
    components: {
        'card-page': CardPage
    }
})
export default class Home extends Vue {
}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}
</style>

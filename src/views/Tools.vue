<template>
    <div class="tools">
        <card-page
            title="GitHub"
            context="GitHub 是一个受您工作方式启发的开发平台。"
            :imageSrc="require('@/assets/github.jpg')"
            enterSrc="https://github.com/"
        ></card-page>
        <card-page
            title="StackOverFlow"
            context="使用开源的 gitbook 构建的 docs, 用以记录开发中遇到的各种问题."
            :imageSrc="require('@/assets/stackoverflow.jpeg')"
            enterSrc="https://stackoverflow.com/"
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
export default class Tools extends Vue {
}
</script>

<style>
</style>

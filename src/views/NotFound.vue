<template>
    <div class="notFound">
        <div class="system">
            <img src="../assets/NotFound/404.png" />
            <div class="title">
                <h2>页面走丢了...</h2>
                <h4>远方的朋友你好！非常抱歉，您所请求的页面不存在！</h4>
                <h4>请仔细检查您输入的网址是否正确。</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>

<style scoped>
@import url("../assets/NotFound/h-ui.reset.css");
@import url("../assets/NotFound/index.css");
</style>

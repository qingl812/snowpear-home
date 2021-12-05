<template>
    <div class="cardPage">
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>{{ $props.title }}</span>
                <el-link class="card-link" :href="$props.enterSrc" type="primary">进入</el-link>
                <el-link class="card-link" :href="$props.docSrc" type="primary">文档</el-link>
            </div>
            <el-row :gutter="12">
                <el-col :span="8">
                    <el-image class="image" :src="$props.imageSrc"></el-image>
                </el-col>
                <el-col :span="8">
                    <div class="text item">{{ $props.context }}</div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardPage extends Vue {
    @Prop() private title!: string;
    @Prop() private context!: string;
    @Prop() private imageSrc!: string;
    @Prop() private enterSrc!: string;
    @Prop() private docSrc!: string;
}
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.box-card {
    width: 600px;
}

.image {
    width: 100px;
    height: 100px;
}

.card-link {
    float: right;
    margin-right: 20px;
}

.box-card {
    margin-bottom: 20px;
}
</style>

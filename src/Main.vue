<template>
    <div class="app">
        <el-container>
            <el-header>
                <h1>雪梨 - Snow Pear</h1>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu router="true" :default-active="$route.path">
                        <el-menu-item index="/home">雪梨站点</el-menu-item>
                        <el-menu-item index="/tools">实用工具</el-menu-item>
                        <el-menu-item index="/admin">控制台</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
}
</script>

<style>
</style>

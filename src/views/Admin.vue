<template>
    <div class="admin">
        <el-card shadow="hover" class="card-admin">
            更新所有项目
            <el-button type="primary" class="button-admin" @click="update()">更新</el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import { MessageBoxData } from 'element-ui/types/message-box';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Admin extends Vue {
    mounted() {
        this.$prompt('请输入管理员密码', '登录', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputErrorMessage: '密码错误'
        }).then((value: MessageBoxData) => {
            let passwd = '010812';
            if (typeof (value) == 'object') {
                if (value.value != passwd) {
                    this.$message.error('密码错误');
                    this.$router.push('/home')
                } else {
                    this.$message({
                        type: 'success',
                        message: '密码正确'
                    });
                }
            }
        }).catch(() => {
            this.$router.push('/home')
        })
    }

    update(): void {
        this.$message({
            type: 'success',
            message: '更新成功'
        });
    }
}
</script>

<style scoped>
.card-admin {
    width: 600px;
    min-height: 80px;
}
.button-admin {
    float: right;
}
</style>

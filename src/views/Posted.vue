<template>
    <div>
        <div class="page-title">已投递</div>
        <div class="content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="已查看" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="未通过" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="通过" name="fourths">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
// import {} from ''
export default {
    name: 'Posted',
    data () {
        return {
            activeName: 'second'
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
}
</style>

<template>
    <div>
        <div class="page-title">人才列表</div>
        <div class="content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部" name="first">
                    <ResumeItem></ResumeItem>
                    <ResumeItem></ResumeItem>
                </el-tab-pane>
                <el-tab-pane label="已查看" name="second">
                    <ResumeItem></ResumeItem>
                </el-tab-pane>
                <el-tab-pane label="未查看" name="fourth">
                    <ResumeItem></ResumeItem>
                </el-tab-pane>
            </el-tabs>
            <div class="list-pagination">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import ResumeItem from '../components/ResumeItem'
export default {
    name: 'ResumeList',
    components: { ResumeItem },
    data () {
        return {
            activeName: 'first'
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 6px;
    .list-pagination {
        margin-top: 30px;
        text-align: right;
    }
}
</style>

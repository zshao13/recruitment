<template>
    <div>
        <div class="page-title">职位列表</div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="filter">
                    <span class="title">职位</span>
                    <el-checkbox-group class="checkbox" v-model="checkList">
                        <el-checkbox class="checkbox-item" label="复选框 A"></el-checkbox>
                        <el-checkbox class="checkbox-item" label="复选框 B"></el-checkbox>
                        <el-checkbox class="checkbox-item" label="复选框 C"></el-checkbox>
                        <el-checkbox class="checkbox-item" label="禁用" disabled></el-checkbox>
                        <el-checkbox class="checkbox-item" label="选中且禁用" disabled></el-checkbox>
                    </el-checkbox-group>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="list">
                    <h2 class="list-title">开启新的职位19233</h2>
                    <PositionItem></PositionItem>
                    <PositionItem></PositionItem>
                    <PositionItem></PositionItem>
                    <div class="list-pagination">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                        ></el-pagination>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import PositionItem from '../components/PositionItem'
export default {
    name: 'Position',
    components: { PositionItem },
    data () {
        return {
            checkList: []
        }
    }
}
</script>

<style lang="less" scoped>
.filter, .list {
    background-color: #fff;
    border-radius: 6px;
}
.filter {
    padding: 10px;
    .title {
        padding: 0 10px;
    }
    .checkbox {
        margin-top: 10px;
        .checkbox-item {
            display: block;
            margin: 0;
            padding: 5px 0 5px 10px;
        }
    }
}
.list {
    padding: 10px 20px;
    &-title {
        margin: 0;
        margin-bottom: 20px;
        margin-left: 10px;
    }
    &-pagination {
        margin-top: 30px;
        text-align: right;
    }
}
</style>

<template>
    <div>
        <div class="page-title">已投递</div>
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="999"></el-tab-pane>
                <el-tab-pane label="未通过" name="0"></el-tab-pane>
                <el-tab-pane label="通过" name="1"></el-tab-pane>
            </el-tabs>
            <template v-for="item in list">
                <PositionItem :key="item.p_id" :info="item.positionInfo" @action="onAction(item)"></PositionItem>
            </template>
            <div class="list-pagination">
                <el-pagination
                    :current-page.sync="params.pageNo"
                    background
                    layout="prev, pager, next"
                    :total="total"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { getSendList } from '../api/api'
import PositionItem from '../components/PositionItem'
export default {
    name: 'Posted',
    components: { PositionItem },
    data () {
        return {
            activeName: '999',
            params: {
                pageNo: 1,
                pageSize: 10,
                status: ''
            },
            list: [],
            total: 0
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.app.user
        }
    },
    mounted () {
        this.initData()
    },
    methods: {
        onAction (row) {
            this.$router.push({
                path: '/positionDetail',
                query: {
                    id: row.p_id
                }
            })
        },
        async initData () {
            const postData = {
                ...this.params,
                userId: this.userInfo.u_id
            }
            const res = await getSendList(postData)
            if (res.success) {
                this.list = res.data.data
                this.total = res.data.count
            }
        },
        handleClick (tab) {
            if (tab.name === '999') {
                this.params.status = ''
            } else {
                this.params.status = tab.name
            }
            this.params.pageNo = 1
            this.initData()
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    .list-pagination {
        margin-top: 30px;
        text-align: right;
    }
}
</style>

<template>
    <div>
        <div class="page-title">已发布职位</div>
        <div class="edit-btn" @click="onAddPosition">新增</div>
        <div class="content">
            <template v-for="item in list">
                <PositionItem :key="item.p_id" :info="item" @action="onAction(item)"></PositionItem>
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
import PositionItem from '../components/PositionItem'
import { getPositionListForUser } from '../api/api'
export default {
    name: 'CompanyPosition',
    components: { PositionItem },
    data () {
        return {
            list: [],
            params: {
                pageNo: 1,
                pageSize: 10
            },
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
        async initData () {
            const postData = {
                ...this.params,
                id: this.userInfo.u_id
            }
            const res = await getPositionListForUser(postData)
            if (res.success) {
                this.list = res.data.data
                this.total = res.data.count
            }
        },
        onAction (row) {
            this.$router.push({
                path: '/positionDetail',
                query: {
                    id: row.p_id
                }
            })
        },
        onAddPosition () {
            this.$router.push('/positionEdit')
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    background-color: #fff;
    border-radius: 6px;
    padding: 20px 30px;
    .list-pagination {
        margin-top: 30px;
        text-align: right;
    }
}
.edit-btn {
    float: right;
    height: 30px;
    line-height: 32px;
    text-align: center;
    width: 80px;
    border: 1px solid #1f2329;
    border-radius: 15px;
    position: relative;
    top: -50px;
    font-size: 14px;
    color: #1f2329;
    cursor: pointer;
    &:hover {
        color: #bbbfc4;
        border-color: #bbbfc4;
    }
}
</style>

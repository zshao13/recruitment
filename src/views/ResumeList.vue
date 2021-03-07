<template>
    <div>
        <div class="page-title">人才列表</div>
        <div class="content">
            <template v-for="item in list">
                <ResumeItem :info="item" :key="item.r_id" @action="onAction(item)"></ResumeItem>
            </template>
        </div>
    </div>
</template>

<script>
import ResumeItem from '../components/ResumeItem'
import { getTalentsList, getTalentsListForP } from '../api/api'
export default {
    name: 'ResumeList',
    components: { ResumeItem },
    data () {
        return {
            list: [],
            id: ''
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.app.user
        }
    },
    mounted () {
        const { query } = this.$route
        if (query.id) {
            this.id = query.id
            this.getList()
        } else {
            this.initData()
        }
    },
    methods: {
        async initData () {
            const postData = {
                userId: this.userInfo.u_id
            }
            const res = await getTalentsList(postData)
            if (res.success) {
                this.list = res.data
            }
        },
        async getList () {
            const postData = {
                id: this.id
            }
            const res = await getTalentsListForP(postData)
            if (res.success) {
                this.list = res.data
            }
        },
        onAction (row) {
            this.$router.push({
                path: '/resume',
                query: {
                    id: row.user_id,
                    pid: row.p_id
                }
            })
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

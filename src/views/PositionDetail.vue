<template>
    <div>
        <div class="page-title">职位详情</div>
        <div class="detail">
            <h1>{{form.name || '--'}}</h1>
            <div class="subtitle">
                <template v-for="(item, i) in form.tags">
                    <span :key="i">{{item}}</span>
                    <el-divider v-if="i < form.tags.length - 1" :key="i" direction="vertical"></el-divider>
                </template>
            </div>
            <div>
                <h2>职位描述</h2>
                <pre class="textContent">
                    {{form.remark}}
                </pre>
            </div>
            <div>
                <h2>职位要求</h2>
                <pre class="textContent">
                    {{form.demand}}
                </pre>
            </div>
            <div class="send-btn" v-if="userInfo.u_type === '1' && form.status === '1'" @click="onSend">投递</div>
            <div class="send-btn gary" v-if="userInfo.u_type === '1' && form.status === '0'">该职位已关闭</div>
            <div class="send-btn" v-if="userInfo.u_type === '2'" @click="onEdit">编辑</div>
            <div class="send-btn" v-if="userInfo.u_type === '2'" @click="onCheck">查看简历</div>
            <div class="send-btn" v-if="userInfo.u_type === '2' && form.status === '1'" @click="onChangeStaus('0')">关闭职位</div>
            <div class="send-btn" v-if="userInfo.u_type === '2' && form.status === '0'" @click="onChangeStaus('1')">开启职位</div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import { getPositionInfo, setPositionStatus, sendPosition } from '../api/api'
export default {
    name: 'PositionDetail',
    data () {
        return {
            form: {
                name: '',
                tags: [],
                remark: '',
                demand: '',
                status: ''
            },
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
            this.initData()
        }
    },
    methods: {
        async initData () {
            const postData = {
                id: this.id
            }
            const res = await getPositionInfo(postData)
            if (res.success) {
                this.form.name = res.data.p_name
                this.form.tags = JSON.parse(res.data.p_tags)
                this.form.remark = res.data.p_remark
                this.form.demand = res.data.p_demand
                this.form.status = res.data.status
            }
        },
        onEdit () {
            this.$router.push({
                path: '/positionEdit',
                query: {
                    id: this.id
                }
            })
        },
        async onSend () {
            const postData = {
                userId: this.userInfo.u_id,
                positionId: this.id
            }
            const res = await sendPosition(postData)
            if (res.success) {
                if (res.data) {
                    this.$message.error(res.data)
                } else {
                    this.$message.success('投递成功！')
                }
            }
        },
        async onChangeStaus (status) {
            const postData = {
                status: status,
                id: this.id
            }
            const res = await setPositionStatus(postData)
            if (res.success) {
                this.$message.success('操作成功！')
                this.initData()
            }
        },
        onCheck () {
            console.log()
            this.$router.push({
                path: '/resumeList',
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.detail {
    padding: 10px 30px;
    background-color: #fff;
    border-radius: 6px;
}
.textContent {
    white-space: pre-line;
    line-height: 2em;
}
.gary {
    opacity: .6;
}
</style>

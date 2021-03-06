<template>
    <div>
        <div class="page-title" v-if="userInfo.u_type === '1'">我的简历</div>
        <div class="page-title" v-if="userInfo.u_type === '2'">简历详情</div>
        <div class="edit-btn" v-if="userInfo.u_type === '1'" @click="onEdit">编辑</div>
        <div class="content">
            <div>
                <h3 class="title">基本信息</h3>
                <el-row class="row">
                    <el-col :span="12" class="col">
                        <div class="col-title">姓名</div>
                        <div>{{baseForm.name || '--'}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">手机号码</div>
                        <div>{{baseForm.phone || '--'}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">邮箱</div>
                        <div>{{baseForm.email || '--'}}</div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3 class="title">教育经历</h3>
                <el-row class="row">
                    <el-col :span="12" class="col">
                        <div class="col-title">学校</div>
                        <div>{{educationInfo.school || '--'}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">专业</div>
                        <div>{{educationInfo.major || '--'}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">起止时间</div>
                        <div>{{educationInfo.time | dealTime}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">学历</div>
                        <div>{{educationInfo.education || '--'}}</div>
                    </el-col>
                    <el-col :span="12" class="col">
                        <div class="col-title">学历类型</div>
                        <div>{{educationInfo.type | typeMap}}</div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3 class="title">工作经历</h3>
                <template v-for="(item, index) in workList">
                    <el-row class="row" :key="item.key">
                        <el-col :span="12" class="col">
                            <div class="col-title">公司</div>
                            <div>{{item.company || '--'}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">职位</div>
                            <div>{{item.position || '--'}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">起止时间</div>
                            <div>{{item.time | dealTime}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">描述</div>
                            <div>{{item.remark || '--'}}</div>
                        </el-col>
                    </el-row>
                    <el-divider v-if="index !== workList.length - 1" :key="item.key"></el-divider>
                </template>
            </div>
            <div>
                <h3 class="title">项目经历</h3>
                <template v-for="(item, index) in objectList">
                    <el-row class="row" :key="item.key">
                        <el-col :span="12" class="col">
                            <div class="col-title">项目名称</div>
                            <div>{{item.name || '--'}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">项目角色</div>
                            <div>{{item.role || '--'}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">起止时间</div>
                            <div>{{item.time | dealTime}}</div>
                        </el-col>
                        <el-col :span="12" class="col">
                            <div class="col-title">项目描述</div>
                            <div>{{item.remark || '--'}}</div>
                        </el-col>
                    </el-row>
                    <el-divider v-if="index !== objectList.length - 1" :key="item.key"></el-divider>
                </template>
            </div>
            <div class="send-btn" v-if="userInfo.u_type === '2'">通过</div>
            <div class="send-btn" v-if="userInfo.u_type === '2'">未通过</div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import { getResume } from '../api/api'
export default {
    name: 'Resume',
    data () {
        return {
            baseForm: {},
            educationInfo: {},
            workList: [],
            objectList: []
        }
    },
    filters: {
        typeMap (v) {
            const map = {
                1: '海外及港台',
                2: '统招全日制',
                3: '统招非全日制',
                4: '自考',
                5: '其他'
            }
            return map[v] || '--'
        },
        dealTime (v) {
            if (v === undefined) {
                return ''
            } else {
                return `${v[0]} ~ ${v[1]}`
            }
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
                id: this.userInfo.u_id
            }
            const res = await getResume(postData)
            if (res.success) {
                if (res.data) {
                    this.rId = res.data.rId
                    this.baseForm = res.data.baseInfo
                    this.educationInfo = res.data.eduInfo
                    this.workList = res.data.workInfo
                    this.objectList = res.data.objectInfo
                }
            }
        },
        onEdit () {
            this.$router.push('/resumeEdit')
        }
    }
}
</script>

<style lang="less" scoped>
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
.content {
    padding: 10px 50px;
    background-color: #fff;
    border-radius: 6px;
    .title {
        margin: 20px 0;
        position: relative;
        &::after {
            position: absolute;
            content: '';
            width: 15px;
            height: 5px;
            background-color: #409eff;
            left: 0;
            bottom: -10px;
        }
    }
    .row {
        margin-top: 30px;
        line-height: 1.71;
        .col {
            margin-bottom: 16px;
            &-title {
                color: #1f2329;
                opacity: .45;
            }
        }
    }
}

</style>

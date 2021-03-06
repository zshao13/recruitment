<template>
    <div>
        <div class="page-title" v-if="rId === ''">新增简历</div>
        <div class="page-title" v-else>编辑简历</div>
        <div class="content">
            <el-row class="row">
                <el-col :span="8">
                    <h4 class="title">基本信息</h4>
                    <p class="tip">请填写基本信息</p>
                </el-col>
                <el-col :span="16">
                    <el-form label-position="top" :model="baseForm">
                        <el-form-item label="姓名">
                            <el-input v-model="baseForm.name" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="baseForm.phone" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="baseForm.email" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="row">
                <el-col :span="8">
                    <h4 class="title">教育经历</h4>
                    <p class="tip">请填写教育经历</p>
                </el-col>
                <el-col :span="16">
                    <el-form label-position="top" :model="educationInfo">
                        <el-form-item label="学校">
                            <el-input v-model="educationInfo.school" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="学历">
                            <el-input v-model="educationInfo.education" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="学历类型">
                            <el-select class="select" v-model="educationInfo.type" placeholder="请选择">
                                <el-option label="海外及港台" :value="1"></el-option>
                                <el-option label="统招全日制" :value="2"></el-option>
                                <el-option label="统招非全日制" :value="3"></el-option>
                                <el-option label="自考" :value="4"></el-option>
                                <el-option label="其他" :value="5"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="专业">
                            <el-input v-model="educationInfo.major" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="起止时间">
                            <el-date-picker
                                class="select"
                                v-model="educationInfo.time"
                                type="daterange"
                                value-format="yyyy-MM-dd"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                            ></el-date-picker>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="row">
                <el-col :span="8">
                    <h4 class="title">工作经历</h4>
                    <p class="tip">请填写工作经历</p>
                </el-col>
                <el-col :span="16">
                    <template v-for="item in workList">
                        <el-form :key="item.key" label-position="top" :model="item">
                            <el-form-item label="公司">
                                <el-input v-model="item.company" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="职位">
                                <el-input v-model="item.position" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="起止时间">
                                <el-date-picker
                                    class="select"
                                    v-model="item.time"
                                    type="daterange"
                                    value-format="yyyy-MM-dd"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                ></el-date-picker>
                            </el-form-item>
                            <el-form-item label="描述">
                                <el-input type="textarea" v-model="item.remark" placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-divider :key="item.key"></el-divider>
                    </template>
                    <div class="btn-group">
                        <el-button type="primary" icon="el-icon-plus" circle @click="onAddWork"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle v-if="workList.length > 0" @click="onDeleteWork"></el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="row">
                <el-col :span="8">
                    <h4 class="title">项目经历</h4>
                    <p class="tip">请填写项目经历</p>
                </el-col>
                <el-col :span="16">
                    <template v-for="item in objectList">
                        <el-form :key="item.key" label-position="top" :model="item">
                            <el-form-item label="项目名称">
                                <el-input v-model="item.name" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="项目角色">
                                <el-input v-model="item.role" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="起止时间">
                                <el-date-picker
                                    class="select"
                                    v-model="item.time"
                                    type="daterange"
                                    value-format="yyyy-MM-dd"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                ></el-date-picker>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input type="textarea" v-model="item.remark" placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-divider :key="item.key"></el-divider>
                    </template>
                    <div class="btn-group">
                        <el-button type="primary" icon="el-icon-plus" circle @click="onAddObject"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle v-if="objectList.length > 0" @click="onDeleteObject"></el-button>
                    </div>
                </el-col>
            </el-row>
            <div class="send-btn" @click="onSave">保存</div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import { addResume, getResume } from '../api/api'
export default {
    name: 'ResumeEdit',
    data () {
        return {
            baseForm: {
                name: '',
                phone: '',
                email: ''
            },
            educationInfo: {
                school: '',
                education: '',
                type: '',
                major: '',
                time: []
            },
            workList: [],
            workItem: {
                company: '',
                position: '',
                time: [],
                remark: ''
            },
            objectList: [],
            objectItem: {
                name: '',
                role: '',
                time: [],
                remark: ''
            },
            id: 0,
            rId: ''
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
        async onSave () {
            const postData = {
                userId: this.userInfo.u_id,
                baseInfo: this.baseForm,
                educationInfo: this.educationInfo,
                workInfo: this.workList,
                objectInfo: this.objectList
            }
            if (this.rId !== '') {
                postData.id = this.rId
            }
            console.log(postData)
            const res = await addResume(postData)
            if (res.success) {
                this.$message.success(res.data)
                this.$router.back()
            }
        },
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
        onAddWork () {
            const item = {
                ...this.workItem,
                key: this.id
            }
            this.id++
            this.workList.push(item)
        },
        onDeleteWork () {
            this.workList.pop()
        },
        onAddObject () {
            const item = {
                ...this.objectItem,
                key: this.id
            }
            this.id++
            this.objectList.push(item)
        },
        onDeleteObject () {
            this.objectList.pop()
        }
    }
}
</script>
<style lang="less" scoped>
.content {
    padding: 10px 10%;
    background-color: #fff;
    border-radius: 6px;
    .row {
        .title {
            margin: 5px 0;
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
        .tip {
            font-size: 14px;
            color: #8f959e;
        }
        & /deep/ .el-form-item__label {
            padding: 0;
            line-height: 30px;
            font-weight: 600;
        }
    }
}
.select {
    width: 100%;
}
.btn-group {
    margin-top: 15px;
}
</style>

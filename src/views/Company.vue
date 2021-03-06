<template>
    <div>
        <div class="page-title">企业信息</div>
        <div class="content">
            <el-form :model="form" class="form" label-width="180px">
                <el-form-item label="公司全称">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="融资阶段">
                    <el-select class="select" v-model="form.type" placeholder="请选择">
                        <el-option label="未融资" :value="1"></el-option>
                        <el-option label="天使轮" :value="2"></el-option>
                        <el-option label="A轮" :value="3"></el-option>
                        <el-option label="B轮" :value="4"></el-option>
                        <el-option label="C轮" :value="5"></el-option>
                        <el-option label="D轮及以上" :value="6"></el-option>
                        <el-option label="上市公司" :value="7"></el-option>
                        <el-option label="不需要融资" :value="8"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规模">
                    <el-select class="select" v-model="form.number" placeholder="请选择">
                        <el-option label="少于15人" :value="1"></el-option>
                        <el-option label="15-50人" :value="2"></el-option>
                        <el-option label="50-150人" :value="3"></el-option>
                        <el-option label="150-500人" :value="4"></el-option>
                        <el-option label="500-2000人" :value="5"></el-option>
                        <el-option label="2000人以上" :value="6"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="save-btn" @click="onSave">保存</div>
        </div>
    </div>
</template>

<script>
import { addCompanyInfo, getCompanyInfo } from '../api/api'
export default {
    name: 'Company',
    data () {
        return {
            form: {
                name: '',
                number: '',
                type: ''
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
        async onSave () {
            const postData = {
                ...this.form,
                userId: this.userInfo.u_id
            }
            console.log(postData)
            const res = await addCompanyInfo(postData)
            if (res.success) {
                this.$message.success('保存成功！')
            }
        },
        async initData () {
            const postData = {
                id: this.userInfo.u_id
            }
            const res = await getCompanyInfo(postData)
            if (res.success && res.data) {
                this.form = res.data
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content {
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 10px 10px 10px;
    .form {
        width: 600px;
        .select {
            width: 100%;
        }
    }
    .save-btn {
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #3370ff;
        color: #fff;
        overflow: hidden;
        border-radius: 23px;
        position: relative;
        cursor: pointer;
        margin-top: 40px;
        margin-bottom: 30px;
        font-size: 14px;
        margin-left: 180px;
        &:hover {
            opacity: .6;
        }
    }
}
</style>

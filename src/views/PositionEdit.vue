<template>
    <div>
        <div class="page-title" v-if="id !== ''">编辑职位</div>
        <div class="page-title" v-else>新增职位</div>
        <div class="content">
            <el-form class="form" :model="form" label-width="180px">
                <el-form-item label="职位名称">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="标签">
                    <el-tag
                        :key="tag"
                        v-for="tag in form.tags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                    ></el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput" icon="el-icon-edit"></el-button>
                </el-form-item>
                <el-form-item label="职位描述">
                    <el-input type="textarea" v-model="form.remark" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="职位要求">
                    <el-input type="textarea" v-model="form.demand" placeholder="请输入"></el-input>
                </el-form-item>
            </el-form>
            <div class="save-btn" @click="onSave">保存</div>
        </div>
    </div>
</template>

<script>
import { addPosition, getPositionInfo } from '../api/api'
export default {
    name: 'PositionEdit',
    data () {
        return {
            form: {
                name: '',
                tags: [],
                remark: '',
                demand: ''
            },
            inputVisible: false,
            inputValue: '',
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
            }
        },
        async onSave () {
            const postData = {
                ...this.form,
                userId: this.userInfo.u_id
            }
            if (this.id !== '') {
                postData.id = this.id
            }
            const res = await addPosition(postData)
            if (res.success) {
                this.$message.success(res.data)
                this.$router.back()
            }
        },
        handleClose (tag) {
            this.form.tags.splice(this.form.tags.indexOf(tag), 1)
        },

        showInput () {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus()
            })
        },

        handleInputConfirm () {
            const inputValue = this.inputValue
            if (inputValue) {
                this.form.tags.push(inputValue)
            }
            this.inputVisible = false
            this.inputValue = ''
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 30px 10px 10px 10px;
    background-color: #fff;
    border-radius: 6px;
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
.el-tag + .el-tag {
    margin-left: 5px;
}
.button-new-tag {
    // margin-left: 5px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    // margin-left: 5px;
    vertical-align: bottom;
}
</style>

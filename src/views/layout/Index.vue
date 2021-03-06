<template>
    <el-container>
        <el-header class="header">
            <el-row type="flex" class="header-cont" justify="space-between" align="middle">
                <el-col :span="4">易招聘</el-col>
                <el-col class="header-cont-right" :span="20">
                    <!-- 1 普通用户 -->
                    <template v-if="userInfo.u_id !== undefined && userInfo.u_type === '1'">
                        <span class="btn" @click="link('/position')">全部职位</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="btn" @click="link('/resume')">我的简历</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="btn" @click="link('/posted')">已投递</span>
                        <el-divider direction="vertical"></el-divider>
                    </template>
                    <!-- 2 企业用户 -->
                    <template v-if="userInfo.u_id !== undefined && userInfo.u_type === '2'">
                        <span class="btn" @click="link('/companyPosition')">职位</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="btn" @click="link('/company')">企业信息</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="btn" @click="link('/resumeList')">已收简历</span>
                        <el-divider direction="vertical"></el-divider>
                    </template>
                    <span v-if="userInfo.u_id === undefined" class="login" @click="onLogin">登录/注册</span>
                    <div v-else class="user">
                        <el-avatar class="user-logo" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <el-dropdown trigger="click" @command="onHandleCommand">
                            <span class="el-dropdown-link btn">
                                {{ userInfo.u_name || '用户名'}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command='center' icon="el-icon-user">个人中心</el-dropdown-item>
                                <el-dropdown-item command='exit' icon="el-icon-switch-button">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="app-main">
            <div class="app-container">
                <router-view />
            </div>
        </el-main>
        <el-dialog
            title="登录/注册"
            :visible.sync="dialogVisible"
            width="600px">
            <div class="login-form" v-loading="loginLoading">
                <el-form :model="form" label-width="80px">
                    <el-form-item label="手机号">
                        <el-input v-model="form.phone" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" v-if="isRegister">
                        <el-input v-model="form.name" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" v-if="isRegister">
                        <el-radio-group v-model="form.type">
                            <el-radio label="1">普通用户</el-radio>
                            <el-radio label="2">企业用户</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <el-button v-if="!isRegister" class="login-btn" type="text" @click="onRegister">去注册</el-button>
                <el-button v-if="isRegister" class="login-btn" type="text" @click="onGoLogin">去登录</el-button>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
import { addUser, userLogin } from '../../api/system'
export default {
    name: 'Home',
    components: { },
    data () {
        return {
            routerViewShow: true,
            pageVisible: true,
            dialogVisible: false,
            isRegister: false,
            loginLoading: false,
            form: {
                phone: '',
                password: '',
                name: '',
                type: '1'
            }
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.app.user
        }
    },
    async created () {
        console.log(this.userInfo)
    },
    methods: {
        async onConfirm () {
            if (this.form.phone === '') {
                this.$message.error('请输入手机号')
                return
            }
            if (this.form.password === '') {
                this.$message.error('请输入密码')
                return
            }
            if (this.isRegister) {
                if (this.form.name === '') {
                    this.$message.error('请输入昵称')
                    return
                }
                const postData = {
                    ...this.form
                }
                const res = await addUser(postData)
                if (res.success) {
                    this.$message.success('添加成功！')
                    this.loginLoading = true
                    setTimeout(() => {
                        this.loginLoading = false
                    }, 1000)
                    this.isRegister = false
                }
            } else {
                const postData = {
                    phone: this.form.phone,
                    password: this.form.password
                }
                const res = await userLogin(postData)
                if (res.success) {
                    this.$message.success('登陆成功！')
                    const data = res.data || {}
                    this.$store.dispatch('app/setUser', data)
                    this.dialogVisible = false
                    if (data.u_type === '1') {
                        this.$router.push('/position')
                    } else {
                        this.$router.push('/companyPosition')
                    }
                }
            }
        },
        link (path) {
            this.$router.push(path)
        },
        onHandleCommand (e) {
            console.log(e)
            if (e === 'exit') {
                this.$store.dispatch('app/clear', 'ALL')
                this.$router.push('/')
            }
        },
        onLogin () {
            this.dialogVisible = true
        },
        onRegister () {
            this.loginLoading = true
            setTimeout(() => {
                this.loginLoading = false
            }, 1000)
            this.isRegister = true
        },
        onGoLogin () {
            this.loginLoading = true
            setTimeout(() => {
                this.loginLoading = false
            }, 1000)
            this.isRegister = false
        }
    }
}
</script>

<style scoped lang="less">
.header {
    background-color: rgb(84, 92, 100);
    min-width: 1200px;
    &-cont {
        height: 60px;
        color: #fff;
    }
    &-cont-right {
        text-align: right;
        line-height: 30px;
        font-size: 14px;
        .btn {
            cursor: pointer;
        }
        .login {
            cursor: pointer;
        }
    }
    .el-dropdown-link {
        color: #fff;
    }
    .user {
        display: flex;
        align-items: center;
        float: right;
        &-logo {
            height: 30px;
            width: 30px;
            margin-left: 2px;
            margin-right: 5px;
        }
    }
}
.app-main {
    background-color: #EFEFEF;
    padding: 20px 200px;
    min-width: 1200px;
}
.app-container {
    // background-color: darkblue;
}
.login-form {
    padding-right: 60px;
}
.login-btn {
    margin-left: 80px;
}
</style>

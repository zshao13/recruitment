<template>
    <div class="position-item">
        <h3 class="title">张书豪</h3>
        <div class="subtitle">
            <span>17729323343</span>
            <el-divider direction="vertical"></el-divider>
            <span>郑州商学院</span>
            <el-divider direction="vertical"></el-divider>
            <span>666的</span>
        </div>
        <p class="desc">1、代表基础架构团队，与多业务团队沟通，全流程负责基础架构项目的顺利实施与交付；
            2、对基础架构的主要项目整体进度负责，全程参与并领导项目的规划、依赖识别、实施进度追踪、交付等活动；在多项目并行条件下，管理基础架构团队内项目优先级以及团队中远期规划的产品列表；
            3、与业务团队紧密沟通，及时收集反馈业务团队痛点，并负责管理业务团队预期；
            4、负责与基础架构团队各方向负责人协作，完善内部项目管理流程。
        </p>
    </div>
</template>

<script>

export default {
    name: 'ResumeItem',
    data () {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.position-item {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    &:hover {
        border-radius: 3px;
        background: #fff;
        box-shadow: 0 10px 30px 0 rgba(136, 150, 171, 0.15);
    }
    .title {
        margin: 12px 0;
    }
    .subtitle {
        color: #606266;
    }
    .desc {
        white-space: pre-line;
        font-size: 14px;
        color: #909399;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: clip;
    }
}
</style>

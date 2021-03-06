<template>
    <div>
        <div class="page-title">职位详情</div>
        <div class="detail">
            <h1>基础架构高级项目经理</h1>
            <div class="subtitle">
                <span>上海</span>
                <el-divider direction="vertical"></el-divider>
                <span>算法</span>
                <el-divider direction="vertical"></el-divider>
                <span>社招</span>
            </div>
            <div>
                <h2>职位描述</h2>
                <pre class="textContent">
                    1、计算机或相关专业背景；
                    2、5 年以上互联网企业工作经历，对技术有一定程度了解，能够参与到项目的深度讨论中；
                    3、有基础服务方向（包括但不限于数据库、缓存、容器云等）的团队或项目管理经验；
                    4、优秀的沟通能力，能够带领项目讨论，并引导参与方达成有效共识；
                    5、数据驱动的分析以及决策能力。
                </pre>
            </div>
            <div>
                <h2>职位要求</h2>
                <pre class="textContent">
                    1、代表基础架构团队，与多业务团队沟通，全流程负责基础架构项目的顺利实施与交付；
                    2、对基础架构的主要项目整体进度负责，全程参与并领导项目的规划、依赖识别、实施进度追踪、交付等活动；在多项目并行条件下，管理基础架构团队内项目优先级以及团队中远期规划的产品列表；
                    3、与业务团队紧密沟通，及时收集反馈业务团队痛点，并负责管理业务团队预期；
                    4、负责与基础架构团队各方向负责人协作，完善内部项目管理流程。
                </pre>
            </div>
            <div class="send-btn">投递</div>
            <div class="send-btn">编辑</div>
            <div class="send-btn">查看简历</div>
            <div class="send-btn">关闭职位</div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
// import {} from ''
export default {
    name: 'PositionDetail',
    data () {
        return {
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
</style>

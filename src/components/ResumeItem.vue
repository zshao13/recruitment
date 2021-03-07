<template>
    <div class="position-item" @click="onClick">
        <h3 class="title">{{itemInfo.base_info.name}}</h3>
        <div class="subtitle">
            <span>{{itemInfo.base_info.phone}}</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{itemInfo.edu_info.school}}</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{itemInfo.edu_info.education}}</span>
        </div>
        <p class="desc">
            {{itemInfo.work_info[0].remark}}
        </p>
    </div>
</template>

<script>

export default {
    name: 'ResumeItem',
    props: ['info'],
    data () {
        return {
        }
    },
    computed: {
        itemInfo () {
            const item = this.info
            item.base_info = JSON.parse(item.base_info)
            item.edu_info = JSON.parse(item.edu_info)
            item.work_info = JSON.parse(item.work_info)
            return item
        }
    },
    methods: {
        onClick () {
            this.$emit('action')
        }
    }
}
</script>

<style lang="less" scoped>
.position-item {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
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

<template>
    <div class="position-item" @click="onClick">
        <h3 class="title">{{itemInfo.p_name}}</h3>
        <div class="subtitle">
            <template v-for="(item, i) in itemInfo.p_tags">
                <span :key="i">{{item}}</span>
                <el-divider v-if="i < itemInfo.p_tags.length - 1" :key="i" direction="vertical"></el-divider>
            </template>
        </div>
        <p class="desc">{{itemInfo.p_remark}}</p>
    </div>
</template>

<script>

export default {
    name: 'PositionItem',
    props: ['info'],
    data () {
        return {
        }
    },
    computed: {
        itemInfo () {
            const item = this.info
            item.p_tags = JSON.parse(item.p_tags)
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
    padding: 10px 20px;
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

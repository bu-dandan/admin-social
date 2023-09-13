<template>
    <div>
        <div v-for="(item, index) in tree" :key="index">
            <!-- hidden=true且该路由又有子路由时 直接递归进入子路由 -->
            <div v-if="item.hidden && item.children">
                <SideItem :tree="item.children"></SideItem>
            </div>
            <div v-if="!item.hidden">
                <el-submenu :index="item.path" v-if="item.children">
                    <template slot="title">
                        <i :class="item.meta.icon || ''"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <SideItem :tree="item.children"></SideItem>
                </el-submenu>
                <el-menu-item :index="item.path" v-if="!item.children">
                    <i :class="item.meta.icon || ''"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </el-menu-item>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideItem",
    props: {
        tree: {
            type: Array,
        },
    },
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>
<style lang="scss" scoped>
::v-deep {

    .el-menu-item:hover,
    .el-submenu__title:hover {
        background-color: #f0f2f7 !important
    }

    .el-menu-item,
    .el-submenu__title {
        padding: 0 16px !important;
        line-height: 40px;
        margin: 4px 0;
        height: 40px;

        i {
            display: inline-block;
            width: 24px;
            font-size: 17px;
            font-weight: 700;
            color: #777;
            margin-right: 16px;
        }

        i:last-child {
            width: 12px;
            font-size: 12px;
            font-weight: 700;
            margin-right: 0px;
        }
    }

    .el-menu-item.is-active {
        font-weight: 500;
        color: #2f88ff;
        background-color: #f0f2f7 !important;

        i {
            color: #2f88ff;
        }
    }

}
</style>
  
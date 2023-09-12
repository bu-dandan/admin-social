<template>
    <div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#000"
            active-text-color="#2f88ff"
            router>
            <SideItem :tree="routes"> </SideItem>
        </el-menu>
    </div>
</template>
<script>
import SideItem from "./SideItem";

export default {
    name: "SideBar",
    components: {
        SideItem,
    },
    data() {
        return {
            routes: [], //路由表
        };
    },
    created() {
        this.getRoutes();
    },
    mounted() { },
    methods: {
        getRoutes() {
            // 获取所有路由表
            this.routes = this.$router.options.routes;
        },
    },
    computed: {},
};
</script>
<style lang="scss" scoped>
::v-deep .el-menu {
    border: none;

    .el-menu-item:hover,
    .el-submenu__title:hover {
        background-color: #f0f2f7 !important
    }

    .el-menu-item.is-active {
        font-weight: 500;
    }

    .el-submenu__title,
    .el-menu-item {
        line-height: 46px;
        height: 46px;
        color: #333;
    }
}
</style>
  
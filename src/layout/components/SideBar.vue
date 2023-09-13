<template>
    <div class="menu-bar">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#000"
            :unique-opened="true"
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
.el-menu-vertical-demo {
    height: 100%;
}

::v-deep .el-menu {
    border: none;
}

.menu-bar {
    height: calc(100% - 50px);
    overflow: auto;
    // padding: 10px 0;
}

::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>
  
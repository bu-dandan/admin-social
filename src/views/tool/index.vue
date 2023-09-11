<template>
    <div class="index-container">
        <div class="left-nav">
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="active"
                :default-openeds="navOpen">
                <el-menu-item index="1" @click="toPage('/tool/comment')">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">评论内容</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-s-promotion"></i>
                        <span>回复规则</span>
                    </template>
                    <el-menu-item index="2-1" @click="toPage('/tool/empty')">常用语</el-menu-item>
                    <el-menu-item index="2-2" @click="toPage('/tool/empty')">自动回复</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-s-release"></i>
                        <span>屏蔽规则</span>
                    </template>
                    <el-menu-item index="3-1" @click="toPage('/tool/empty')">屏蔽词</el-menu-item>
                    <el-menu-item index="3-2" @click="toPage('/tool/empty')">屏蔽用户</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="finance-content">
            <router-view />
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'index',
    data() {
        return {
            active: '1',
            navOpen: ['2', '3'],
        }
    },
    mounted() {
        if (this.$route) {
            let path = this.$route.path
            switch (path) {
                case "/tool/comment":
                    this.active = '1'
                    break;
                case "/tool/empty":
                    this.active = ''
                    break;
                default:
                    break;
            }
        }
    },
    methods: {
        toPage(path) {
            this.$router.push({ path: path });
        }
    }
}
</script>
  
<style lang="scss" scoped>
.index-container {
    display: flex;

    .left-nav {
        width: 170px;
        margin-right: 24px;

        ::v-deep .el-menu {
            background: none;
            border-right: none;

            .is-active .el-submenu__title,
            .is-active .el-submenu__title i,
            .el-menu-item:hover,
            .is-active {
                background: none;
                color: #1489ff;
            }

            .el-menu--inline .is-active {
                font-weight: 700;
            }

            .el-menu-item {
                // width: 160px;
                min-width: 160px;
                // padding: 0 0 0 49px !important;
            }
        }
    }

    .finance-content {
        flex: 1;
    }
}
</style>
  
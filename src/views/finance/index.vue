<template>
    <div class="index-container">
        <div class="left-nav">
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="active">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-finance"></i>
                        <span>资金管理</span>
                    </template>
                    <el-menu-item v-for="(item, index) in navList" :key="index" @click="toPage(item.path)"
                        :index="item.index">{{ item.name }}</el-menu-item>
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
            active: '1-1',
            navList: [
                { name: '资金钱包', index: '1-1', path: '/finance/wallet' },
                { name: '财务流水', index: '1-2', path: '/finance/account' },
                { name: '充值记录', index: '1-3', path: '/finance/recharge' },
                { name: '汇款码记录', index: '1-4', path: '/finance/swiftcode' },
                { name: '保证金缴纳记录', index: '1-5', path: '/finance/bond' },
            ]
        }
    },
    mounted() {
        if (this.$route) {
            let path = this.$route.path
            switch (path) {
                case "/finance/wallet":
                    this.active = '1-1'
                    break;
                case "/finance/account":
                    this.active = '1-2'
                    break;
                case "/finance/recharge":
                    this.active = '1-3'
                    break;
                case "/finance/swiftcode":
                    this.active = '1-4'
                    break;
                case "/finance/bond":
                    this.active = '1-5'
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

            .el-menu-item:hover,
            .is-active,
            .el-submenu__title,
            .el-icon-s-finance {
                background: none;
                color: #1489ff;
            }

            .el-menu--inline .is-active {
                font-weight: 700;
            }

            .el-menu-item {
                min-width: 160px;
            }
        }
    }

    .finance-content {
        flex: 1;
    }
}
</style>
  
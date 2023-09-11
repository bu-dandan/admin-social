<template>
  <div class="index-container">
    <div class="left-nav">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="active">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-finance"></i>
            <span>自定义报表</span>
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
        { name: '账户报表', index: '1-1', path: '/report/account' },
        { name: '项目报表', index: '1-2', path: '/report/empty' },
        { name: '广告报表', index: '1-3', path: '/report/empty' },
        { name: '基础素材报表', index: '1-4', path: '/report/empty' },
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

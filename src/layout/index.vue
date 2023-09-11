<template>
  <div class="app-wrapper">
    <div class="main-container">
      <div class="nav-area">
        <div style="display: flex;align-items: center;">
          <div class="logo-title">
            <img src="@/assets/favicon.png" alt="">
          </div>
          <div class="nav-menu">
            <div v-for="(item, index) in menu" :key="index"
              :class="route.indexOf(item.active) != '-1' ? 'active' : ''"
              @click=toPage(item.path)>{{ item.name }}
            </div>
          </div>
        </div>
        <div class="right-nav">
          <div class="icon-list">
            <span class="el-icon-s-order"></span>
            <span class="el-icon-message-solid"></span>
            <span class="el-icon-menu"></span>
            <span class="el-icon-s-opportunity"></span>
          </div>
          <el-dropdown>
            <span class="avatar">
              <div style="display: flex; align-items: center;">
                <img src="@/assets/avatar.png" class="user-avatar">
                <div v-if="userInfo" class="user-info">
                  {{ userInfo.advertiser_name }}
                  <div> {{ 'ID: ' + userInfo.advertiser_id }} </div>
                </div>
              </div>
              <span style="margin-left: 8px;" class="el-icon-caret-bottom"></span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, index) in userList" :key='index' v-if="userList && userInfo"
                @click.native="chooseUser(item)">
                <div :class="userInfo && item && (userInfo.advertiser_id == item.advertiser_id) ? 'is-active' : ''">
                  {{ item.advertiser_name }} <el-tag size="mini" type="info" style="margin-left: 4px;">{{
                    item.advertiser_role == '1' ? '广告主' : item.advertiser_role == '2'
                    ? '纵横组织账户' : item.advertiser_role == '3' ? '一级代理商' :
                      item.advertiser_role == '4' ? '二级代理商'
                        : item.advertiser_role == '6' ? '星图账号' : '' }}</el-tag>
                  <div style="color: #aaa;margin-top: -16px;">ID: {{ item.advertiser_id }} </div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="tool-btn">
            <img src="@/assets/logo/circle.png" alt="">
            <div></div>
            <img src="@/assets/logo/all.png" alt="">
          </div>
        </div>
      </div>
      <el-main class="main-app">
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'
import Cookies from 'js-cookie'


export default {
  name: 'Layout',
  components: {
  },

  data() {
    return {
      menu: [
        { name: '财务', path: '/finance/wallet', active: '/finance' },
        { name: '工具', path: '/tool/comment', active: '/tool' },
        { name: '资产', path: '/property', active: '/property' },
        { name: '报表', path: '/report/account', active: '/report' },
        { name: '素材', path: '/source', active: '/source' },
        { name: '品牌推广', path: '/brand', active: '/brand' },
        { name: '竞价推广', path: '/bidding', active: '/bidding' },
      ],
      userList: '',
      userInfo: '',
    }
  },
  computed: {

    route() {
      return this.$route.path
    }
  },
  mounted() {
    this.userList = this.$store.state.user.userList
    let userInfo = Cookies.get('userInfo')
    if (!userInfo) {
      Cookies.set('userInfo', 1)
    }
    this.userInfo = JSON.parse(Cookies.get('userInfo'))
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toPage(path) {
      this.$router.push({ path: path });
    },
    chooseUser(user) {
      Cookies.set('userInfo', user)
      console.log(Cookies.get('userInfo'));
      this.userInfo = JSON.parse(Cookies.get('userInfo'))
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
}

::v-deep .el-main {
  padding: 0 16px;
}

.nav-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  // border-bottom: 1px solid #dcdfe6;
  padding: 0 20px;
  width: 100%;
  overflow: hidden;

  .logo-title {
    display: flex;
    align-items: center;
    margin-right: 24px;

    img {
      width: 42px;
      height: 42px;
    }
  }

  .nav-menu {
    display: flex;
    margin-right: 24px;
    color: #333;
    font-size: 14px;

    div {
      padding: 12px 0;
      margin: 0 12px;
      white-space: nowrap;
      cursor: pointer;
    }

    div:hover {
      color: #2f88ff;
      font-weight: 700;
    }

    .active {
      color: #2f88ff;
      border-bottom: 1px solid #2f88ff;
      font-weight: 700;
    }
  }

}

.right-nav {
  display: flex;
  align-items: center;
  color: #949ca3;
  font-size: 18px;

  .icon-list {
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding-right: 12px;
    border-right: 1px solid #ddd;

    span {
      padding: 0 10px;
      cursor: pointer;
    }
  }

  .avatar {
    display: flex;
    align-items: center;

    .user-avatar {
      width: 28px;
      height: 28px;
      object-fit: cover;
      cursor: pointer;
    }

    .user-info {
      margin-left: 4px;
      font-size: 12px;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      div {
        color: #aaa;
        margin-top: 2px;
      }
    }
  }


  .tool-btn {
    display: flex;
    align-items: center;
    padding: 8px;
    box-shadow: inset 0 0 4px rgba(108, 112, 124, 0.15);
    // box-shadow:;
    margin-left: 20px;

    div {
      height: 16px;
      width: 1px;
      background-color: #ddd;
      margin: 0 8px;
    }

    img {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
}


.is-active {
  color: #2f88ff;
}

// .main-app {
//   background-color: #fff;
//   border-radius: 10px;
//   margin: 0 14px;
//   min-height: calc(100vh - 78px);
// }
</style>

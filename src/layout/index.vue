<template>
  <div class="app-wrapper">
    <div class="left-nav">
      <div class="logo-title">
        <img src="@/assets/images/favicon.png" alt="">管理后台
      </div>
      <SideItem></SideItem>
    </div>
    <div class="top-nav">
      <div class="icon-list">
        <span class="el-icon-s-order"></span>
        <span class="el-icon-message-solid"></span>
        <span class="el-icon-menu"></span>
        <span class="el-icon-s-opportunity"></span>
      </div>
      <div class="tool-btn">
        <img src="@/assets/logo/circle.png" alt="">
        <div></div>
        <img src="@/assets/logo/all.png" alt="">
      </div>
    </div>
    <div class="main-container">
      <div class="main-app">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'
import Cookies from 'js-cookie'
import SideItem from "./components/SideBar";

export default {
  name: 'Layout',
  components: {
    SideItem
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
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1200px;
}

.left-nav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 2001;
  background-color: #fff;

  .logo-title {
    padding: 8px 20px;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 20px;

    img {
      width: 34px;
      height: 34px;
      object-fit: contain;
      margin-right: 10px;
    }
  }
}

.top-nav {
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #949ca3;
  font-size: 18px;
  height: 50px;
  background-color: #fff;
  z-index: 2000;
  width: 100%;
  min-width: 1000px;
  position: sticky;
  right: 0;
  top: 0;
  box-shadow: 0px 2px 6px rgba(160, 163, 164, 0.1);

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

.main-container {
  background-color: #f6f7fa;
  width: 100%;
  padding-left: 200px;
  min-height: calc(100% - 50px);

  .main-app {
    padding: 14px;
  }
}
</style>

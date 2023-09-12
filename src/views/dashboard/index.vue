<template>
  <div class="container">

  </div>
</template>

<script>
import xiangmu from './components/xiangmu.vue'
import guanggao from './components/guanggao.vue'
import Cookies from 'js-cookie'


export default {
  name: 'index',
  components: { xiangmu, guanggao },
  data() {
    return {
      date: [],
    }
  },
  mounted() {
    this.getDateMinusDay()
    this.getTableData()
  },

  computed: {
    userInfo() {
      let userInfo = JSON.parse(Cookies.get('userInfo'))
      return userInfo
    },
    route() {
      return this.$route.path
    },

  },
  methods: {
    getTableData() {
    },

    getDateMinusDay() {
      let now = new Date();
      let day = 30
      let addTime = now.toISOString().split('T')[0]
      // this.date = [addTime, addTime]
      //可以加上错误处理
      let date = addTime.replace(/-/g, "/");
      var a = now;
      now = now.valueOf();
      now = now - day * 24 * 60 * 60 * 1000;
      now = new Date(now)
      var month = now.getMonth() + 1;
      if (month <= 9) {
        month = '0' + month;
      }
      let start = now.getFullYear() + '-' + month + '-' + (now.getDate() < 9 ? '0' + now.getDate() : now.getDate())
      this.date = [start, addTime]
    },
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  padding: 0 14px;
}

.data-box {
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 8px;
  background: #fff;
  padding: 0 4%;
  line-height: 46px;

  div {
    font-size: 12px;
    color: #666;
    margin-right: 24px;

    i {
      color: #999;
    }
  }
}

.title-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  padding: 0 4%;
  line-height: 56px;
  margin-top: 16px;
  font-weight: 700;

  div {
    display: flex;
    align-items: center;
  }

  i {
    font-size: 20px;
    color: #169eff;
    margin-right: 6px;
  }

  ::v-deep .el-range-editor--mini {
    width: 234px;
    background: #edf1f4;
    border: none;

    .el-range-input {
      background: #edf1f4;
    }
  }
}

.content-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  line-height: 56px;
  margin-top: 16px;
}

.tab {

  //菜单tab样式
  ::v-deep.el-tabs__header {
    margin-right: 0;

    .el-tabs__nav-wrap.is-left::after {
      display: none;
    }

    .el-tabs__item.is-active {
      background: #fff;
      border-radius: 4px 0 0 4px;
    }

    .el-tabs__item {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      color: #666;
      font-size: 12px;

      .tab-label i {
        color: #aaa;
      }
    }

    .is-active {
      color: #169eff;

      .tab-label i {
        color: #169eff;
      }
    }

    .el-tabs__active-bar {
      display: none;
    }

    .tab-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 14px;
      font-size: 13px;
      font-weight: 400;

      i {
        font-size: 20px;
        margin-bottom: -6px;
      }
    }
  }
}

.table {
  flex: 1;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  padding: 0 20px;


}
</style>

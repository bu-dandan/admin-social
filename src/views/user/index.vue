<template>
  <div class="container">
    <div class="tool-btn">
      <el-button type="primary">添加新用户</el-button>
      <el-button type="warning">编辑用户</el-button>
      <el-button type="danger">删除用户</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="用户名"
        prop="name"
        width="150">
      </el-table-column>
      <el-table-column
        prop="type"
        label="用户类型">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建日期"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'admin',
          type: '管理员',
          date: '2022-11-10'
        },
        {
          name: 'ceshi',
          type: '普通用户',
          date: '2022-11-10'
        },
        {
          name: 'qwer',
          type: '普通用户',
          date: '2022-11-11'
        },
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  padding: 16px 24px;
}

.tool-btn {
  margin-bottom: 20px;
}
</style>


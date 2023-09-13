
<template>
    <div class="table">
        <div>
            <el-button type="primary" style="padding:8px 18px;" @click="toPage('/empty')">
                <i class="el-icon-plus"></i> 新建项目
            </el-button>
        </div>
        <el-table :row-style="{ 'height': '44px', 'font-size': '12px', 'color': '#333' }"
            :header-cell-style="{
                'height': '56px', 'padding': '0', 'background': '#f3f4f5',
                'color': '#333', 'font-weight': '400', 'font-size': '12px'
            }"
            :data="tableData">
            <el-table-column
                fixed
                type="selection"
                width="34">
            </el-table-column>
            <el-table-column
                fixed
                width="60">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status" :width="30"></el-switch>
                </template>
            </el-table-column>
            <el-table-column
                prop="date" fixed
                label="广告名称"
                width="150">
                <template slot-scope="scope">
                    <div style="font-weight: 600;line-height: 16px">
                        {{ scope.row.ad_name ? scope.row.ad_name : '--' }} </div>
                    <div style="color: #999;line-height: 16px;font-size: 12px;"> ID: {{
                        scope.row.ad_id ? scope.row.ad_id : '--' }} </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="name" fixed
                label="操作"
                width="140">
                <template slot-scope="scope">
                    <span @click="" class="btn-text">详情</span>
                    <span @click="" class="btn-text">编辑</span>
                    <span @click="" class="btn-text">删除</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="项目预算">
            </el-table-column>
            <el-table-column
                prop="address"
                label="广告状态">
            </el-table-column>
            <el-table-column
                prop="address"
                label="广告预算">
            </el-table-column>
            <el-table-column
                prop="address"
                label="广告出价">
            </el-table-column>
            <el-table-column
                prop="address"
                label="项目名称">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="消耗">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="展示数">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="平均千次展现费用">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="点击数">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="点击率">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="转化数">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="转化率">
            </el-table-column>
            <el-table-column
                prop="address" sortable
                label="平均转化成本">
            </el-table-column>
        </el-table>
        <el-pagination
            style="float: right;"
            background
            @current-change="handleCurrentChange"
            :page="page"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
  
<script>
import { getAdvertiserList } from '@/api/table.js'
import Cookies from 'js-cookie'


export default {
    name: 'guanggao',
    props: { start: '', end: '' },
    data() {
        return {
            status: false,
            date: '',
            page: 1,
            pageSize: 10,
            total: 0,
            tableData: []
        }
    },
    computed: {
        userInfo() {
            let userInfo = JSON.parse(Cookies.get('userInfo'))
            return userInfo
        },
    },
    mounted() {
        this.$nextTick(() => {
            // this.getTableList()
        })
    },
    methods: {
        toPage(path) {
            this.$router.push({ path: path });
        },
        getTableList() {
            let that = this
            let param = {
                'page': that.page,
                'page_size': that.pageSize,
                // advertiser_id: this.userInfo.advertiser_id,
                'advertiser_id': '1763500147505229',
                'start_date': this.start,
                'end_date': this.end,
                // filtering: {
                //     status: 'AD_STATUS_ALL'
                // }
            }
            getAdvertiserList(param).then(res => {
                that.total = res.data.page_info.total_number
                that.tableData = res.data.list
            })
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    }
}
</script>
  
<style lang="scss" scoped>
.table {
    flex: 1;
    border-radius: 0 8px 8px 8px;
    background: #fff;
    overflow: hidden;

    ::v-deep.el-table .el-table__body {
        td {
            padding: 10px 0;
        }

        .cell {
            padding: 0 8px;
        }
    }

    ::v-deep.caret-wrapper {
        height: 30px;

        .sort-caret {
            border-width: 4px;
        }
    }

    ::v-deep.descending .sort-caret.descending {
        border-top-color: #555;
    }

    ::v-deep.ascending .sort-caret.ascending {
        border-bottom-color: #555;
    }

    ::v-deep.el-switch__core {
        height: 16px;
        border: 1px solid #DCDFE6;
    }

    ::v-deep.el-switch__core:after {
        width: 12px;
        height: 12px;
    }

    ::v-deep.el-switch.is-checked .el-switch__core {
        border-color: #555;
        background-color: #555
    }

    ::v-deep.el-switch.is-checked .el-switch__core::after {
        margin-left: -13px;
    }

    ::v-deep.el-table th>.cell {
        align-items: center;
        display: flex;
    }
}

.btn-text {
    font-size: 12px;
    margin-right: 10px;
    cursor: pointer;
}

.btn-text:hover {
    color: #444;
}
</style>
  
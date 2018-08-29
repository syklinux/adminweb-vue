<template>
  <div class="workorder">
    <div>
      <!--搜索-->
      <el-col :span="8">
        <el-input placeholder="搜索" v-model="params.search" @keyup.enter.native="searchClick">
          <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
        </el-input>
      </el-col>
    </div>

    <!--表格-->
    <order-list :value="workorders" @edit="handleEdit" @delete="handleDelete"></order-list>

    <!--模态窗-->
    <el-dialog
      title="工单处理"
      :visible.sync="dialogVisibleForEdit"
      width="50%">
      <order-form
        ref="workorderForm"
        :form="currentValue"
        @submit="handleSubmitEdit"
        @cancel="handleCancelEdit">
      </order-form>
    </el-dialog>

    <!--分页-->
    <center>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :page-size="pagesize"
      :total="totalNum"
      @current-change="handleCurrentChange">
    </el-pagination>
    </center>
  </div>
</template>

<script>
import { getWorkOrderList, createWorkOrder, updateWorkOrder, deleteWorkOrder } from '@/api/workorder'
import OrderList from './table'
import OrderForm from './form'

export default {
  name: 'workorder',
  components: {
    OrderList,
    OrderForm
  },

  data() {
    return {
      dialogVisibleForEdit: false,
      currentValue: {},
      workorders: [],
      totalNum: 0,
      pagesize: 10,
      params: {
        page: 1,
        search: '',
        status: 1
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      getWorkOrderList(this.params).then(
        res => {
          this.workorders = res.results
          this.totalNum = res.count
        })
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.fetchData()
    },
    searchClick() {
      this.fetchData()
    },

    /*  处理工单，弹出模态窗、提交数据、取消 */
    handleEdit(value) {
      this.currentValue = { ...value }
      this.dialogVisibleForEdit = true
      const data = {'status':1}
      const id = this.currentValue.id
      updateWorkOrder(id,data).then(res => {
        this.$message({
          message: '接受工单',
          type: 'success'
        })
        this.fetchData()
      })
    },

    handleSubmitEdit(value) {
      const { id, ...params } = value  // 很神奇，能把表单的值拆解成自己想要的样子
      const data = {'status':2, 'result_desc':params.result_desc}
      updateWorkOrder(id,data).then(res => {
        this.$message({
          message: '更新成功',
          type: 'success'
        })
        this.handleCancelEdit()
        this.fetchData()
      })
    },
    handleCancelEdit() {
      this.dialogVisibleForEdit = false
      this.$refs.workorderForm.$refs.form.resetFields()
    },

    /* 取消 */
    handleDelete(id) {
      const data = {'status':3}
      updateWorkOrder(id,data).then(res => {
        this.$message({
          message: '取消成功',
          type: 'success'
        })
        this.params.page = 1,
        this.fetchData()
     },
     err => {
       console.log(err.message)
     })
    }

  }

}
</script>

<style lang='scss' scoped>
.workorder {
  padding: 10px;
}
</style>


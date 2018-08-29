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
    <order-list :value="workorders"></order-list>

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
import { getWorkOrderList } from '@/api/workorder'
import OrderList from './table'

export default {
  name: 'workorder',
  components: {
    OrderList,
  },

  data() {
    return {
      workorders: [],
      totalNum: 0,
      pagesize: 10,
      params: {
        page: 1,
        search: '',
        status: 2
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

  }

}
</script>

<style lang='scss' scoped>
.workorder {
  padding: 10px;
}
</style>


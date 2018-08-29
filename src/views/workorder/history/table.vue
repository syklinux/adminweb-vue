<template>
  <div class="workorder-list">
  <el-table
    :data="value"
    border
    stripe
    style="width: 100%">

    <el-table-column type="expand">
      <template slot-scope="props">
            <span>工单详情：{{ props.row.order_contents }}</span> </br></br>
            <span>处理结果：{{ props.row.result_desc }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="工单类型"
      prop="type.name">
    </el-table-column>

    <el-table-column
      label="工单标题"
      prop="title">
    </el-table-column>

    <el-table-column
      label="申请人"
      prop="applicant[0].name">
    </el-table-column>

    <el-table-column
      label="指派人"
      prop="assign_to[0].name">
    </el-table-column>

    <el-table-column
      label="处理人"
      prop="final_processor[0].name">
    </el-table-column>

    <el-table-column
      label="状态"
      prop="status.name">
    </el-table-column>

    <el-table-column
      label="申请时间"
      prop="apply_time">
    </el-table-column>

    <el-table-column
      label="完成时间"
      prop="complete_time">
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
export default {
  name: 'order-list',
  props: ['value'],
}
</script>

<style lang='scss'>
.workorder-list {}
</style>


<template>
  <div class="workorder-form">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">

      <el-form-item label="工单标题" prop="title">
        <el-input v-model="form.title" readonly></el-input>
      </el-form-item>

      <el-form-item label="工单内容" prop="order_contents">
        <el-input v-model="form.order_contents" type="textarea" :rows="8" readonly></el-input>
      </el-form-item>

      <el-form-item label="处理结果" prop="result_desc">
        <el-input v-model="form.result_desc"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="btn-wrapper">
          <el-button size="small" @click="cancel">取消</el-button>
          <el-button size="small" type="primary" @click="submitForm">保存</el-button>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  name: 'order-form',
  props: {
    form: {  // 接受父组件传递过来的值渲染表单
      type: Object,
      default() {
        return {
          title: '',
          order_contents: '',
          result_desc: '',
        }
      }
    }
  },

  data() {
    return {
      rules: {
        result_desc: [
          { required: true, message: '请输入处理结果', trigger: 'blur' }
        ],
      }
    }
  },

  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        this.$emit('submit', this.form)
      })
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang='scss' scoped>
.workorder-form {
  position: relative;
  display: block;
  .btn-wrapper{
    text-align: right;
  }
}
</style>


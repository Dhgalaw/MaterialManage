<template>
  <div style="margin-top: 20px">
    <h2>填写注册信息</h2>
    <a-form :form="form" >
      <a-form-item v-bind="formItemLayout" label="姓名">
        <a-input v-model="Name"  />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码">
        <a-input-password v-model="pwd"  />
      </a-form-item>
    </a-form>
    <div >
      <a-button @click="cancel" >取消</a-button>&nbsp;&nbsp;
      <a-button type="primary" @click="save">注册</a-button>
    </div>
  </div>

</template>

<script>
  import {register} from "../network/registerUser";
  import {selectIt} from "../network/select";

  export default {
    name: "RegisterTable",
    data() {
      return {
        Name: '',
        pwd: '',
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 9 },
          },
        },
      }
    },
    methods: {
      cancel() {
        this.Name = ''
        this.pwd = ''
      },
      save() {
        selectIt().then(res => {
          console.log(res);
        })
        register(this.Name, this.pwd).then(res => {
          if (res.data.code === 200) {
            this.$message.success("注册成功");
            this.cancel();
          }
          else {
            this.$message.success("注册失败")
            this.cancel()
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
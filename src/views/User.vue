<template>
  <div id="user">
    <h2>{{studentName}}的个人信息</h2>
    <a-form :form="form" >
      <a-form-item v-bind="formItemLayout" label="姓名">
        <a-input v-model="studentName" :disabled="inputDisabled" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="性别">
        <a-input v-model="studentSex" :disabled="inputDisabled" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="手机号">
        <a-input v-model="studentPhone" :disabled="inputDisabled" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="邮箱">
        <a-input v-model="studentEmail" :disabled="inputDisabled" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="年级">
        <a-input v-model="grade" :disabled="inputDisabled" />
      </a-form-item>
    </a-form>


    <div v-if="inputDisabled">
      <a-button @click="changeInfm" :disabled="disabled">修改信息</a-button>
    </div>
    <div v-else>
      <a-button @click="cancel" >取消</a-button>&nbsp;&nbsp;
      <a-button type="primary" @click="save">保存</a-button>
    </div>



  </div>
</template>

<script>




  export default {
    name: "User",
    data() {
      return {
        disabled: true,
        studentId: '',
        studentName: '',
        studentSex: '',
        studentSexUpdate: '',
        studentPhone: '',
        studentEmail: '',
        grade: '',
        room: '',
        inputDisabled: true,
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 10 },
          },
        },
      }
    },
    created() {
      if(sessionStorage.getItem("token")) {
        this.getStudentInfm()
      }
    },
    methods: {
      getStudentInfm() {
        this.studentId = sessionStorage.getItem("studentId")
        this.studentName = sessionStorage.getItem("userName")
        this.studentSex = sessionStorage.getItem("studentSex")
        this.studentPhone = sessionStorage.getItem("studentPhone")
        this.studentEmail = sessionStorage.getItem("studentEmail")
        this.grade = sessionStorage.getItem("grade")
        this.room = sessionStorage.getItem("room")
      },
      setSessionInfm() {
        sessionStorage.setItem("userName",this.studentName)
        sessionStorage.setItem("studentSex",this.studentSex)
        sessionStorage.setItem("studentName",this.studentName)
        sessionStorage.setItem("studentPhone",this.studentPhone)
        sessionStorage.setItem("studentEmail",this.studentEmail)
        sessionStorage.setItem("grade",this.grade)
        sessionStorage.setItem("room",this.room)
      },
      changeInfm() {
        this.inputDisabled = false
      },
      cancel() {
        this.getStudentInfm()
        this.inputDisabled = true
      },
      save() {

        switch (this.studentSex) {
          case "男":
            this.studentSexUpdate = '0';
            break;
          case "女":
            this.studentSexUpdate = '1';
            break;
        }

      }
    }


  }
</script>

<style scoped>
  #user {
    margin: 20px;
  }
  #user h2 {
    text-align: center;
  }

</style>
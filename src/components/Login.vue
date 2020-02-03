<template>
  <div id="biglogin">
    <div class="components-input-demo-presuffix">

      <a-input class="inputbox" placeholder="请输入用户名"
               v-model="userName" ref="userNameInput" size="small" >
        <a-icon slot="prefix" type="user" />
      </a-input>

      <a-input-password class="inputbox" placeholder="请输入密码"
               v-model="userPassword" ref="userPasswordInput" size="small" >
        <a-icon slot="prefix" type="lock" />
      </a-input-password>

      <a-button @click="handleSubmit" size="small">登录</a-button>
<!--      <a-button size="small">登录</a-button>-->

    </div>
  </div>
</template>

<script>
  import {login} from "../network/login";

  export default {
    name: "Login",
    data() {
      return {
        userName: '',
        userPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        login(this.userName,this.userPassword).then(res => {
          console.log(res);
          //登录成功
          if (res.data.code === 200) {
            this.$store.commit('setToken', res.data.data)
            sessionStorage.setItem("token", this.$store.state.token)
            sessionStorage.setItem("userName",this.userName)

            this.$router.push('/home')
            location.reload()   //reload会清除store中的token?

          } else {
            this.$message.error(res.data.message);
          }

        }).catch(err => {
          console.log(err);
          this.$message.error("登录失败")
        })
      }

    }
  }
</script>

<style scoped>
  #biglogin {
    margin: 0;
    padding: 0;
    height: 60px;
    width: 430px;
  }

  .inputbox {
    width: 160px;
    margin-right: 15px;

  }
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
</style>
<template>
  <div>
<!--    <h2>诗婕你好</h2>-->
    <a-layout id="layout">
      <a-layout-header class="header">
        <div class="logo">
          <h2 style="color: white">宿舍管理中心</h2>
<!--          <img style="height:100%" src="../assets/CAE504.png" />-->
        </div>
        <a-menu theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['1']"
                class="menu"
        >
          <a-menu-item v-show="isShow" key="1" class="menuitem" style="background-color: #175CB4">
            <router-link to="/home">首页</router-link>
          </a-menu-item>
          <a-menu-item v-show="isShow" key="2" class="menuitem" style="background-color: #175CB4">
            <router-link to="/manage">物资管理</router-link>
          </a-menu-item>
          <a-menu-item v-show="isShow" key="3" class="menuitem" style="background-color: #175CB4">
            <router-link to="/selectItem">储备信息</router-link>
          </a-menu-item>
        </a-menu>
<!--    如果登录显示用户和头像-->
        <div v-if="isLogin" id="isLogin">
          <login-in></login-in>
        </div>
<!--    如果未登录显示登录框-->
        <div v-else id="login">
          <Login></Login>
          <register-user></register-user>
        </div>
      </a-layout-header>

    </a-layout>
  </div>

</template>

<script>
  import Login from "./Login";
  import LoginIn from "./LoginIn";
  import RegisterUser from "./RegisterUser";

  export default {
    name: "Layout",
    components: {
      Login,
      LoginIn,
      RegisterUser
    },
    data() {
      return {
        isLogin: false,
        isShow: false
      }
    },
    created() {
      if(sessionStorage.getItem("token")) {
        this.isLogin = true;
        this.isShow = true;
        const token = sessionStorage.getItem("token")
        this.$store.commit('setToken', token)  //reload()清除了store中的token，所以重新赋值
      }
    },
    methods: {
      test() {
        console.log("你好");
      }

    }
  }
</script>

<style scoped>
  #layout {
    height: 60px;
  }

  #layout .header {
    height: 60px;
    background-color: #175CB4;
    padding-left: 30px;
    padding-right: 30px;
  }
  #layout .logo {
    width: 240px;
    height: 100%;
    margin: 0;
    float: left;
    font-size: 23px;
  }
  #layout .menu {
    float: left;
    margin: 0 10px;
    font-size: 14px;
    height: 100%;
  }
  #layout .menuitem {
    margin:0 0px;
    height:100%;
    padding-top:8px;
    /*background-color: blue;*/
  }


  #login {
    float: right;
    margin: 0;
    padding: 0;
    display: flex;
  }
  #isLogin {
    float: right;
    margin: 0;
    height: 100%;
  }

</style>
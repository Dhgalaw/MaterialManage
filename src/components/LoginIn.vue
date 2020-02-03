<template>
  <div id="loginin">
    <span style="color: white;margin-right: 10px">你好，{{userName}}&nbsp;</span>
    <a-dropdown>
      <div id="headPortrait">
        <a-avatar  size="large">
          <img src="../assets/hasky.jpg" alt="">
        </a-avatar>

<!--        <a-avatar v-if="type === '系统管理员'" size="large" src="../assets/hasky.jpg" />-->
<!--        <a-avatar v-else-if="studentSex ==='男'" size="large" src="../assets/xia.jepg" />-->
<!--        <a-avatar v-else size="large" src="../assets/hasky.jpg" />-->
      </div>
      <a-menu slot="overlay">
        <a-menu-item >
          <router-link to="/user">
            <a-icon type="setting" /><span>&nbsp;&nbsp;修改资料</span>
          </router-link>
        </a-menu-item>
<!--        <a-menu-item>-->
<!--          <router-link to="#">-->
<!--            <a-icon type="download" /><span>&nbsp;&nbsp;去恰饭</span>-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
        <a-menu-item @click="logOut">
          <router-link to="/home" >
            <a-icon type="logout" /><span>&nbsp;&nbsp;退出登录</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
  export default {
    name: "LoginIn",
    data() {
      return {
        userName: '',
        type: '',
        studentSex: ''
      }
    },
    created() {
      if(sessionStorage.getItem("token")) {
        this.userName = sessionStorage.getItem("userName")
      }
    },
    methods: {

      logOut() {
        console.log("退出登");
        this.$store.commit("setToken","")
        sessionStorage.clear();
        location.reload()
      }
    }


  }
</script>

<style scoped>
  #headPortrait {
    float: right;
  }
  img {
    width: 240%;
    position: relative;
    left: -15px;
  }
</style>
<template>
  <div id="background">
    <div id="app">
      <Layout></Layout>

      <router-view/>

    </div>
  </div>
</template>


<script>
import Layout from './components/layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 1000px;
  margin: 0 auto;
  background-color: white;


}

#background {
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579104641316&di=5d0632fb62519cf98bc0d32bd20c1360&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170926%2F20170926000027_d41d8cd98f00b204e9800998ecf8427e_5.jpeg"); //

  background-size: 100% 100%;
  height: 100%;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

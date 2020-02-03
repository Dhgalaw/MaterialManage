<template>
  <div id="home">
    <Carousel/>
  </div>
</template>

<script>
  import Carousel from "./childcomps/Carousel"

  export default {
    name: "Home",
    components: {
      Carousel
    },
    methods: {

    }
  }
</script>

<style scoped>
  #home {
    margin:10px;
  }

  .welcome {
    margin-left: 30px;
    text-align: left;
    /*font-family: Arial;*/
  }


</style>
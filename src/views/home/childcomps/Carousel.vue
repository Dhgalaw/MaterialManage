<template>
  <div id="carousel">
    <a-carousel autoplay>
      <div><img src="../../../assets/1.png" class="img"></div>
      <div><img src="../../../assets/2.jpg" class="img"></div>
      <div><img src="../../../assets/4.png" class="img"></div>
      <div><img src="../../../assets/3.jpg" class="img"></div>
    </a-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel"
  }
</script>

<style scoped>
  #carousel {
    margin: 15px;
  }
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 280px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }

  .img {
    margin: auto 0 ;
    width: 100%;
    height: 280px;
  }

</style>
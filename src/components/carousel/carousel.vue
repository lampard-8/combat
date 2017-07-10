<template>
    <div class="carousel">
      <el-carousel height="420px" class="rotate">
        <el-carousel-item>
          <img src="./banner1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./banner2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./banner3.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="banner-nav">
        <ul>
          <li><a href="#">家庭保洁<img src="./right.png" alt=""></a></li>
          <li><a href="#">上门按摩<img src="./right.png" alt=""></a></li>
          <li><a href="#">上门维修<img src="./right.png" alt=""></a></li>
          <li><a href="#">家电清洗<img src="./right.png" alt=""></a></li>
          <li><a href="#">衣物洗护<img src="./right.png" alt=""></a></li>
          <li><a href="#">搬家速运<img src="./right.png" alt=""></a></li>
          <li><a href="#">美容美妆<img src="./right.png" alt=""></a></li>
          <li><a href="#">鲜花绿植<img src="./right.png" alt=""></a></li>
          <li><a href="#">上门医护<img src="./right.png" alt=""></a></li>
          <li><a href="#">养车用车<img src="./right.png" alt=""></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
img{
  vertical-align: middle;
}
  .carousel{

  }
  .rotate{
    position: relative;
  }
.rotate img{
  position: absolute;
  left: -300px;
  top: 0;
}
.banner-nav{
  width: 200px;
  position: relative;
  bottom: 422px;
  margin: 0 auto;
  z-index: 998;
}
.banner-nav ul{
  height: 420px;
  width: 180px;
  position: absolute;
  left: -470px;
  background: #757881;
  margin-top: 2px;
}
.banner-nav ul li {
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    position: relative;
    font-weight: bold;
    cursor: pointer;
    padding-left: 45px;
  }
.banner-nav ul li a {
    display: inline-block;
    width: 70px;
    text-align: justify;
    text-align-last: justify;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

  }
.banner-nav ul li img {
  position: absolute;
  right: 35px;
  top: 15px;
}
</style>

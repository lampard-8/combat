<template>
    <div class="footer">
      <div class="guarantee">
      <h2>到位<span>服务</span>保障</h2>
      <p>到位平台担保交易安全，交易未成功100%退款</p>
    </div>
      <div class="features">
        <ul>
          <li>
            <img src="./quan.png" alt="">
            <br>
            服务多
          </li>

          <li>
            <img src="./quan.png" alt="">
            <br>
            服务多
          </li>
          <li>
            <img src="./quan.png" alt="">
            <br>
            服务多
          </li>
        </ul>
      </div>
      <footer class="footer-bottom">
        <dl>
          <dt>热门城市</dt>
          <dd>
            <a href="#">北京</a><a href="#">上海</a><a href="#">广州</a><a href="#">深圳</a><a href="#">成都</a><a href="#">天津</a><a href="#">南京</a><a href="#">杭州</a><a href="#">重庆</a><a href="#">苏州</a><a href="#">武汉</a><a href="#">长沙</a><a href="#">济南</a><a href="#">郑州</a><a href="#">西安</a><a href="#">沈阳</a><a href="#">福州</a><a href="#">厦门</a><a href="#">南昌</a><a href="#">合肥</a><a href="#">宁波</a><a href="#">无锡</a><a href="#">青岛</a><a href="#">大连</a><a href="#">东莞</a><a href="#">佛山</a><a href="#">石家庄</a><a href="#">哈尔滨</a><a href="#">太原</a><a href="#">昆明</a><a href="#">贵阳</a><a href="#">南宁</a><a href="#">温州</a>
          </dd>
        </dl>
      </footer>
      <div class="beian">
        <p>©2015 版权所有  到位 daoway.com 京ICP备15001471号-1</p>
        <p>北京邻家科技有限公司</p>
      </div>
    </div>

</template>

<script>
    export default {}
</script>

<style scoped>
img {
  vertical-align: middle;
}
.guarantee{
  text-align: center;
  width: 100%;
  padding-top: 60px;
  background: #fff;
  clear: both;
}
.guarantee h2 {
  font-size: 28px;
  font-family: "微软雅黑";
  font-weight: 800;
}
.guarantee h2 span {
  color: #fb474f;
}
.guarantee p {
  font-size: 20px;
  color: #3d3838;
  margin-top:15px ;
}

.features {
  width: 100%;
  padding-top: 68px;
  background: #fff;
  height: 120px;
  font-family: "微软雅黑";
}
.features ul {
  width: 850px;
  margin: 0 auto;
}

.features ul li {
  width: 33%;
  float: left;
  text-align: center;
  color: #1d1515;
  font-size: 18px;
}
.features ul li img {
  margin-bottom: 10px;
}
.footer-bottom {
  width: 100%;
  clear: both;
  padding-top: 50px;
  height: 160px;
  background: #fff;
}
.footer-bottom dl {
  width: 1200px;
  margin: 0 auto;
}
.footer-bottom dl dt {
  float: left;
  margin-left: -50px;
  font-family: "微软雅黑";
}
.footer-bottom dl dd {
  margin-left: 40px;
  width: 1100px;
  line-height: 30px;
  float: left;
}
.footer-bottom dl dd a {
  font-size: 16px;
  color: #898989;
  display: inline-block;
  width: 9%;
  text-align: center;
  font-weight: 200;
  cursor: pointer;
  font-family: "微软雅黑";
}
.beian {
  width: 100%;
  height: 50px;
  text-align: center;
  padding-top: 30px;
}
.beian p {
  color: #898989;
}



</style>

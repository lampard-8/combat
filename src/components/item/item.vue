<template>
  <div>
    <com-header></com-header>
    <div class="item">
      <div class="item-header">
        <h2>
          <a href="#">所有分类</a>
          &nbsp;
          <a href="#"> > </a>
          &nbsp;&nbsp;
          <a href="#" class="family">家庭保洁</a>
          &nbsp;
          <a href="#"> > </a>
        </h2>
      </div>
      <div class="navcenter">
        <div class="list">
          <span class="fist"><a href="">分类</a></span>
          <span id="all" class="clickAble"><a id="red" href="#">全部</a></span>
          <span id="小时工" class="clickAble "><a href="#">小时工</a></span>
          <span id="开荒保洁" class="clickAble "><a href="#">开荒保洁</a></span>
          <span id="擦玻璃" class="clickAble "><a href="#">擦玻璃</a></span>
          <span id="深度保洁" class="clickAble "><a href="#">深度保洁</a></span>
          <span id="家居养护" class="clickAble "><a href="#">家居养护</a></span>
          <span id="杀虫灭鼠" class="clickAble "><a href="#">杀虫灭鼠</a></span>
        </div>
      </div>
      <div class="service-center">
        <div class="centerleft">
          <h3>
          <span class="ranking">
                <a href="#" id="recommend">推荐排序</a>
                <a href="#" id="sale" class="activity">销量高 <img src="./fuwu_down2.jpg" width="12" height="7"></a>
                <a href="#" id="comment" class="">好评多 <img src="./fuwu_down2.jpg" width="12" height="7"></a>
                <a href="#" id="aheadhours" class="">上门快 <img src="./fuwu_down2.jpg" width="12" height="7"></a>
                <a href="#" id="price" class="">价格低 <img src="./fuwu_down2.jpg" width="12" height="7"></a>
          </span>
            <span class="flip">
            <span id="page" class="cout">1</span>/<span id="pages">49</span>
            <a href="#" class="pageup greycolor">上一页</a>
            <a href="#" class="pagedown ">下一页</a>
          </span>
          </h3>
          <div class="items" @click="details(bao)" v-for="bao in baojie">
            <router-link :to="`/details/${bao.id}`">
              <div class="boxtab">
                <img class="img-left" :src="bao.img" alt="">
                <span class="information">
              <span class="title">{{bao.name}}</span>
               <span class="Price">
                <span class="volume">{{bao.content}}</span>
              </span>
              <br>
              <span class="Price">
                <span class="red">{{bao.price}}</span>
                <span class="minred">元/小时</span>
                &nbsp;&nbsp;&nbsp;
                <span class="old">原价{{bao.oldPrice}}元</span>
                <br>
                <span class="navtxt">
                  <img src="./home1.png" alt="">
                  <span>{{bao.provider}}</span>&nbsp;
                  <span>已售{{bao.already}}</span>&nbsp;
                  <span>好评{{bao.praise}}%</span>
                </span>
              </span>
            </span>
                <div class="quickly">
                  <a href="#">最快上门</a>
                  <a class="bai" href="#">2小时</a>
                </div>
              </div>
            </router-link>
          </div>
          <div class="fenye2">
            <a class="pageup greycolor">&lt;上一页</a>
            <div id="showPage" style="display: inline-block">
              <a class="num acv">1</a>
              <a class="num ">2</a>
              <a class="num ">3</a>
              <a class="num ">4</a>
              <a class="num ">5</a>
              <a class="num ">6</a>
              <a class="num ">7</a>
              <a class="num ">8</a>
              <a class="num ">9</a>
              ...

   </div>
            <a class="pagedown ">下一页&gt;</a>
          </div>

        </div>
        <div class="centerright">
          <div class="rightct">
            <h3>服务商</h3>
            <div class="fuwishang" v-for="bao in baojie">
              <img :src="bao.img" width="70" height="70">
              <p>{{bao.provider}}</p>
              <p class="pline">
                <span>已成功接单<span>{{bao.success}}</span></span>
                <span>好评<span>{{bao.praise}}%</span></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <com-footer></com-footer>
  </div>


</template>


<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  import Bus from '../../common/eventBus'

    export default {
      data(){
        return{
          baojie:[]
        }
      },
      methods:{
        details(bao){
          Bus.$emit('details', bao)
        }
      },
      created(){
        Bus.$on('details', (bao) =>{
          this.baojie = bao
        })

      },
      components:{
        'com-header' : header,
        'com-footer' : footer,

      }


    }
</script>

<style scoped>
  body{
    background: #fbf8f8;
  }
.item{
  margin-top: 70px;
}
.item-header{

  line-height: 85px;
  width: 1200px;
  margin: 0 auto;
  font-size: 18px;
}
.family{
  color: #fb4e55;
}
.navcenter{
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #eaeaea;
  background: #fff;
  clear: both;
}
.navcenter div {
  line-height: 50px;
  width: 1200px;
  overflow: hidden;
  position: relative;
}
.navcenter .fist a{
  color: #a9a9a9;
}
.navcenter span a{
  font-size: 20px;
  margin-left: 10px;
  color: #000000;
}
.navcenter div span:nth-child(1) {
  display: inline-block;
  width: 100px;
  padding: 0 10px;
  text-align: right;
}

#red{
  color: #fc545e;
}
.clickAble :hover{
  color: #e84b47;
}

  .service-center {
    width: 1200px;
    margin: 10px auto;
    position: relative;
  }

.centerleft h3{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #eaeaea;
    font-weight: normal;
    font-size: 14px;
    color: #e5e5e5;
    background: #fff;
    overflow: hidden;

  }
  .centerleft {
    width: 960px;
    float: left;
    margin-bottom: 50px;
  }
  .centerleft h3 span a{
    font-size: 18px;
    margin-left: 20px;
    color: #000000;
  }
  .ranking a{
    padding-bottom: 10px;
  }
  .activity{
    border-bottom: 4px solid #fb474f;
    color: #fb474f !important;
  }


  .boxtab{
    height: 200px;
    overflow: hidden;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;

  }
  .flip{
    float: right;
    color: #121212;
    margin-right: 10px;
  }
  .flip .greycolor{
    color: #929292;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
  .flip .pagedown{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }

  .boxtab .img-left{
    width: 160px;
    height: 160px;
    border: 1px solid #e5e5e5;
    margin: 30px;
    float: left;
  }
  .information{
    float: left;
    position: relative;
    top: 25px;
    width: 420px;
  }
  .information span:nth-child(1) {
    font-size: 18px;
    color: #1d1515;
  }
  .information>span{
    display: block;
    line-height: 42px;
    height: 42px;
  }
  .red{
    font-size: 20px;
    color: #fc545e !important;
    margin-left: 10px;
    font-weight: bold;
  }
  .minred{
    color: #fc545e;
  }
  .volume{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    color: #929292 !important;

    font-size: 15px !important;
  }
  .old{
    color: #7e8c8d;
    text-decoration:line-through

  }
  .Price{
    float: left;
    display: block;
    line-height: 42px;
    height: 42px;
  }
  .navtxt span{
    color: #7e8c8d;
  }
  .quickly{
    width: 60px;
    text-align: center;
    height: 30px;
    border: 1px solid #ff7871;
    line-height: 15px;
    font-size: 12px;
    border-radius: 6px;
    overflow: hidden;
    color: #ff7871;
    position: relative;
    left: 200px;
    top: 20px;

  }
  .quickly a{
    margin-left: 0;
    background: #ff7871;
    color: #fff;
    display: block;
    height: 15px;
    font-size: 10px;

  }
  .quickly .bai{
    background-color: white;
    color: #ff7871;
  }
  .centerright {
    width: 230px;
    float: right;
  }
  .rightct {
    width: 230px;
    border: 1px solid #e5e5e5;
    background: #fff;
    text-align: center;
  }
  .rightct h3 {
    font-size: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #e5e5e5;
    height: 60px;
    line-height: 60px;
    margin: 0;
    text-align: left;
    margin-bottom: 25px;
  }
  .fuwishang {
    height: 200px;
    background: #fff;
    cursor: pointer;
  }
  .fuwishang p{
    padding-top: 20px;
    padding-bottom: 14px;
  }
  .fenye2 {
    width: 100%;
    margin: 0 auto;
    height: 152px;
    clear: both;
    text-align: center;
  }
  .pline{
    border-bottom: 1px solid #e5e5e5;
  }
  .pline span{
    color: #929292;
  }
  .fenye span, .fenye2 a {
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 50px 5px;
    background: #fff;
    display: inline-block;
    font-size: 16px;
    color: #b1b1b1;
    cursor: pointer;
  }
  .fenye2 a {
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 0;
    font-size: 14px;
    color: #121212;
  }
  .fenye2 a.acv {
    background: #fe454a;
    color: #fff;
  }
  .fenye2 a.num {
    display: inline-block;
    width: 32px;
  }

</style>

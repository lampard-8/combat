<template>
  <div>
    <com-header></com-header>
    <div class="serve">
      <el-row type="flex" :gutter="20" >
        <el-col :span="20">
          <h2>服务商</h2>
          <div class="service-center">
            <div class="centerleft">
              <ul>
                <li v-for="an in anmo">
                  <img class="photo" :src="an.img">
                  <p><img src="./home1.png"><b>{{an.provider}}</b></p>
                  <p class="orders">已接单{{an.success}}单<span>好评{{an.praise}}%</span></p>
                </li>
              </ul>
              <div class="getServiceList">
                <span>查看更多商家<img src="./fuwu_down2.jpg"></span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="centerright">
            <img src="./tuijianfuwushang_03.jpg" alt="">
            <div class="code">
              <img src="./tuijianfuwushang_06.jpg" alt="">
              <img id="erwei" src="./daowayApp.png" alt="">
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <com-footer></com-footer>
  </div>
</template>

<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  import axios from 'axios'
    export default {
      data(){
        return{
          anmo:[]
        }
      },
      created(){
        axios.get('/api/serve')
          .then(response => {
              const result = response.data
              if(result.code === 0){
                  this.anmo = result.data.server
                  console.log(this.anmo);
              }
          })
      },

      components:{
        'com-header' : header,
        'com-footer' : footer,

      }
    }
</script>

<style scoped>
img {
    vertical-align: middle;
  }
.serve{
  margin-top: 70px;

}
h2{
  margin-left: 20px;
  line-height: 85px;
  font-size: 18px;
  font-weight: bold;

}
.centerleft{

  margin-left:20px ;
  float: left;
  margin-bottom: 50px;
}
.centerleft ul li {
  width: 210px;
  height: 280px;
  border: 1px solid #eaeaea;
  padding: 10px;
  float: left;
  margin-right: 40px;
  margin-bottom: 10px;
  background: #fff;
  cursor: pointer;
}
.centerleft ul p {
  height: 26px;
  line-height: 26px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.centerleft p.orders {
  font-size: 12px;
  color: #929292;
}
.centerleft ul li .photo{
  width: 210px;
  height: 210px;
}
.centerleft ul li span{
  float: right;
}
.getServiceList{
  width: 100%;
  margin: 0 auto;
  height: 152px;
  clear: both;
  text-align: center;
}
.getServiceList span{
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
.getServiceList span img{
  margin-left: 5px;
}
.centerright{
  margin-top: 85px;
  margin-left: -40px;
}
.code{
  position: relative;
  margin-top: 10px;
}

#erwei{
  left: 25px;
  top:25px;
  position: absolute;
  width: 170px;
  height: 170px;

}
</style>

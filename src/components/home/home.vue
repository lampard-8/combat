<template>
    <div class="wrapper">
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
      <el-row type="flex" justify="center" class="fff">
        <el-col :span="24">
          <div class="lists">
            <div class="servicebody">
              <div class="navigation">
                <span class="serviceIndex">家庭保洁</span>
                <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              </div>
              <div class="servicetags">
                <div class="tagsListHeader"><span class="lookMore"><router-link to="/serve" >更多服务&gt;</router-link></span>
                </div>
                <div class="row">
                  <a class="form-group shopList" href="#">
                    <div class="member-container ServiceBorder">
                      <img src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                      <div class="price"><span style="font-size: 20px">30</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2429946&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">室内保洁</div>
                      <div class="description">服务内容：
1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">29</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2382622&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2395249&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/19/a71fcfd6-a2b3-43e2-82ea-c1ac4c6150f9_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                      <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢
服务内容：
1...</div>
                      <div class="price"><span style="font-size: 20px">149</span>元/3小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2350384&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/06/29/d6ebc1f0-6364-408c-b3fa-5a899e4eba7a_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">日常保洁  小时工</div>
                      <div class="description">服务内容：
日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/
              <span class="btn">查看详情</span>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
            <div class="servicebody">
              <div class="navigation">
                <span class="serviceIndex">家庭保洁</span>
                <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              </div>
              <div class="servicetags">
                <div class="tagsListHeader"><span class="lookMore"><router-link to="/serve" >更多服务&gt;</router-link></span>
                </div>
                <div class="row">
                  <a class="form-group shopList" href="#">
                    <div class="member-container ServiceBorder">
                      <img src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                      <div class="price"><span style="font-size: 20px">30</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2429946&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">室内保洁</div>
                      <div class="description">服务内容：
1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">29</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2382622&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2395249&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/19/a71fcfd6-a2b3-43e2-82ea-c1ac4c6150f9_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                      <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢
服务内容：
1...</div>
                      <div class="price"><span style="font-size: 20px">149</span>元/3小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2350384&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/06/29/d6ebc1f0-6364-408c-b3fa-5a899e4eba7a_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">日常保洁  小时工</div>
                      <div class="description">服务内容：
日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/
              <span class="btn">查看详情</span>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
            <div class="servicebody">
              <div class="navigation">
                <span class="serviceIndex">家庭保洁</span>
                <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              </div>
              <div class="servicetags">
                <div class="tagsListHeader"><span class="lookMore"><router-link to="/serve" >更多服务&gt;</router-link></span>
                </div>
                <div class="row">
                  <a class="form-group shopList" href="#">
                    <div class="member-container ServiceBorder">
                      <img src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                      <div class="price"><span style="font-size: 20px">30</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2429946&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">室内保洁</div>
                      <div class="description">服务内容：
1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">29</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2382622&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2395249&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/19/a71fcfd6-a2b3-43e2-82ea-c1ac4c6150f9_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                      <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢
服务内容：
1...</div>
                      <div class="price"><span style="font-size: 20px">149</span>元/3小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2350384&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/06/29/d6ebc1f0-6364-408c-b3fa-5a899e4eba7a_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">日常保洁  小时工</div>
                      <div class="description">服务内容：
日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/
              <span class="btn">查看详情</span>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
            <div class="servicebody">
              <div class="navigation">
                <span class="serviceIndex">家庭保洁</span>
                <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
              </div>
              <div class="servicetags">
                <div class="tagsListHeader"><span class="lookMore"><router-link to="/serve" >更多服务&gt;</router-link></span>
                </div>
                <div class="row">
                  <a class="form-group shopList" href="#">
                    <div class="member-container ServiceBorder">
                      <img src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                      <div class="price"><span style="font-size: 20px">30</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2429946&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">室内保洁</div>
                      <div class="description">服务内容：
1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">29</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2382622&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/22/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">家庭保洁</div>
                      <div class="description">服务内容：
1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2395249&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/19/a71fcfd6-a2b3-43e2-82ea-c1ac4c6150f9_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                      <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢
服务内容：
1...</div>
                      <div class="price"><span style="font-size: 20px">149</span>元/3小时<span class="btn">查看详情</span></div>
                    </div>
                  </a>

                  <a class="form-group shopList" href="/detail?detailId=2350384&amp;CNtag=%E5%AE%B6%E5%BA%AD%E4%BF%9D%E6%B4%81">
                    <div class="member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/06/29/d6ebc1f0-6364-408c-b3fa-5a899e4eba7a_thumb.jpg" class="serviceImg" width="210px" height="210px">
                      <div class="serviceName">日常保洁  小时工</div>
                      <div class="description">服务内容：
日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                      <div class="price"><span style="font-size: 20px">35</span>元/
              <span class="btn">查看详情</span>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>

          </div>


        </el-col>
      </el-row>

    </div>
</template>

<script>
    export default {}
</script>


<style>
  .wrapper{
    margin-top: 70px;
  }
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
   .lists .servicebody:nth-child(even){
     background: #FBF8F8;
   }
  .servicebody{
    width: 1200px;
    padding: 60px 0;
    margin: 0 auto;

  }


  .navigation {
    text-align: center;

  }
  .navigation span.serviceIndex {
    color: #3d3838;
    font-weight: 800;
    font-size: 28px;
    font-family: "Microsoft YaHei";
  }
  .navigation span {
    display: block;
    font-family: "幼圆";
  }
  .lookMore {
    position: relative;
    bottom: 10px;
  }

  .serviceType {
    font-size: 22px;
    color: #3d3838;
    margin-top: 15px;
  }
  .tagsListHeader {
    text-align: right;
  }
  .row {
    height: 345px;
    margin-top: 10px;
    text-align: center;
  }
  .form-group {
    position: relative;
  }
  .ServiceBorder {
    float: left;
    width: 208px;
    cursor: pointer;
    height: 345px;
    padding: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    margin: 0 5px;
    background: rgb(255, 255, 255);
  }
  img {
    vertical-align: middle;
  }
  .shopList .serviceName {
    font-size: 16px;
    padding: 10px 0;
    font-weight: 800;
    color: #000;
    height: 28px;
    overflow: hidden;
    width: 101%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .shopList .description {
    color: #929292;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    line-height: 18px;
    height: 58px;
  }
  .shopList .price {
    font-size: 14px;
    padding: 5px 5px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    color: #fb474f;
  }
  .btn {
    float: right;
    padding: 0;
    width: 76px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }
  .form-group {
    position: relative;
    margin-bottom: 0;
  }
  .ServiceBorder:hover{
    box-shadow: 3px 3px 3px #333;
  }

</style>

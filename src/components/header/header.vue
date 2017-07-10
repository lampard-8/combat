<template>
    <div id="header">
      <div class="header-nav">
        <el-row type="flex" justify="center" class="container">
          <el-col :span="8">
            <div class="navbar-header">
              <router-link to="/">
                <img src="./logo.png" class="img-responsive logo-white" alt="logo">
              </router-link>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="collapse navbar-collapse navbar-right" id="main-menu">
              <ul class="nav navbar-nav" id="navbar-nav">
                <li id="position">
                  <a href="#">
                    <img src="./citypoint.png">
                    <a id="showCity">北京</a>
                    <a id="city">切换城市</a>
                  </a>
                </li>
                <li class="active">
                  <router-link to="/">
                    首页
                </router-link>
                </li>
                <li>
                  <a href="#">
                    下载APP
                </a>
                </li>
                <li>
                  <router-link to="/serve">服务商</router-link>
                </li>
                <li>
                  <a href="#">商家入驻</a>
                </li>
                <li>
                  <a href="#">
                    关于我们
                </a>
                </li>
                <li class="shanghu-right">
                  <router-link to="/landing">
                    <el-button type="danger" class="danger">商家登录</el-button>
                  </router-link>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
</template>

<script>
    export default {}
</script>

<style>
#header{
  height: 70px;
  position:fixed;
  left:0;
  top:0;
  width:100%;
  z-index:9999;
  background-color:#FFFFFF;
  opacity: 0.9;
}
img{
  vertical-align: middle;
}
.navbar-header{
  margin-top: 15px;

}
#main-menu{
  height: 70px;
}

#navbar-nav>li{
  float: left;
  margin-left: 30px;
}
.navbar-collapse{
  border-color: #e7e7e7;
}
.container{
  width: 1200px;
  margin: 0 auto;

}
#navbar-nav{
  line-height: 70px;

}

#position {
  margin-right: 50px;
}

#navbar-nav a{
  color: #121212;
  font-weight: bold;
}
.active>a{
  color: #e94840 !important;

}
#navbar-nav a:hover{
  color: #e94840;
}
.danger{
  background: #e94840;
}

</style>

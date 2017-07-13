<template>
  <div>

    <div class="login">

      <!--用户密码-->
      <div class="content">

        <img src="./houtai-logo.png">

        <div class="input_user">
          <span class="icon-user"></span>
          <!--<el-input class="user_in" type="password" placeholder="输入昵称或手机号"></el-input>-->
            <input type="text" class="user_in" placeholder="  输入昵称或手机号">
        </div>

        <div class="input_lock">
          <span class="icon-lock"></span>
          <input type="password" class="user_on" placeholder="  输入密码">
        </div>

      </div>

      <!--登陆按钮-->
      <div class="click_login">
        <el-button type="info" class="btn">登录</el-button>
      </div>

      <!--其它信息-->
      <div class="login_info">
        <router-link to="/" class="login_l">首页</router-link>
        <router-link to="/register" class="login_r">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .login
    width 350px
    background #fff
    border 1px solid #ccc
    border-radius 10px
    margin 0 auto
    margin-top 100px
    .content
      text-align center
      ::-webkit-input-placeholder { /* WebKit browsers */
        color: #ccc;
      }
      img
        margin-top 10px
        width 300px
        height 50px
      .input_user
        margin-top 20px
        display inline-block
        width 300px
        border 1px solid #ccc
        border-radius 4px
        .icon-user
          display inline-block
          background #EEEEEE
          width 40px
          height 50px
          line-height 50px
          float left
        .user_in
          display inline
          width 260px
          height 50px
          border-radius 4px
          font-size 18px
      .input_lock
        display inline-block
        width 300px
        border-left 1px solid #ccc
        border-right 1px solid #ccc
        border-bottom 1px solid #ccc
        border-radius 4px
        .icon-lock
          border-radius 4px
          display inline-block
          background #EEEEEE
          width 40px
          height 50px
          line-height 50px
          float left
        .user_on
          display inline
          width 260px
          height 50px
          border-radius 10px
          font-size 18px
    .click_login
      text-align center
      margin-top 20px
      .btn
        width 300px
        height 50px
        background #337AB7
        border none
        border-radius 10px
        font-size 18px
        color #fff
    .login_info
      display inline-block
      margin-top 20px
      .login_l
        display inline-block
        color deepskyblue
        margin-left 40px
        margin-bottom 20px
      .login_r
        display inline-block
        color deepskyblue
        margin-left 200px
        margin-bottom 20px

  a:hover{
    text-decoration underline
  }


</style>

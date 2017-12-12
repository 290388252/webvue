<template>
  <div>
    <div class="header">
      <div class="app-head-inner">
        <img src="../src/assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li class="text">登录</li>
            <li class="nav-pile">|</li>
            <li class="text">注册</li>
            <li class="nav-pile">|</li>
            <li class="text">退出</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">© 2017 yanchao CMP</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app'
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background: #363636;
    width 100%
    height 80px
    line-height: 80px
    .app-head-inner
      margin: 0 auto
      img
        width 50px
        height 50px
        margin-top 16px
      .head-nav
        float: right
        .nav-list
          li
            float: left
            margin-right 5px
            color whitesmoke
            font-size 14px
          .text
            cursor pointer
            &:hover
              color: #41B883

  .footer
    background #e3e4e8
    text-align center
    width 100%
    height 80px
    line-height 80px
    font-size 14px
    color gray
</style>

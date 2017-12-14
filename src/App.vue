<template>
  <div>
    <mydialog :isShow="loginShow" @on-close="closeDialog('loginShow')">
      <logform></logform>
    </mydialog>
    <mydialog :isShow="regShow" @on-close="closeDialog('regShow')">
      <regform></regform>
    </mydialog>
    <mydialog :isShow="aboutShow" @on-close="closeDialog('aboutShow')">
      <p style="position: absolute; margin: 20px">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </mydialog>
    <div class="header">
      <div class="app-head-inner">
        <img src="../src/assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li class="text" @click="login">登录</li>
            <li class="nav-pile">|</li>
            <li class="text" @click="reg">注册</li>
            <li class="nav-pile">|</li>
            <li class="text" @click="about">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content" style="background: #ededed">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">© 2017 yanchao CMP</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mydialog from './components/mydialog.vue';
  import logform from './components/logForm.vue';
  import regform from './components/regForm.vue';

  export default {
    name: 'app',
    data() {
        return {
          loginShow: false,
          regShow: false,
          aboutShow: false
        };
    },
    methods: {
      login() {
        this.loginShow = true;
      },
      reg() {
        this.regShow = true;
      },
      about() {
        this.aboutShow = true;
      },
      closeDialog(show) {
        this[show] = false;
      }
    },
    components: {
        mydialog,
        logform,
        regform
    }
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
        margin-left 5px
      .head-nav
        float: right
        margin-right 5px
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

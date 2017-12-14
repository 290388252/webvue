<template>
  <div class="g-form">
    <div class="g-line">
      <span class="g-form-label">username:</span>
      <input class="g-form-input" type="text" placeholder="please input your username xxx@xx.com" v-model="usernameModel">
      <span class="g-form-error">{{usernameStatus.errortext}}</span>
    </div>
    <div class="g-line">
      <span class="g-form-label">password:</span>
      <input class="g-form-input" type="text" placeholder="please input your password" v-model="passwordModel">
      <span class="g-form-error">{{passwordStatus.errortext}}</span>
    </div>
    <div class="g-line">
      <div class="g-form-btn">
        <a href="" class="button">register</a>
      </div>
    </div>
    <p>{{errorText}}</p>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .g-form
    margin 42px
    .g-line
      margin-bottom 20px
      .g-form-label
        display inline-block
        margin-top 5px
      .g-form-input
        display inline-block
        border: 1px solid #4fc08d
        border-radius 3px
        height 30px
        width 60%
        font-size 13px
      .g-form-error
        display inline-block
        font-size 10px
        padding-top 8px
        color red
      .g-form-btn
        background #4fc08d
        width 81%
        height 35px
        line-height 32px
        text-align center
        border: 1px solid black
        border-radius 5px
        a
          color white
</style>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      };
    },
    methods: {
      login() {
        console.log(this.usernameModel);
      }
    },
    computed: {
      usernameStatus() {
        let status, errortext;
        if (!/@/g.test(this.usernameModel)) {
          status = false;
          errortext = '不包含@';
        } else {
          status = true;
          errortext = '';
        }
        return {
          status,
          errortext
        };
      },
      passwordStatus() {
        let status, errortext;
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false;
          errortext = '密码不是1-6位';
        } else {
          status = true;
          errortext = '';
        }
        return {
          status,
          errortext
        };
      }
    }
  };
</script>

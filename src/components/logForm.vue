<template>
  <div class="g-form">
    <div class="g-line">
      <span class="g-form-label">username:</span>
      <input class="g-form-input" type="text" placeholder="please input your username xxx@xx.com" v-model="usernameModel">
    </div>
    <span class="g-form-error">{{usernameStatus.errortext}}</span>
    <div class="g-line">
      <span class="g-form-label">password:</span>
      <input class="g-form-input" type="password" placeholder="please input your password" v-model="passwordModel" maxlength="16">
    </div>
    <span class="g-form-error">{{passwordStatus.errortext}}</span>
    <div class="g-line">
      <button class="g-form-btn" @click="login">
         login
      </button>
    </div>
    <p class="errorText">{{errorText}}</p>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .g-form
    margin 42px
    .g-line
      margin-bottom 10px
      .g-form-label
        display inline-block
        margin-top 5px
      .g-form-input
        display inline-block
        border: 1px solid #4fc08d
        border-radius 3px
        height 30px
        width 60%
        padding-left 5px
        font-size 13px
      .g-form-btn
        margin-top 5px
        background #4fc08d
        width 81%
        height 35px
        line-height 32px
        text-align center
        border: 1px solid black
        border-radius 3px
        cursor: pointer
        font-size 15px
        color white
    .g-form-error
      font-size 10px
      color red
    .errorText
      color red
      font-size 10px
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
        if (!this.usernameStatus.status || !this.passwordStatus.status) {
            this.errorText = '账号或密码未输完整';
        } else {
          this.$http.get('api/login')
            .then((res) => {
              if (this.usernameModel === res.body.username && this.passwordModel === res.body.userId) {
                this.errorText = '';
                this.$emit('has-log', res.data);
              } else {
                this.errorText = '账号不存在或者密码错误！';
              }
          }, (err) => {
              console.log(err);
          });
        }
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
        if (!/^\w{6,16}$/g.test(this.passwordModel)) {
          status = false;
          errortext = '密码必须为6-16位';
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

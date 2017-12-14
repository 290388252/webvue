<template>
    <div class="g-form">
      <div class="g-line">
        <span class="g-form-label">username:</span>
        <input class="g-form-input" type="text" placeholder="please input your username">
      </div>
      <div class="g-line">
        <span class="g-form-label">password:</span>
        <input class="g-form-input" type="text" placeholder="please input your password">
      </div>
      <div class="g-line">
        <div class="g-form-btn">
          <a href="" class="button">login</a>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .g-form
    margin 40px
    .g-line
      margin-bottom 20px
      .g-form-label
        display inline-block
        margin-top 5px
      .g-form-input
        display inline-block
        border: 1px solid #4fc08d
        border-radius 5px
        height 30px
        width 50%
      .g-form-btn
        background #4fc08d
        width 70%
        height 35px
        line-height 32px
        text-align center
        border: 1px solid black
        border-radius 5px
        a
          color white
</style>

<script type="text/ecmascript-6">
    export default{};
</script>

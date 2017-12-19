<template>
    <div class="counter-component">
      <button class="counter-btn">-</button>
      <div class="counter-show">
        <input type="text" class="counter-show-input">
      </div>
      <button class="counter-btn">+</button>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .counter-component
    .counter-btn
      float: left
      color white
      border-radius 5px
      font-size 12px
      background #41B883
      width 35px
      height 25px
    .counter-show
      float: left
      .counter-show-input
        width 25px
</style>

<script type="text/ecmascript-6">
    export default{};
</script>

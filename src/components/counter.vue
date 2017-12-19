<template>
    <div class="counter-component">
      <button class="counter-btn" @click="minus">-</button>
      <div class="counter-show">
        <input type="text" class="counter-show-input" v-model="number">
      </div>
      <button class="counter-btn" @click="adds">+</button>
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
        width: 45px;
        height: 20px;
        margin-top: 1px;
        border 2px solid #41B883;
        border-radius 2px
</style>

<script type="text/ecmascript-6">
    export default{
      props: {
        max: {
          type: Number,
          default: 5
        },
        min: {
          type: Number,
          default: 1
        }
      },
      data() {
        return {
          number: this.min
        };
      },
      methods: {
        adds() {
          if (this.number >= this.max) {
              return;
          }
          this.number ++;
        },
        minus() {
          if (this.number <= this.min) {
            return;
          }
          this.number --;
        }
      }
    };
</script>

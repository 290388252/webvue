<template>
  <div>
    <div class="dialog" @click="closeMyself" v-if="isShow"></div>
    <transition name="drop">
      <div class="dialog-wrap" v-if="isShow">
        <div class="dialog-content">
          <p class="dialog-close" @click="closeMyself">X</p>
          <slot class="slot">empty</slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .dialog
      position fixed
      z-index: 10;
      width 100%
      height 100%
      background: #000
      opacity: .3;
    .drop-enter-active
      transition all .3s
    .drop-leave-active
      transition all .3s
    .drop-enter
      transform translateY(-500px)
    .drop-leave-active
      transform translateY(-500px)
    .dialog-wrap
      position fixed
      z-index: 10
      top: 20%
      left 35%
      width 500px
      height 230px
      border-radius 5px
      background whitesmoke
      border: 2px solid #464068;
      .dialog-content
        .dialog-close
          position absolute
          top: 3px
          right 6px
          cursor pointer
          &:hover
            color: #4fc08d
</style>

<script type="text/ecmascript-6">
    export default{
        props: {
          isShow: {
                type: Boolean,
                defalut: false
            }
        },
        methods: {
          closeMyself() {
            this.$emit('on-close');
          }
        }
    };
</script>

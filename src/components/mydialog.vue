<template>
    <div class="dialog-wrap" v-if="dialogShow">
      dialog
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .dialog-wrap
    position fixed
    width 50%
    height 50%
    background blueviolet
</style>

<script type="text/ecmascript-6">
    export default{
        props: {
            dialogShow: {
                type: Boolean,
                defalut: false
            }
        }
    };
</script>

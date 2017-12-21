<template>
    <div class="chooser-component">
      <div class="chooser-list">
        <ul class="chooser-ul" v-for="(item, index) in selections">
          <li class="chooser-li" @click="chooseSelection(index)" :class="{active: index===nowIndex}">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .chooser-component
    display inline-block
    .chooser-ul
      display inline-block
      .chooser-li
        display inline-block
        border: 1px solid #e3e3e3
        height 25px
        line-height 25px
        padding 0 8px
        margin-right 5px
        cursor pointer
        border-radius 5px
        &:hover
          background #41B883
          color: white
      .active
        background #41B883
        color: white
</style>

<script type="text/ecmascript-6">
    export default{
      props: {
        selections: {
          type: Array,
          default: [{
            label: 'test',
            value: 0
          }]
        }
      },
      data () {
        return {
          nowIndex: 0
        };
      },
      methods: {
        chooseSelection(index) {
            this.nowIndex = index;
            console.log(this.selections);
            this.$emit('on-change', this.selections[this.nowIndex]);
        }
      }
    };
</script>

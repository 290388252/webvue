<template>
    <div class="selection-component">
      <div class="selection-show" @click="toggleDrop">
        <span>{{selections[nowIndex].label}}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isDrop">
        <ul v-for="(item, index) in selections">
          <li @click="chooseSelection(index)">{{item.label}}</li>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .selection-component
    position: relative;
    display: inline-block;
    .selection-show
      border 1px solid #e3e3e3
      position: relative;
      cursor: pointer;
      width: 56px
      height: 25px;
      line-height: 25px;
      border-radius: 3px;
      background: #fff
      padding-right 5px
      .arrow
        display: inline-block
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        border-top: 5px solid #e3e3e3
        width: 0
        height: 0
        margin-top: -1px
        margin-left: 5px
        margin-right: -14px
        vertical-align: middle
    .selection-list
      display: inline-block;
      position: absolute;
      left: 0;
      top: 25px;
      width: 62px;
      background: #fff;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      z-index 5
      li
        padding: 5px 5px 5px 5px;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        cursor: pointer;
        background: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:hover
          background: #41B883
          color: #fff
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
        data() {
            return {
                isDrop: false,
                nowIndex: 0
            };
        },
        methods: {
            toggleDrop() {
                this.isDrop = !this.isDrop;
            },
            chooseSelection(index) {
                this.nowIndex = index;
                this.isDrop = false;
                console.log(this.selections);
                this.$emit('on-change', this.selections[this.nowIndex]);
            }
        }
    };
</script>

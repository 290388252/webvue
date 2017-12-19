<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <ul v-for="(item, index) in selections">
        <li @click="toggleSelection(index)" :class="{active: checkActive(index)}">
          {{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .chooser-component
    display inline-block
    ul
      display inline-block
      li
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
  import _ from 'lodash';
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
        nowIndex: [0]
      };
    },
    methods: {
      toggleSelection(index) {
          console.log(this.nowIndex);
        if (this.nowIndex.indexOf(index) === -1) {
          this.nowIndex.push(index);
        } else {
          this.nowIndex = _.remove(this.nowIndex, (idx) => {
            return idx !== index;
          });
        }
        let nowObjArray = _.map(this.nowIndex, (idx) => {
          return this.selections[idx];
        });
        this.$emit('on-change', nowObjArray);
      },
      checkActive (index) {
        return this.nowIndex.indexOf(index) !== -1;
      }
    }
  };
</script>

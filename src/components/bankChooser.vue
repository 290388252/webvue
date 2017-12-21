<template>
    <div class="chooser-component">
      <ul class="chooser-list">
        <li class="chooser-list-li" v-for="(item, index) in banks" :class="item.name">
        </li>
      </ul>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .chooser-component
    display inline-block
    .chooser-list-li
        margin-left 5px
        width: 111px
        height 32px
        display inline-block
        background-image: url(../assets/banks/banks.png);
        background-repeat: no-repeat
        border: 1px solid #e3e3e3
        border-radius 5px
        cursor: pointer
        &:hover
          border: 1px solid #41B883
    .huaxia
      background-position: -2040px 0
    .jianshe
      background-position: -720px 0
    .pufa
      background-position: -1800px 0
    .jiaotong
      background-position: -3120px 0
    .gongshang
      background-position: -2640px 0
    .nongye
      background-position: -1680px 0
    .zhongguo
      background-position: -2520px 0
    .zhongxin
      background-position: -480px 0
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          nowIndex: 0,
          banks: [
            {
              id: 201,
              label: '华夏银行',
              name: 'huaxia'
            },
            {
              id: 301,
              label: '中国建设银行',
              name: 'jianshe'
            },
            {
              id: 601,
              label: '浦发银行',
              name: 'pufa'
            },
            {
              id: 1101,
              label: '交通银行',
              name: 'jiaotong'
            },
            {
              id: 101,
              label: '中国工商银行',
              name: 'gongshang'
            },
            {
              id: 401,
              label: '中国农业银行',
              name: 'nongye'
            },
            {
              id: 1201,
              label: '中国银行',
              name: 'zhongguo'
            },
            {
              id: 501,
              label: '中信银行',
              name: 'zhongxin'
            }
          ]
        };
      }
    };
</script>

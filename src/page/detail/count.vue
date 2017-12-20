<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2 class="sales-board-intro-h2">数据统计</h2>
      <p class="sales-board-intro-p">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">产品类型：</div>
        <div class="sales-board-formin-right">
          <v-selection :selections="versionList" @on-change="onParamChange('versions', $event)" style="margin-top: -5px"></v-selection>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">适用地区：</div>
        <div class="sales-board-formin-right">
          <vchooser :selections="districts" @on-change="onParamChange('district', $event)" style="margin-top: -5px"></vchooser>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">有效时间：</div>
        <div class="sales-board-formin-right">
          <vchooser :selections="periodLists" @on-change="onParamChange('periods', $event)" style="margin-top: -5px"></vchooser>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">总价：</div>
        <div class="sales-board-formin-right">500元</div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">&nbsp;</div>
        <div class="sales-board-formin-right">
          <button class="sales-board-formin-right-button">
            立即购买
          </button>
        </div>
      </div>
    </div>
    <div class="sales-board-line"></div>
    <div class="sales-board-des">
      <h2 class="sales-board-des-h2">产品说明</h2>
      <p class="sales-board-des-p">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .sales-board
    background white
    .sales-board-intro
      background white
      .sales-board-intro-h2
        font-size 20px
        padding 20px
      .sales-board-intro-p
        padding 10px 20px
        color: #999
        line-height: 1.5
        background: #f7fcff
    .sales-board-form
      padding: 30px 20px
      font-size: 14px
      .sales-board-formin
        padding-top 10px
        padding-bottom 10px
        .sales-board-formin-left
          display inline-block
        .sales-board-formin-right
          display inline-block
          .sales-board-formin-right-button
            background #41B883
            color: #fff
            border-radius 3px
            border 1px solid #41B883
            box-shadow: 1px 1px 1px #888888
            cursor pointer
            width 92px
            height 35px
            &:active
              background #16af6b
    .sales-board-line
      background #ededed
      width 100%
      height 20px
    .sales-board-des
      background white
      width 100%
      .sales-board-des-h2
        font-size 20px
        padding 20px
      .sales-board-des-p
        padding 10px 20px
        margin-bottom 10px
        color: #999
        line-height: 1.5
        background: #f7fcff
</style>

<script type="text/ecmascript-6">
  import VSelection from '../../components/selection.vue';
  import vchooser from '../../components/chooser.vue';
  import vmultiplychooser from '../../components/multiplychooser.vue';

    export default{
      data() {
        return {
          versionList: [
            {
              label: '红色版',
              value: 0
            },
            {
              label: '绿色版',
              value: 1
            },
            {
              label: '紫色版',
              value: 2
            }
          ],
          districts: [
            {
              label: '北京',
              value: 0
            },
            {
              label: '上海',
              value: 1
            },
            {
              label: '广州',
              value: 2
            },
            {
              label: '天津',
              value: 3
            },
            {
              label: '武汉',
              value: 4
            },
            {
              label: '重庆',
              value: 5
            }
          ],
          periodLists: [
            {
              label: '半年',
              value: 0
            },
            {
              label: '一年',
              value: 1
            },
            {
              label: '三年',
              value: 2
            }
          ]
        };
      },
      components: {
        VSelection,
        vchooser,
        vmultiplychooser
      },
      methods: {
        onParamChange(attr, val) {
          this[attr] = val;
        }
      }
    };
</script>

<template>
  <div class="sales-board">
    <mydialog :is-show="isShowPayDialog" @on-close="hidePayDialog" class="mydialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>
            123
          </td>
          <td>123</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <button class="buy-dialog-button">
        立即购买
      </button>
    </mydialog>
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
          <button class="sales-board-formin-right-button" @click="showPayDialog">
            立即购买
          </button>
        </div>
      </div>
    </div>
    <div class="sales-board-line"></div>
    <div class="sales-board-des">
      <h2 class="sales-board-des-h2">产品说明</h2>
      <p class="sales-board-des-p">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .sales-board
    background white;
    .buy-dialog-table
      width: 100%
      margin-top 20px
      margin-bottom: 20px
      th
        border: 1px solid #e3e3e3
        text-align center
        padding: 5px 0
      td
        border: 1px solid #fff
        text-align center
        padding: 5px 0
        background: #4fc08d
        color: #fff
    h3
      margin-left 20px
      font-size: 16px
      font-weight: bold
    .buy-dialog-button
      margin 19px
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
      .sales-board-table
        width: 100%
        margin-top: 20px
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
  import mydialog from '../../components/mydialog.vue';
    export default{
      data() {
        return {
          isShowPayDialog: false,
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
        vmultiplychooser,
        mydialog
      },
      methods: {
        onParamChange(attr, val) {
          this[attr] = val;
        },
        showPayDialog () {
          this.$emit('on-dialog', this.isShowPayDialog = true);
          this.isShowPayDialog = true;
        },
        hidePayDialog () {
          this.isShowPayDialog = false;
        }
      }
    };
</script>

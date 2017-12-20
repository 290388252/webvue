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
          <td>{{ buyNum }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ period.label }}</td>
          <td>
            <span v-for="item in versions">{{ item.label }}</span>
          </td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <button class="buy-dialog-button">
        立即购买
      </button>
    </mydialog>
    <div class="sales-board-intro">
      <h2 class="sales-board-intro-h2">流量分析</h2>
      <p class="sales-board-intro-p">
        是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">购买数量：</div>
        <div class="sales-board-formin-right">
          <counter @on-change="onParamChange('buyNum', $event)" style="margin-top: -5px"></counter>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">产品类型：</div>
        <div class="sales-board-formin-right">
          <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)" style="margin-top: -5px"></v-selection>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">有效时间：</div>
        <div class="sales-board-formin-right">
          <vchooser :selections="periodLists" @on-change="onParamChange('period', $event)" style="margin-top: -5px"></vchooser>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">产品版本：</div>
        <div class="sales-board-formin-right">
          <vmultiplychooser :selections="versionList" @on-change="onParamChange('versions', $event)" style="margin-top: -5px"></vmultiplychooser>
        </div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">价格：</div>
        <div class="sales-board-formin-right">
          {{price}}
        </div>
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
      <p class="sales-board-des-p">
        网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3 class="sales-board-des-h3">用户行为指标</h3>
      <ul class="sales-board-des-ul">
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3 class="sales-board-des-h3">浏览网站方式</h3>
      <ul class="sales-board-des-ul">
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .sales-board
    background white
    position relative
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
      .sales-board-des-h2
        font-size 20px
        padding 20px
      .sales-board-des-p
        padding 10px 20px
        margin-bottom 10px
        color: #999
        line-height: 1.5
        background: #f7fcff
      .sales-board-des-h3
        font-size 15px
        padding-left 20px
        color: #41B883
      .sales-board-des-ul
        padding 20px
        background: #f7fcff
        color: #999
</style>

<script type="text/ecmascript-6">
  import VSelection from '../../components/selection.vue';
  import vchooser from '../../components/chooser.vue';
  import vmultiplychooser from '../../components/multiplychooser.vue';
  import counter from '../../components/counter.vue';
  import mydialog from '../../components/mydialog.vue';
  import _ from 'lodash';
  export default{
      data() {
          return {
            isShowPayDialog: false,
            buyNum: 0,
            buyType: {
              label: '入门版',
              value: 0
            },
            versions: [
              {
                label: '客户版',
                value: 0
              }
            ],
            period: {
              label: '半年',
              value: 0
            },
            price: 0,
            versionList: [
              {
                label: '客户版',
                value: 0
              },
              {
                label: '代理商版',
                value: 1
              },
              {
                label: '专家版',
                value: 2
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
            ],
            buyTypes: [
              {
                label: '入门版',
                value: 0
              },
              {
                label: '中级版',
                value: 1
              },
              {
                label: '高级版',
                value: 2
              }
            ]
          };
      },
      components: {
        VSelection,
        vchooser,
        vmultiplychooser,
        counter,
        mydialog
      },
      methods: {
        onParamChange(attr, val) {
            this[attr] = val;
            this.getPrice();
        },
        getPrice() {
            let buyVersionsArray = _.map(this.versions, (item) => {
                return item.value;
            });
            let reqParams = {
              buyNum: this.buyNum,
              buyType: this.buyType.value,
              versions: buyVersionsArray.join(','),
              period: this.period.value
            };
            console.log(reqParams);
            this.$http.get('/api/getPrice').then((res) => {
                console.log(res);
                this.price = res.body.amount;
            });
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

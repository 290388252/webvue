<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <div v-for="product in productList">
            <h3>{{ product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </div>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新产品</h2>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <div class="index-board-list">
          <div class="index-board-item" v-for="item in boardList">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <a href="" class="button">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .index-wrap
    width 100%
    margin 0 auto
    overflow: hidden
    background #ededed
    .index-left
      float left
      width 25%
      .index-left-block
        margin: 15px
        background: #fff
        box-shadow: 0 0 1px #ddd
        .hr
          margin-bottom: 20px;
          background #ededed
          width 100%
          height 2px
        h2
          background: #4fc08d
          color: #fff;
          padding: 10px 15px;
          margin-bottom: 20px
          border-top-left-radius 5px
          border-top-right-radius 5px
        h3
          padding: 0 15px 5px 15px
          font-weight: bold
          color: #222;
        ul
          padding: 10px 15px
        li
          padding: 5px
          a:hover
            color: #41B883
          .hot-tag
            background red
            color white
            font-size 9px
    .index-right
      width 75%
      .index-board-item
        float left
        width 33%
        background #fff
        box-shadow: 0 0 1px #ddd;
        border-radius 5px
        padding 20px
        margin-right 20px
        margin-bottom 20px
        .index-board-item-inner
          padding-left: 30%;
          h2
            font-weight: bold
            color: #222;
            margin-bottom 10px
          p
            font-size 11px
            margin-bottom 10px
          .index-board-button
            background #4fc08d
            width 35%
            height 25px
            line-height 25px
            border-radius 3px
            text-align center
            .button
              color white
              font-size 10px
</style>

<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                newsList: [
                  {
                    title: '数据统计',
                    url: 'http://starcraft.com'
                  },
                  {
                    title: '数据预测',
                    url: 'http://warcraft.com'
                  },
                  {
                    title: '流量分析',
                    url: 'http://overwatch.com',
                  },
                  {
                    title: '广告发布',
                    url: 'http://hearstone.com'
                  }
                ],
                productList: {
                    pc: {
                      title: 'PC产品',
                      list: [
                        {
                          name: '数据统计',
                          url: 'http://starcraft.com'
                        },
                        {
                          name: '数据预测',
                          url: 'http://warcraft.com'
                        },
                        {
                          name: '流量分析',
                          url: 'http://overwatch.com',
                          hot: true
                        },
                        {
                          name: '广告发布',
                          url: 'http://hearstone.com'
                        }
                      ]
                    },
                    app: {
                      title: '手机应用类',
                      last: true,
                      list: [
                        {
                          name: '91助手',
                          url: 'http://weixin.com'
                        },
                        {
                          name: '产品助手',
                          url: 'http://twitter.com',
                          hot: true
                        },
                        {
                          name: '智能地图',
                          url: 'http://maps.com'
                        },
                        {
                          name: '团队语音',
                          url: 'http://phone.com'
                        }
                      ]
                    }
                },
                boardList: [
                {
                  title: '开放产品',
                  description: '开放产品是一款开放产品',
                  id: 'car',
                  toKey: 'analysis',
                  saleout: false
                },
                {
                  title: '品牌营销',
                  description: '品牌营销帮助你的产品更好地找到定位',
                  id: 'earth',
                  toKey: 'count',
                  saleout: false
                },
                {
                  title: '使命必达',
                  description: '使命必达快速迭代永远保持最前端的速度',
                  id: 'loud',
                  toKey: 'forecast',
                  saleout: true
                },
                {
                  title: '勇攀高峰',
                  description: '帮你勇闯高峰，到达事业的顶峰',
                  id: 'hill',
                  toKey: 'publish',
                  saleout: false
                }
              ]
          };
        }
    };
</script>

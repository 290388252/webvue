<template>
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="product-board">
          <img :src="productsIcon" alt="">
          <ul>
            <router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active" class="detail-li">
              {{ item.name }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail-wrap
    width 1370px
    padding: 20px;
    overflow: hidden;
    .detail-left
      float left
      width 20%
      text-align: center
      .product-board
        background white
        padding 20px 0
        li
          list-style: none;
          text-align left
          cursor pointer
          padding-top 10px
          padding-bottom 10px
          padding-left 60px
          &.active
            background: #4fc08d;
            color: #fff
          &:hover
            background: #4fc08d;
            color: #fff
    .detail-right
      float left
      width 75%
      margin-left 20px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          products: [
            {
              name: '数据统计',
              path: 'count',
              icon: require('../assets/images/1.png'),
              active: false
            },
            {
              name: '数据预测',
              path: 'forecast',
              active: false
            },
            {
              name: '流量分析',
              path: 'analysis',
              active: false
            },
            {
              name: '广告发布',
              path: 'publish',
              active: false
            }
          ],
          imgMap: {
            '/detail/count': require('../assets/images/1.png'),
            '/detail/forecast': require('../assets/images/2.png'),
            '/detail/analysis': require('../assets/images/3.png'),
            '/detail/publish': require('../assets/images/4.png')
          }
        };
      },
      computed: {
          productsIcon() {
              return this.imgMap[this.$route.path];
          }
      }
    };
</script>

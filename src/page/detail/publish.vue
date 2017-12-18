<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2 class="sales-board-intro-h2">广告发布</h2>
      <p class="sales-board-intro-p">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">购买数量：</div>
        <div class="sales-board-formin-right"></div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">行业：</div>
        <div class="sales-board-formin-right"></div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">产品版本：</div>
        <div class="sales-board-formin-right"></div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">有效时间：</div>
        <div class="sales-board-formin-right">一年</div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">总价：</div>
        <div class="sales-board-formin-right">500元</div>
      </div>
      <div class="sales-board-formin">
        <div class="sales-board-formin-left">&nbsp;</div>
        <div class="sales-board-formin-right">
          <button>
            立即购买
          </button>
        </div>
      </div>
    </div>
    <div class="sales-board-line"></div>
    <div class="sales-board-des">
      <h2 class="sales-board-des-h2">产品说明</h2>
      <p class="sales-board-des-p">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
    export default{};
</script>

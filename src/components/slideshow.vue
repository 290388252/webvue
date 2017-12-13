<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a class="slide-a" :class="{slide_on: index === nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        nowIndex: 1
      };
    },
    computed: {
      preIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1;
        } else {
          return this.nowIndex - 1;
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0;
        } else {
          return this.nowIndex + 1;
        }
      }
    },
    methods: {
      goto(index) {
        this.nowIndex = index;
      },
      runInv() {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex);
        }, this.inv);
      }
    },
    mounted() {
      this.runInv();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-trans-enter-active
    transition: all .5s
  .slide-trans-enter
    transform: translateX(900px);
  .slide-trans-old-leave-active
    transition: all .5s;
    transform: translateX(-900px);
  .slide-show
    position: relative;
    margin: 15px 15px 15px 0;
    width: 85%
    height: 367px;
    overflow: hidden;
    h2
      position: absolute;
      width: 100%;
      color: #fff;
      background: #000;
      opacity: .5;
      bottom: 0;
      height: 30px;
      line-height 30px
      text-align: left;
      padding-left: 15px;
    .slide-img
      width: 100%;
      img
        width: 100%;
        position: absolute;
        top: 0;
    .slide-pages
      position: absolute;
      bottom: 8px;
      right: 11px;
      color: #fff;
      .slide_on
        color gray
      .slide_on
        color white
      li
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
      li .on
        text-decoration: underline;
        a
         color: white
</style>

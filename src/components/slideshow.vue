<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="slides[0].href">
        <transition name="slide-trans">
          <img :src="slides[0].src">
        </transition>
        <transition name="slide-trans-old">
          <img :src="slides[0].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[0].title }}</h2>
    <ul class="slide-pages">
      <li>&lt;</li>
      <li>
        <a>1</a>
        <a>1</a>
        <a>1</a>
      </li>
      <li>&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      }
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
      bottom: 10px;
      right: 11px;
      li
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
      li .on
        text-decoration: underline;
</style>

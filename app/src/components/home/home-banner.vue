<template>
  <div class="banner">
    <div class="bg1">
      <img src="../../assets/images/home/bg1.png" alt="">
    </div>
    <div class="bg2">
      <img src="../../assets/images/home/bg2.png" alt="">
    </div>
    <div class="bg3">
      <img src="../../assets/images/home/bg3.png" alt="">
    </div>
    <div class="bg4">
      <img src="../../assets/images/home/bg4.png" alt="">
    </div>
    <div class="bg5">
      <img src="../../assets/images/home/bg5.png" alt="">
    </div>
    <div class="wrappr">
      <div class="text vc">
        <h3 v-html="bannerText.title"></h3>
        <p class="font14" v-html="bannerText.detail"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bannerText: {
        title: '智能生态&nbsp;智慧互联',
        detail: '福田汽车探索大数据的价值，以开放共享的心态传递汽车数据给外部千万用户，共同创造数据价值'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 720px;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  &>div {
    position: absolute;
    top: 0;
    left: 0;
  }
  .bg1 {
    z-index: 5;
    animation: b_to_t1 .8s cubic-bezier(.4,0,.2,1) 0s 1;
  }
  .bg2 {
    z-index: 4;
    animation: b_to_t2 .8s cubic-bezier(.4,0,.2,1) 0s 1;
  }
  .bg3 {
    z-index: 3;
    animation: b_to_t3 .8s cubic-bezier(.4,0,.2,1) 0s 1;
  }
  .bg4 {
    z-index: 2;
    animation: b_to_t4 .8s cubic-bezier(.4,0,.2,1) 0s 1;
  }
  .bg5 {
    z-index: 1;
  }
  .wrappr {
    position: relative;
    margin: auto;
    width: 1200px;
    height: 100%;
    z-index: 6;
    color: #fff;
    .text {
      width: 520px;
      animation: banner .8s cubic-bezier(.4,0,.2,1) 0s 1;
      h3 {
        font-size: 54px;
        margin-bottom: 14px;
      }
    }
  }
}

@keyframes banner {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
</style>

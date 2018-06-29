<template>
  <div class="data-getter">
    <part-title :cTitle="cTitle"></part-title>
    <div class="wrapper">
      <div class="clearfix data-box" ref="dataBox">
        <div class="item" v-for="item in dataBox" :key="item.name">
          <img :src="item.imgUrl" alt="">
          <p class="font14">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartTitle from '../part-title';
export default {
  data () {
    return {
      cTitle: ['数据采集', '与整车深度集成，实时采集车辆各项数据，单车数据项超过300种'],
      dataBox: [
        {
          imgUrl: require('../../assets/images/home/home-icon-1.png'),
          name: '发动机'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-2.png'),
          name: '变速箱'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-3.png'),
          name: '电子仪表'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-4.png'),
          name: '后处理'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-5.png'),
          name: '车桥'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-6.png'),
          name: '位置数据'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-7.png'),
          name: '故障数据'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-8.png'),
          name: '报警数据'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-9.png'),
          name: '驾驶行为数据'
        },
        {
          imgUrl: require('../../assets/images/home/home-icon-10.png'),
          name: '载重数据'
        }
      ]
    };
  },
  components: {
    PartTitle
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var dom = this.$refs.dataBox;
      var point = $(dom).offset().top - window.innerHeight * 0.8;
      if(scrollTop > point) {
        $(dom).addClass('move');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.data-getter {
  height: 780px;
  background: #0E0C2B url('../../assets/images/home/data-getter.jpg') center center no-repeat;
  .part-title {
    padding-top: 110px;
    color: #fff;

    & /deep/ h1, & /deep/ p {
      margin-bottom: 5px;
      color: #fff;
    }
  }
  .data-box {
    animation-fill-mode: forwards!important;
    opacity: 0;
    margin-top: 120px;
    .item {
      float: left;
      width: 84px;
      text-align: center;
      margin: 0 78px 80px;
      p {
        color: #fff;
        margin-top: 10px;
      }
    }
    &.move {
      animation: b_to_t3 .8s cubic-bezier(.4,0,.2,1) 0s 1;
    }
  }
}
</style>

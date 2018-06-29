<template>
  <div class="data-share">
    <part-title :cTitle="cTitle"></part-title>
    <div class="wrapper">
      <div class="clearfix">
        <div class="left" ref="leftImg">
          <img src="../../assets/images/home/datashare1.png" alt="">
        </div>
        <div class="right clearfix">
          <div class="item" v-for="item in shares" :key="item.name">
            <img :src="item.imgUrl" alt="">
            <p>{{ item.name }}</p>
          </div>
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
      cTitle: ['数据共享', ''],
      shares: [
        {
          imgUrl: require('../../assets/images/home/datashare2.png'),
          name: '数据开放共享'
        },
        {
          imgUrl: require('../../assets/images/home/datashare3.png'),
          name: '服务合作伙伴'
        },
        {
          imgUrl: require('../../assets/images/home/datashare4.png'),
          name: '重构行业生态'
        },
        {
          imgUrl: require('../../assets/images/home/datashare5.png'),
          name: '驱动产业发展'
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
      var dom = this.$refs.leftImg;
      var point = $(dom).offset().top - window.innerHeight * 0.8;
      if(scrollTop > point) {
        $(dom).addClass('move');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.data-share {
  padding-top: 88px;
  height: 876px;
  .clearfix {
    margin-top: 80px;
    & > div {
      float: left;
    }
    .left.move {
      animation: b_to_t3 .8s cubic-bezier(.4,0,.2,1) 0s 1;
    }
    .right {
      padding-left: 140px;
      padding-top: 35px;
      width: 640px;
      .item {
        float: left;
        margin-bottom: 80px;
        text-align: center;
        &:nth-child(odd) {
          margin-right: 200px;
        }
        p {
          font-size: 18px;
          color: #666;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

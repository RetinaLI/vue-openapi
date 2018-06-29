<template>
  <div class="bigdata">
    <div class="content vhc">
      <div class="title vc">
        <h3>车联网大数据</h3>
        <p class="font14">海量数据整合 数据价值分析</p>
      </div>
      <div class="numbs vc clearfix">
        <el-card :body-style="{padding: 0}" shadow="nerver" v-for="item in numbs" :key="item.name">
          <img :src="item.imgUrl" alt="">
          <p class="line"></p>
          <p class="name" v-html="item.name"></p>
          <p class="numb">{{ item.numb }}<span>+</span></p>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      numbs: [
        {
          imgUrl: require('../../assets/images/home/bigdata1.png'),
          name: '总接入车辆（辆）',
          numb: '70万'
        },
        {
          imgUrl: require('../../assets/images/home/bigdata2.png'),
          name: '总数据量',
          numb: '500T'
        },
        {
          imgUrl: require('../../assets/images/home/bigdata3.png'),
          name: '月增数据量',
          numb: '40T'
        },
        {
          imgUrl: require('../../assets/images/home/bigdata4.png'),
          name: '日处理数据量（条）',
          numb: '20亿'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.bigdata {
  width: 100%;
  height: 600px;
  position: relative;
  .content {
    width: 1080px;
    height: 400px;
    box-shadow: 3px 6px 12px 0px rgba(241, 241, 241, 1);
    border: 1px solid rgba(239, 239, 239, 1);
    .title {
      width: 320px;
      height: 300px;
      background: rgba(68, 117, 253, 1);
      left: -100px;
      color: #fff;
      padding-left: 40px;
      h3 {
        font-size: 40px;
        padding-top: 108px;
      }
    }
    .numbs {
      width: 860px;
      height: 100%;
      left: 220px;

      .el-card {
        float: left;
        border: none;
        margin-left: 90px;
        padding-top: 120px;
        .line {
          margin: 0 0 15px;
          width: 16px;
          height: 2px;
          background-color: #e3e3e3;
        }
        .name {
          font-size: 12px;
          color: #666;
        }
        .numb {
          font-weight: 600;
          font-size: 36px;
          color: rgba(68, 117, 253, 1);
          span {
            vertical-align: middle;
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>

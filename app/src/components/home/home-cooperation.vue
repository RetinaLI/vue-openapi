<template>
  <div class="cooperation">
    <part-title :cTitle="cTitle"></part-title>
    <div class="wrapper">
      <div class="item" v-for="(item, index) in coops" :key="index">
        <img :src="item[0]" alt="">
        <img class="no-grey" :src="item[1]" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import PartTitle from '../part-title';
export default {
  data () {
    return {
      cTitle: ['战略合作', '携手共赢，与全球合作伙伴共建车联网生态，齐力开创新业务，实现更快速成长'],
      coops: [
        [
          require('../../assets/images/home/c1-grey.png'),
          require('../../assets/images/home/c1.png')
        ],
        [
          require('../../assets/images/home/c2-grey.png'),
          require('../../assets/images/home/c2.png')
        ],
        [
          require('../../assets/images/home/c3-grey.png'),
          require('../../assets/images/home/c3.png')
        ],
        [
          require('../../assets/images/home/c4-grey.png'),
          require('../../assets/images/home/c4.png')
        ],
        [
          require('../../assets/images/home/c5-grey.png'),
          require('../../assets/images/home/c5.png')
        ],
        [
          require('../../assets/images/home/c6-grey.png'),
          require('../../assets/images/home/c6.png')
        ],
        [
          require('../../assets/images/home/c7-grey.png'),
          require('../../assets/images/home/c7.png')
        ],
        [
          require('../../assets/images/home/c8-grey.png'),
          require('../../assets/images/home/c8.png')
        ],
        [
          require('../../assets/images/home/c9-grey.png'),
          require('../../assets/images/home/c9.png')
        ],
        [
          require('../../assets/images/home/c10-grey.png'),
          require('../../assets/images/home/c10.png')
        ],
        [
          require('../../assets/images/home/c11-grey.png'),
          require('../../assets/images/home/c11.png')
        ],
        [
          require('../../assets/images/home/c12-grey.png'),
          require('../../assets/images/home/c12.png')
        ]
      ]
    };
  },
  components: {
    PartTitle
  }
};
</script>
<style lang="scss" scoped>
.cooperation {
  height: 580px;
  .part-title {
    padding-top: 90px;
  }
  .wrapper {
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      flex: 1;
      position: relative;
      margin-bottom: 35px;
      cursor: pointer;
      .no-grey {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity .5s;
      }
    }
    .item:hover .no-grey {
      opacity: 1;
    }
  }
}
</style>

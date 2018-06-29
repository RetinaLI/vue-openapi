<template>
<div>
  <banner></banner>
  <big-data></big-data>
  <data-getter></data-getter>
  <data-share></data-share>
  <cooperation></cooperation>
</div>
</template>

<script>
import Banner from '../../components/home/home-banner';
import BigData from '../../components/home/home-bigdata';
import DataGetter from '../../components/home/home-data-getter';
import DataShare from '../../components/home/home-data-share';
import Cooperation from '../../components/home/home-cooperation';

export default {
  name: 'index',
  metaInfo: {
    title: 'index'
  },
  components: {
    Banner,
    BigData,
    DataGetter,
    DataShare,
    Cooperation
  }
};
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

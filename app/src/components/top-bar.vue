<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
  <div id="topbar-wrap">
    <el-row type="flex" justify="space-between">
      <el-col :span="5">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <span class="line"></span>
          <span class="name">数据开放平台</span>
        </div>
      </el-col>
      <el-col :span="11">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-top"
          mode="horizontal"
          text-color="#fff"
          background-color="#24207A">
          <el-menu-item class="menu-item" index="1">
            首页
          </el-menu-item>
          <el-menu-item class="menu-item" index="2">
            数据服务
          </el-menu-item>
          <el-menu-item class="menu-item" index="3">
            车联网产品
          </el-menu-item>
          <el-menu-item class="menu-item" index="4">
            解决方案
          </el-menu-item>
          <el-menu-item class="menu-item" index="5">
            行业&amp;产品动态
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="7" class="operation clearfix">
        <div class="ctrl">
          <router-link to="" tag="span">控制台</router-link>
        </div>
        <div class="line"></div>
        <router-link to="/profile/setting" tag="div" class="login">
          登录
        </router-link>
        <router-link to="" tag="div" class="register">
          注册
        </router-link>
        <router-link to="" tag="div" class="login-clw">
          登录车联网平台
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'top-bar',
  data () {
    return {
      activeIndex: '1'
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
  },
  watch: {

  }
};
</script>
<style scoped lang="scss">
.font14 {
  font-size: 14px;
}
#topbar-wrap {
  width: 1200px;
  margin: auto;
  overflow: hidden;
  color: #fff;
  .logo > img {
    height: 20px;
    @extend .font14;
  }
  .logo > .name {
    @extend .font14;
  }
  .line {
    display: inline-block;
    width: 2px;
    height: 14px;
    background-color: rgb(29, 23, 226);
  }
  .el-menu-top {
    .menu-item {
      height: 64px;
      text-align: center;
      line-height: 65px;
      padding: 0 16px;
      color: #fff;
      @extend .font14;
    }
  }

  .operation {
    text-align: center;
    height: 100%;

    div {
      float: left;
      cursor: pointer;
      @extend .font14;
    }
    .ctrl > span {
      padding: 3px 5px;
      border: 1px solid rgba(277, 277, 277, 0.6);
      border-radius: 2px;
      @extend .font14;
    }
    .line {
      margin-left: 12px;
      margin-top: 25px;
    }
    .login {
      margin: 0 8px;
    }
    .register {
      margin-right: 44px;
    }
    .login-clw {
      background-color: #3145AE;
      padding: 0 11px;
    }
  }
}
</style>

import Vue from 'vue';
import Router from 'vue-router';

const OpsLayout = resolve => require(['components/ops-layout'], resolve);
const StaticLayout = resolve => require(['components/static-layout'], resolve);

const homeIndex = resolve => require(['@/pages/home/index'], resolve);
const homeProducts = resolve => require(['@/pages/home/products'], resolve);

const apiDetail = resolve => require(['@/pages/api/detail'], resolve);

const profileIndex = resolve => require(['@/pages/profile/index'], resolve);
const profileMdeditor = resolve => require(['@/pages/profile/mdeditor'], resolve);
const profileSetting = resolve => require(['@/pages/profile/setting'], resolve);

Vue.use(Router);

export default new Router({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {

  // },
  routes: [
    {
      path: '/',
      component: StaticLayout,
      children: [
        {
          path: '',
          component: homeIndex
        },
        {
          path: 'products',
          component: homeProducts
        }
      ]
    },
    {
      path: '/docs',
      component: StaticLayout,
      children: [
        {
          path: '',
          redirect: 'api/detail'
        },
        {
          path: 'api/detail',
          component: apiDetail
        }
      ]
    },
    {
      path: '/profile',
      component: OpsLayout,
      children: [
        {
          path: '',
          component: profileIndex
        },
        {
          path: 'mdeditor',
          component: profileMdeditor
        },
        {
          path: 'setting',
          component: profileSetting
        }
      ]
    }
  ]
});

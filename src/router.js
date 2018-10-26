/*
 * @Author: Cicy 
 * @Date: 2018-10-22 17:33:31 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-26 10:10:16
 */
import Vue from "vue"
import Router from "vue-router"
import store from './store'
import {
  getDataHide
} from 'api/api'
import {
  message
} from 'ant-design-vue';
Vue.use(Router);
const routes = [{
  path: '*',
  redirect: '/home'
}, {
  name: 'home',
  component: () =>
    import ('views/home/home'),
  meta: {
    title: '首页',
    requireAuth: true
  }
}, {
  name: 'service',
  component: () =>
    import ('views/service/service'),
  meta: {
    title: '服务介绍',
    requireAuth: true
  }
}, {
  name: 'computedPrice',
  component: () =>
    import ('views/computed-price/computed-price'),
  meta: {
    title: '价格估算',
    requireAuth: true
  }
}, {
  name: 'searchVoice',
  component: () =>
    import ('views/search-voice/search-voice'),
  meta: {
    title: '寻找声音',
    requireAuth: true
  }
}, {
  name: 'join',
  component: () =>
    import ('views/search-voice/search-voice'),
  meta: {
    title: '配音员入驻',
    requireAuth: true
  }
}, {
  name: 'selectRole',
  component: () =>
    import ('views/select-role/select-role'),
  meta: {
    title: '选择角色',
    requireAuth: true
  }
}];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
if (window.localStorage.getItem('user')) {
  let user = JSON.parse(window.localStorage.getItem('user'))
      store.commit('SET_LOGIN', user)
}
if (window.localStorage.getItem('status')) {
  let status = JSON.parse(window.localStorage.getItem('status'))
      store.commit('SET_STATUS', status)
}
const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    } else {
     return { x: 0, y: 0 }
    }
  }
});


router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
      if (store.state.user != null) {
          next();
      }
      else {
        getDataHide('/api/user/userinfo').then(res => {
          //window.alert(res.uid)
          store.commit('SET_LOGIN', res);
          next();
        }).catch(err => {
          if (err) {
              if(err.status == 401) {
                  store.commit('SET_LOGOUT');
                  store.commit('SET_LOGIN', 0)
                  next();
                  return;
              }
              if (err.message) {
                  message.warning(err.message);
              } else {
                  message.warning(err.error);
              }
          } else {
              message.warning('接口调试中');
          }
        })
      }
  }
  else {
      next();
  }
});

export default router
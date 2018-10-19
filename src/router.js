import Vue from "vue"
import Router from "vue-router"
import store from './store'
import {
  getDataHide
} from 'api/api'
Vue.use(Router);

const routes = [{
  path: '*',
  redirect: '/home'
}, {
  name: 'home',
  component: () =>
    import ('views/home/home'),
  meta: {
    title: '首页'
  }
}, {
  name: 'service',
  component: () =>
    import ('views/service/service'),
  meta: {
    title: '服务介绍'
  }
}, {
  name: 'computedPrice',
  component: () =>
    import ('views/computed-price/computed-price'),
  meta: {
    title: '价格估算'
  }
}, {
  name: 'searchVoice',
  component: () =>
    import ('views/search-voice/search-voice'),
  meta: {
    title: '寻找声音'
  }
}, {
  name: 'join',
  component: () =>
    import ('views/search-voice/search-voice'),
  meta: {
    title: '配音员入驻'
  }
}];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

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
  next();
});

export default router
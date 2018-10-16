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
/* if (window.sessionStorage.getItem('user')) {
  store.commit('SET_LOGIN', JSON.parse(window.sessionStorage.getItem('user')))
} */

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
    
  }
  next();
});

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
// import { getStore } from '@/utils/localStorage';
import Login from '@/views/login/index.vue';
import Home from '@/views/home/index.vue';
import UserCenter from '@/views/student/index.vue';
import Template from '@/layout/template.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登陆',
    },
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    component: Template,
    children: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: 'student',
      component: UserCenter
    },]
  },
];

const router = new VueRouter({
  routes,
});

// 路由守卫
/* router.beforeEach((to, from, next) => {
  const token = getStore('token');
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
}); */

export default router;

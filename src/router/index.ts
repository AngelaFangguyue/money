import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Nofound from '@/views/Nofound.vue';
import rrr from '@/views/rrr.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/rrr111',
    // name: 'Home',
    component: rrr
  },
  {
    path: '/Money',
    // name: 'Home',
    component: Money
  },
  {
    path: '/Lable',
    // name: 'About'，
    component: () => import(/* webpackChunkName: "about" */ '@/views/Lable.vue')
  },
  {
    path: '/Statistics',
    // name: 'Home',
    component: Statistics
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/*',
    // name: 'Home',
    component: Nofound
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;

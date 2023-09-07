import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/center/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  // 用户管理
  {
    path: '/user-manage/add',
    name: 'userAdd',
    component: () => import('../views/user-manage/userAdd.vue')
  },
  {
    path: '/user-manage/list',
    name: 'userList',
    component: () => import('../views/user-manage/userList.vue')
  },
  // 新闻管理
  {
    path: '/news-manage/add',
    name: 'newsAdd',
    component: () => import('../views/news-manage/newsAdd.vue')
  },
  {
    path: '/news-manage/list',
    name: 'newsList',
    component: () => import('../views/news-manage/newsList.vue')
  },
  // 产品管理
  {
    path: '/product-manage/add',
    name: 'productAdd',
    component: () => import('../views/product-manage/productAdd.vue')
  },
  {
    path: '/product-manage/list',
    name: 'productList',
    component: () => import('../views/product-manage/productList.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/notFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

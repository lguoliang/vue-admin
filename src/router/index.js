import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import nestedRouter from './modules/nested'

/* constantRoutes 没有权限要求的页面 */
export const routes = [
  {
    path: '/404',
    component: Layout,
    hidden: true
  }
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/views/Home.vue'),
  //   hidden: true
  // },
  // {
  //   path: '/layout',
  //   component: Layout
  // }
]

/* 需要根据用户角色动态加载的路由 */
export const asyncRoutes = [
  {
    path: '/Home',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'dashboard'
    }
  },
  nestedRouter,
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router

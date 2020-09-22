/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  name: 'Nested',
  component: Layout,
  meta: { title: '路由嵌套', icon: 'nested' },
  redirect: '/nested/menu1/menu1-1',
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      meta: { title: '菜单1' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          name: 'Menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          meta: { title: '菜单1-1' }
        },
        {
          path: 'menu1-2',
          name: 'Menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          meta: { title: '菜单1-2' },
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          children: [
            {
              path: 'menu1-2-1',
              name: 'Menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              meta: { title: '菜单1-2-1' }
            },
            {
              path: 'menu1-2-2',
              name: 'Menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              meta: { title: '菜单1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          name: 'Menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          meta: { title: '菜单1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '菜单2' }
    }
  ]
}

export default nestedRouter

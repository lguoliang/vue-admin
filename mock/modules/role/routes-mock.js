// Just a mock data
const constantRoutes = [
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/',
    component: 'layout/Layout',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: 'views/dashboard/index',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/Home',
    component: 'views/Home',
    hidden: true
  }
]

const asyncRoutes = [
  {
    path: '/nested',
    name: 'Nested',
    component: 'layout/Layout',
    meta: { title: '路由嵌套', icon: 'nested' },
    redirect: '/nested/menu1/menu1-1',
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: 'demo/nested/menu1/index', // Parent router-view
        meta: { title: '菜单1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: 'demo/nested/menu1/menu1-1',
            meta: { title: '菜单1-1' }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: 'demo/nested/menu1/menu1-2',
            meta: { title: '菜单1-2' },
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                component: 'demo/nested/menu1/menu1-2/menu1-2-1',
                meta: { title: '菜单1-2-1' }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                component: 'demo/nested/menu1/menu1-2/menu1-2-2',
                meta: { title: '菜单1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            component: 'demo/nested/menu1/menu1-3',
            meta: { title: '菜单1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: 'demo/nested/menu2/index',
        meta: { title: '菜单2' }
      }
    ]
  },
  {
    name: 'Permission',
    path: '/permission',
    redirect: '/permission/page',
    component: 'layout/Layout',
    meta: { title: '权限测试页', icon: 'lock', roles: ['admin', 'editor'] },
    children: [
      {
        name: 'PagePermission',
        path: 'page',
        component: 'demo/permission/page',
        meta: { title: '页面权限', roles: ['admin'] }
      },
      {
        name: 'DirectivePermission',
        path: 'directive',
        component: 'demo/permission/directive',
        meta: { title: '指令权限' }
      },
      {
        name: 'RolePermission',
        path: 'role',
        component: 'demo/permission/role',
        meta: { title: '角色权限', roles: ['admin'] }
      }
    ]
  },
  {
    path: 'external-link',
    component: 'layout/Layout',
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: '外链', icon: 'link' }
      }
    ],
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}

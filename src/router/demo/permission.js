import Layout from '@/layout'

export default {
  name: 'Permission',
  path: '/permission',
  redirect: '/permission/page',
  component: Layout,
  meta: { title: '权限测试页', icon: 'lock', roles: ['admin', 'editor'] },
  children: [
    {
      name: 'PagePermission',
      path: 'page',
      component: () => import('@/demo/permission/page'),
      meta: { title: '页面权限', roles: ['admin'] }
    },
    {
      name: 'DirectivePermission',
      path: 'directive',
      component: () => import('@/demo/permission/directive'),
      meta: { title: '指令权限' }
    },
    {
      name: 'RolePermission',
      path: 'role',
      component: () => import('@/demo/permission/role'),
      meta: { title: '角色权限', roles: ['admin'] }
    }
  ]
}

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/bidding',
    children: [
      {
        path: 'bidding',
        name: 'bidding',
        component: () => import('@/views/bidding/index'),
        meta: { title: '竞价推广', }
      },
      {
        path: '/brand',
        name: 'brand',
        component: () => import('@/views/brand/index'),
        meta: { title: '品牌推广', }
      },
      {
        path: '/source',
        name: 'source',
        component: () => import('@/views/source/index'),
        meta: { title: '素材', }
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '报表', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '账户报表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '账户报表', }
          },
        ]
      },
      {
        path: '/property',
        name: 'property',
        component: () => import('@/views/property/index'),
        meta: { title: '资产', }
      },
      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/views/tool/index'),
        meta: { title: '工具', },
        children: [
          {
            path: 'comment',
            name: 'comment',
            component: () => import('@/views/tool/comment'),
            meta: { title: '评论内容', }
          },
          {
            path: 'empty',
            name: 'toolEmpty',
            component: () => import('@/views/tool/empty'),
            meta: { title: '评论内容', }
          },
        ]
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import('@/views/finance/index'),
        meta: { title: '财务', },
        children: [
          {
            path: 'wallet',
            name: 'wallet',
            component: () => import('@/views/finance/wallet'),
            meta: { title: '资金钱包', }
          },
          {
            path: 'account',
            name: 'financeAccount',
            component: () => import('@/views/finance/account'),
            meta: { title: '财务流水', }
          },
          {
            path: 'recharge',
            name: 'recharge',
            component: () => import('@/views/finance/recharge'),
            meta: { title: '充值记录', }
          },
          {
            path: 'swiftcode',
            name: 'swiftcode',
            component: () => import('@/views/finance/swiftcode'),
            meta: { title: '汇款码记录', }
          },
          {
            path: 'bond',
            name: 'bond',
            component: () => import('@/views/finance/bond'),
            meta: { title: '保证金缴纳记录', }
          },
        ]
      },
      {
        path: '/empty',
        name: 'empty',
        component: () => import('@/views/components/empty'),
        meta: { title: '空页面', }
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history', // 去掉url中的#
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

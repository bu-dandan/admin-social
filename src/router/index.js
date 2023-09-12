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
    hidden: true,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '工作台', icon: 'el-icon-pie-chart' }
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '动态', icon: 'el-icon-mobile' },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '动态列表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '新手推荐', }
          },
        ]
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '用户管理', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '会员权益', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '用户列表', }
          },
        ]
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '话题', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '话题列表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '话题分类', }
          },
        ]
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '文章', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '文章列表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '文章分类', }
          },
        ]
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '科普', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '科普列表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '科普分类', }
          },
        ]
      },
      {
        path: 'bidding',
        name: 'bidding',
        component: () => import('@/views/bidding/index'),
        meta: { title: 'CP列表', }
      },
      {
        path: '/brand',
        name: 'brand',
        component: () => import('@/views/brand/index'),
        meta: { title: '排行榜', }
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '客服管理', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '即时会话', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '历史会话', }
          },
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '客服列表', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '客服分组', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '客服自动回复', }
          },
        ]
      },
      {
        path: '/source',
        name: 'source',
        component: () => import('@/views/source/index'),
        meta: { title: '代理商', }
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '财务', },
        children: [
          {
            path: 'account',
            name: 'account',
            component: () => import('@/views/report/account'),
            meta: { title: '订单管理', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '交易概况', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '代理商待结算', }
          },
          {
            path: 'empty',
            name: 'reportEmpty',
            component: () => import('@/views/report/empty'),
            meta: { title: '代理商历史佣金', }
          },
        ]
      },
      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/views/tool/index'),
        meta: { title: '运营管理', },
        children: [
          {
            path: 'comment',
            name: 'comment',
            component: () => import('@/views/tool/comment'),
            meta: { title: '背景列表', }
          },
          {
            path: 'empty',
            name: 'toolEmpty',
            component: () => import('@/views/tool/empty'),
            meta: { title: '背包列表', }
          },
          {
            path: 'comment',
            name: 'comment',
            component: () => import('@/views/tool/comment'),
            meta: { title: '礼物列表', }
          },
          {
            path: 'empty',
            name: 'toolEmpty',
            component: () => import('@/views/tool/empty'),
            meta: { title: '装扮列表', }
          },
          {
            path: 'comment',
            name: 'comment',
            component: () => import('@/views/tool/comment'),
            meta: { title: '动态列表', }
          },
          {
            path: 'empty',
            name: 'toolEmpty',
            component: () => import('@/views/tool/empty'),
            meta: { title: '举报列表', }
          },
          {
            path: 'comment',
            name: 'comment',
            component: () => import('@/views/tool/comment'),
            meta: { title: '趣味问题', }
          },
          {
            path: 'empty',
            name: 'toolEmpty',
            component: () => import('@/views/tool/empty'),
            meta: { title: '人格测试', }
          },
        ]
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import('@/views/finance/index'),
        meta: { title: '设置', },
        children: [
          {
            path: '/finance/wallet',
            name: 'wallet',
            component: () => import('@/views/finance/wallet'),
            meta: { title: '员工管理', }
          },
          {
            path: 'account',
            name: 'financeAccount',
            component: () => import('@/views/finance/account'),
            meta: { title: '角色管理', }
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

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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '工作台', icon: 'el-icon-pie-chart' }
      },
      {
        path: '/moments',
        name: 'moments',
        component: () => import('@/views/moments/index'),
        meta: { title: '动态', icon: 'el-icon-files' },
        children: [
          {
            path: '/moments/list',
            name: 'momentsList',
            component: () => import('@/views/moments/list'),
            meta: { title: '动态列表', }
          },
          {
            path: '/moments/recommend',
            name: 'momentsRecommend',
            component: () => import('@/views/moments/recommend'),
            meta: { title: '新手推荐', }
          },
        ]
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: '/user/benefits',
            name: 'userBenefits',
            component: () => import('@/views/user/benefits'),
            meta: { title: '会员权益', }
          },
          {
            path: '/user/list',
            name: 'userList',
            component: () => import('@/views/user/list'),
            meta: { title: '用户列表', }
          },
        ]
      },
      {
        path: '/topic',
        name: 'topic',
        component: () => import('@/views/topic/index'),
        meta: { title: '话题', icon: 'el-icon-collection-tag' },
        children: [
          {
            path: '/topic/list',
            name: 'topicList',
            component: () => import('@/views/topic/list'),
            meta: { title: '话题列表', }
          },
          {
            path: '/topic/class',
            name: 'topicClass',
            component: () => import('@/views/topic/class'),
            meta: { title: '话题分类', }
          },
        ]
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article/index'),
        meta: { title: '文章', icon: 'el-icon-document' },
        children: [
          {
            path: '/article/list',
            name: 'articleList',
            component: () => import('@/views/article/list'),
            meta: { title: '文章列表', }
          },
          {
            path: '/article/class',
            name: 'articleClass',
            component: () => import('@/views/article/class'),
            meta: { title: '文章分类', }
          },
        ]
      },
      {
        path: '/science',
        name: 'science',
        component: () => import('@/views/science/index'),
        meta: { title: '科普', icon: 'el-icon-reading' },
        children: [
          {
            path: '/science/list',
            name: 'scienceList',
            component: () => import('@/views/science/list'),
            meta: { title: '科普列表', }
          },
          {
            path: '/science/class',
            name: 'scienceClass',
            component: () => import('@/views/science/class'),
            meta: { title: '科普分类', }
          },
        ]
      },
      {
        path: '/cpList',
        name: 'cpList',
        component: () => import('@/views/cpList/index'),
        meta: { title: 'CP列表', icon: 'el-icon-male' }
      },
      {
        path: '/rank',
        name: 'rank',
        component: () => import('@/views/rank/index'),
        meta: { title: '排行榜', icon: 'el-icon-data-analysis' }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/index'),
        meta: { title: '客服管理', icon: 'el-icon-service' },
        children: [
          {
            path: '/service/chat',
            name: 'serviceChat',
            component: () => import('@/views/service/chat'),
            meta: { title: '即时会话', }
          },
          {
            path: '/service/history',
            name: 'serviceHistory',
            component: () => import('@/views/service/history'),
            meta: { title: '历史会话', }
          },
          {
            path: '/service/list',
            name: 'serviceList',
            component: () => import('@/views/service/list'),
            meta: { title: '客服列表', }
          },
          {
            path: '/service/class',
            name: 'serviceClass',
            component: () => import('@/views/service/class'),
            meta: { title: '客服分组', }
          },
          {
            path: '/service/reply',
            name: 'serviceReply',
            component: () => import('@/views/service/reply'),
            meta: { title: '客服自动回复', }
          },
        ]
      },
      {
        path: '/agent',
        name: 'agent',
        component: () => import('@/views/agent/index'),
        meta: { title: '代理商', icon: 'el-icon-truck' }
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import('@/views/finance/index'),
        meta: { title: '财务', icon: 'el-icon-coin' },
        children: [
          {
            path: '/finance/order',
            name: 'financeOrder',
            component: () => import('@/views/finance/order'),
            meta: { title: '订单管理', }
          },
          {
            path: '/finance/trade',
            name: 'financeTrade',
            component: () => import('@/views/finance/trade'),
            meta: { title: '交易概况', }
          },
          {
            path: '/finance/account',
            name: 'financeAccount',
            component: () => import('@/views/finance/account'),
            meta: { title: '代理商待结算', }
          },
          {
            path: '/finance/history',
            name: 'financeHistory',
            component: () => import('@/views/finance/history'),
            meta: { title: '代理商历史佣金', }
          },
        ]
      },
      {
        path: '/operate',
        name: 'operate',
        component: () => import('@/views/operate/index'),
        meta: { title: '运营管理', icon: 'el-icon-help' },
        children: [
          {
            path: '/operate/background',
            name: 'background',
            component: () => import('@/views/operate/background'),
            meta: { title: '背景列表', }
          },
          {
            path: '/operate/knapsack',
            name: 'knapsack',
            component: () => import('@/views/operate/knapsack'),
            meta: { title: '背包列表', }
          },
          {
            path: '/operate/gift',
            name: 'gift',
            component: () => import('@/views/operate/gift'),
            meta: { title: '礼物列表', }
          },
          {
            path: '/operate/style',
            name: 'style',
            component: () => import('@/views/operate/style'),
            meta: { title: '装扮列表', }
          },
          {
            path: '/operate/moment',
            name: 'operateMoment',
            component: () => import('@/views/operate/moment'),
            meta: { title: '动态列表', }
          },
          {
            path: '/operate/report',
            name: 'operateReport',
            component: () => import('@/views/operate/report'),
            meta: { title: '举报列表', }
          },
          {
            path: '/operate/questions',
            name: 'questions',
            component: () => import('@/views/operate/questions'),
            meta: { title: '趣味问题', }
          },
          {
            path: '/operate/test',
            name: 'operateTest',
            component: () => import('@/views/operate/test'),
            meta: { title: '人格测试', }
          },
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: () => import('@/views/system/index'),
        meta: {
          title: '设置', icon: 'el-icon-setting'
        },
        children: [
          {
            path: '/system/staff',
            name: 'staffManage',
            component: () => import('@/views/system/staff'),
            meta: { title: '员工管理', }
          },
          {
            path: '/system/role',
            name: 'roleManage',
            component: () => import('@/views/system/role'),
            meta: { title: '角色管理', }
          },
        ]
      },
      {
        path: '/empty',
        name: 'empty',
        component: () => import('@/views/components/empty'),
        hidden: true,
        meta: { title: '空页面', }
      },
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
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

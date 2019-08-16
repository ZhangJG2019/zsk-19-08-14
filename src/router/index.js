import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('/page/index.vue')
const Login = () => import('/page/Login/login.vue')
const register = () => import('/page/Login/register.vue')
const forgetpwd = () => import('/page/Login/forgetpwd.vue')
const Home = () => import('/page/Home/home.vue')
const Gene = () => import('/page/Home/gene.vue')
const order = () => import('/page/Order/order.vue')
const user = () => import('/page/User/user.vue')
const information = () => import('/page/User/children/information.vue')
const taskhall = () => import('/page/Taskhall/taskhall.vue')
const Search = () => import('/page/Search/search.vue')
const RefreshSearch = () => import('/page/Refresh/refreshsearch.vue')
const RefreshGoods = () => import('/page/Refresh/refreshgoods.vue')

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Index,
    name: 'index',
    redirect: '/home',
    children: [{
        path: 'home',
        component: Home
      },
      {
        path: '/refreshgoods',
        name: 'refreshgoods',
        component: RefreshGoods
      }
      ]
  },
  {
    path: '/gene',
    name: 'gene',
    component: Gene
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/forgetpwd',
    name: 'forgetpwd',
    component: forgetpwd
  },
  {
    path: '/refreshsearch',
    name: 'refreshsearch',
    component: RefreshSearch
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    children: [{
        path: '/search',
        name: 'search',
        component: Search
      }]
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    redirect: '/user/information',
    children: [{
        path: 'information',
        name: '用户资料',
        component: information
      }]
  },
  {
    path: '/taskhall',
    name: 'taskhall',
    component: taskhall
  },
  {
    path: '*',
    redirect: '/home'
  }
  ]
})

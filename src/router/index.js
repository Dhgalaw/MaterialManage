import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import('../views/home/Home')
const Manage = () => import('../views/Manage')
const User = () => import('../views/User')
const Reserveinfm = () => import('../views/Reserveinfm')
const RegisterTable = () => import('../views/RegisterTable')
const SelectItem = () => import('../views/SelectItem')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/manage',
    component: Manage
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/reserveinfm',
    component: Reserveinfm
  },
  {
    path: '/register',
    component: RegisterTable
  },
  {
    path: '/selectItem',
    component: SelectItem
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

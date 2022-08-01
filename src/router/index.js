import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeCook from '../components/HomeCook'
import AboutCook from '../components/AboutCook'
import ContactCook from '../components/ContactCook'
import BlogCook from '../components/BlogCook'
import {COOKIES} from "@/constants";
import VueCookies from "vue-cookies";

const Login = () => import('../views/pages/auth/login/LoginForm');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'routes.home',
    component:  HomeCook,
    meta: {requiresAuth: true}
  },
  {
    path: '/about',
    name: 'routes.about',
    component:  AboutCook,
    meta: {requiresAuth: true}
  },
  {
    path: '/contact',
    name: 'routes.contact',
    component:  ContactCook,
    meta: {requiresAuth: true}
  },
  {
    path: '/blog',
    name: 'routes.blog',
    component:  BlogCook,
    meta: {requiresAuth: true}
  },
  {
    path: '/auth',
    name: 'routes.auth',
    component: Login,
    redirect: {name: 'routes.auth.login'},
    meta: {requiresAuth: false},
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = VueCookies.get(COOKIES.accessToken)

  if (!to.meta.requiresAuth) {
    if (to.name !== 'routes.auth.login') return next()
    if (to.name === 'routes.auth.login' && accessToken) return next({name: 'routes.home'})
  }

  if (to.meta.requiresAuth && accessToken) return next()
  if (to.name === 'routes.auth.login') return next();

  return next({name: 'routes.auth.login'})
})

export default router

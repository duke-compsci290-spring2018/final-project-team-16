import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import Home from '@/pages/Home'
import Company from '@/pages/Company'
import IdeaFund from '@/pages/IdeaFund'
import Dealflow from '@/pages/Dealflow'
import News from '@/pages/News'
import Profile from '@/pages/Profile'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Home/Company/:companyID',
      name: 'Company',
      component: Company,
      meta: {
        requiresAuth: true
      },
      props: true,
    },
    {
      path: '/Portfolio',
      name: 'FullPortfolio',
      component: IdeaFund,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Dealflow',
      name: 'Dealflow',
      component: Dealflow,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta: {
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach((to ,from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (!requiresAuth && currentUser) next('Home')
  else next()
})

export default router

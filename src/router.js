import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('./views/Education.vue')
    },
    {
      path: '/work_experience',
      name: 'Work Experience',
      component: () => import('./views/WorkExperience.vue')
    },
  ]
})

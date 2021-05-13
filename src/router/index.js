import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import TaskView from '../views/TaskView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
    props: (route) => ({ tasklist: parseInt(route.query.tasklist) || 0 })
  },
  {
    path: '/task/:id',
    name: 'TaskView',
    component: TaskView,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

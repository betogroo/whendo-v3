import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import DoneTasks from '../views/DoneTasks.vue'
import TaskListTasks from '../views/TaskListTasks.vue'
import TaskView from '../views/TaskView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tasks',
    alias: '/',
    name: 'Tasks',
    component: Tasks,
    props: (route) => ({ tasklist: route.params.tasklist || 'all' })
  },
  {
    path: '/tasks/done',
    name: 'DoneTasks',
    component: DoneTasks,
    props: (route) => ({ tasklist: route.params.tasklist || 'done' })
  },
  {
    path: '/tasks/:tasklist',
    name: 'TaskListTasks',
    component: TaskListTasks,
    props: (route) => ({ tasklist: route.params.tasklist || 'error' })
  },
  {
    path: '/:tasklist',
    name: 'TasksBy',
    component: Tasks,
    props: true
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

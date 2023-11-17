import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 

    {
      path: '/allUsers',
      name: 'allUsers',
      component: () => import('../components/allUsers.vue'),
      meta: {
       title: 'allUsers',
      }
    },

    {
      path: '/myUsers',
      name: 'myUsers',
      component: () => import('../components/myUsers.vue'),
      meta: {
       title: 'myUsers',
      }
    },

    {
      path: '/changeUser',
      name: 'changeUser',
      component: () => import('../components/changeUser.vue'),
      meta: {
       title: 'changeUser',
      }
    },
























  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

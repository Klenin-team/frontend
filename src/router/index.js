import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: () => import('../views/TournamentsView.vue'),
    },
    {
      path: '/tournament/:tournament_id',
      name: 'tournament',
      component: () => import('../views/TournamentViev.vue'),
      children: [
        {
          path: '',
          name: 'nothing',
          component: () => import('../views/tournaments/Nothing.vue'),
        },
        {
          path: ':task_id',
          name: 'task',
          component: () => import('../views/tournaments/Task.vue'),
        }
      ] 
    },
  ]
})

export default router

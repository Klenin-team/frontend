import { defineStore } from 'pinia'
import { auth, register } from './actions/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access: localStorage.getItem("access-token"),
  }),
  actions: {
    auth,
    register
  }
})

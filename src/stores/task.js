import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => {
    return { taskListClosed: false }
  },
  actions: {
    toggleMenu() {
      this.taskListClosed = !this.taskListClosed
    }
  }
})

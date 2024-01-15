import { defineStore } from 'pinia'
import { renderedTaskText, humanReadableTime, humanReadableMemory } from './getters/task'
import { getTask, getTasks } from './actions/task'

export const useTaskStore = defineStore('task', {
  state: () => {
    return { 
      tournament_name: "",
      tasksList: [
         {
           id: "",
           name: "Скоро вы увидите задачи",
           verdict: ""
         },
      ],
      currentTask: {
        title: "Загрузка",
        verdict: "",
        text: `Сейчас всё загрузим`,
      },
    }
  },
  getters: {
    renderedTaskText,
    humanReadableTime,
    humanReadableMemory
  },
  actions: {
    getTask,
    getTasks
  }
})

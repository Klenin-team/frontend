import { defineStore } from 'pinia'
import { renderedTaskText, humanReadableTime, humanReadableMemory } from './getters/task'
import { getTask, getTasks, getVerdictForTask, getVerdictsForTasks,
         sendSolution } from './actions/task'

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
      verdicts: [
        {
          verdict: "WA",
          time: 1000,
          memory: 123456,
          test: {
            input: "meow",
            output: "meow"
          },
          compilation_output: "not meow",
          runtime_output: "meow meow"
        },
        {
          verdict: "TL",
          time: 60005,
          memory: 999999999
        },
        {
          verdict: "OK",
          time: 2,
          memory: 64
        }
      ]
    }
  },
  getters: {
    renderedTaskText,
    humanReadableTime,
    humanReadableMemory
  },
  actions: {
    getTask,
    getTasks,
    getVerdictForTask,
    getVerdictsForTasks,
    sendSolution
  }
})

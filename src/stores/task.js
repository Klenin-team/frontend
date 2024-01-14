import { defineStore } from 'pinia'
import { renderedTaskText, humanReadableTime, humanReadableMemory } from './getters/task'

export const useTaskStore = defineStore('task', {
  state: () => {
    return { 
      taskListClosed: false,
      editorClosed: true,

      tasksList: [
         {
           id: "1",
           name: "Wow, such an easy task",
           verdict: "OK"
         },
         {
           id: "2",
           name: "Task with wrong tests",
           verdict: "WA"
         },
         {
           id: "3",
           name: "Very long task",
           verdict: "TL"
         },
         {
           id: "4",
           name: "Massive task",
           verdict: "ML"
         },
         {
           id: "5",
           name: "RE",
           verdict: "RE"
         },
         {
           id: "6",
           name: "task, that cannot be solved with python",
           verdict: "CE"
         },
         {
           id: "7",
           name: "cats-like task",
           verdict: "SE"
         }
      ],
      currentTask: {
        title: "Meowmeowmeow",
        verdict: "OK",
        text: `
# Statement
meow meow *meow meow* meow meow meow meow meow, __meow meow__ meow:

$meow = (\\frac{meow}{meow})^{meow}$

meow meow \`meow\` or $meow$ meow
# Input file format
\`\`\`
meow meow meow meow
\`\`\`
# Output file format
meow \`mew\` meow $meow$ meow **meow**
# Examples
| Input | Output |
| --- | --- |
| meow | meow |

| Input | Output |
| --- | --- |
| meow | meow |
`,
        memory_limitation: 134217728,
        time_limitation: 60000,
        input_file: 'Стандартный ввод',
        output_file: 'input.txt'
      },
      
      selectedLanguage: "",
      code: "",
      clipboardAvaliable: Boolean(navigator.clipboard)
    }
  },
  getters: {
    renderedTaskText: renderedTaskText,
    humanReadableTime: humanReadableTime,
    humanReadableMemory
  },
  actions: {
    toggleMenu() {
      this.taskListClosed = !this.taskListClosed
    },
    toggleEditor() {
      this.editorClosed = !this.editorClosed
    }
  }
})

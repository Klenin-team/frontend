import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return { 
      code: "",
      taskListClosed: false,
      editorClosed: true,
      selectedLanguage: "",
      clipboardAvaliable: Boolean(navigator.clipboard),

      verdictsClosed: true,

      filtersClosed: true,
      filters: {
        "OK": true,
        "WA": true,
        "RE": true,
        "TL": true,
        "ML": true,
        "CE": true,
        "SE": true
      }
    }
  },
  actions: {
    toggleMenu() {
      this.taskListClosed = !this.taskListClosed
    },
    toggleEditor() {
      this.editorClosed = !this.editorClosed
    },
    toggleFilters() {
      this.filtersClosed = !this.filtersClosed
    },
    toggleVerdicts() {
      this.verdictsClosed = !this.verdictsClosed
    },
  }
})

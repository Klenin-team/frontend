import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return { 
      code: "",
      taskListClosed: false,
      editorClosed: true,
      selectedLanguage: "",
      clipboardAvaliable: Boolean(navigator.clipboard)
    }
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

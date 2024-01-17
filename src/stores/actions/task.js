import { useAuthStore } from "../auth"
import { useLayoutStore } from "../layout"

async function getTask(task_id) {
  const authStore = useAuthStore()
  const layoutStore = useLayoutStore()

  this.currentTask = {
    title: "Сейчас всё будет...",
    verdict: "",
    text: `Надо только подождать`,
  }

  let response = await fetch(`${import.meta.env.VITE_API_URL}/problem/${task_id}`)
  let json = await response.json()

  this.currentTask = json

  if (!authStore.access) {
    return
  }

  this.getVerdictsForTasks()
  response = await fetch(`${import.meta.env.VITE_API_URL}/solutions/${this.tasksList[i].id}`, {
    headers: {
      "Authorization": `Bearer ${authStore.access}` 
    }
  })
  json = await response.json()

  layoutStore.code = json[0]["code"]
}

async function getTasks (tournament_id) {
  console.log(tournament_id)
  this.tournament_name = "Задачи грузятся..."

  let response = await fetch(`${import.meta.env.VITE_API_URL}/contests/${tournament_id}`)
  let json = await response.json()

  this.tournament_name = json["title"]
  this.tasksList = []
  json.problems.forEach((problem) => {
    this.tasksList.push({
      id: problem["id"],
      name: problem["title"],
      verdict: ""
    })
  })
  this.getVerdictsForTasks()
}

async function getVerdictsForTasks() {
  const authStore = useAuthStore()
  for (let i in this.tasksList) {
    let response = await fetch(`${import.meta.env.VITE_API_URL}/solutions/${this.tasksList[i].id}`, {
      headers: {
        "Authorization": `Bearer ${authStore.access}` 
      }
    })
    let json = await response.json()
    this.tasksList.verdict = getFirstError(json[0]["solutions"])["verdict"]
  }
}

async function getVerdictForTask(task_id) {
  const authStore = useAuthStore()
  let response = await fetch(`${import.meta.env.VITE_API_URL}/solutions/${this.tasksList[i].id}`, {
    headers: {
      "Authorization": `Bearer ${authStore.access}` 
    }
  })
  let json = await response.json()
  this.tasksList.verdict = json[0].solutions
}

async function sendSolution() {
  const layoutStore = useLayoutStore()
  layoutStore.sendingDisabled = true

  // TODO: sending

  layoutStore.editorClosed = true
  layoutStore.verdictsClosed = false
  layoutStore.sendingDisabled = false
}

export { getTask, getTasks, getVerdictForTask, getVerdictsForTasks, sendSolution }


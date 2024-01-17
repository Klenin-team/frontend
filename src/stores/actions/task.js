import { useAuthStore } from "../auth"

async function getTask(task_id) {
  console.log(task_id)
  this.currentTask = {
    title: "Сейчас всё будет...",
    verdict: "",
    text: `Надо только подождать`,
  }

  let response = await fetch(`${import.meta.env.VITE_API_URL}/problem/${task_id}`)
  let json = await response.json()

  this.currentTask = json
  this.getVerdictsForTasks()
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
    this.tasksList.verdict = json[0]["solutions"][0]["verdict"]
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
  this.tasksList.verdict = json[0]
}

export { getTask, getTasks, getVerdictForTask, getVerdictsForTasks }

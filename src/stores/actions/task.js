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

export { getTask, getTasks }

import { useTournamentsStore } from '@/stores/tournaments.js'

async function getTournaments() {
  let tournamentsStore = useTournamentsStore() 

  let response = await fetch(`${import.meta.env.VITE_API_URL}/contests`)
  let json = await response.json()
  this.tournaments = []
  json.forEach((tournament) => {
    this.tournaments.push({
      id: tournament["id"],
      title: tournament["title"],
      start_date: "",
      end_date: "",
      ended: false
    })
  })
}

export { getTournaments }

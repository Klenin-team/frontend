import { defineStore } from 'pinia'
import { getTournaments } from './actions/tournaments'

export const useTournamentsStore = defineStore('tournaments', {
  state: () => {
    return {
      tournaments: [
        {
          id: "",
          title: "Список контестов грузится",
          start_date: "скоро",
          end_date: "очень скоро",
          official: false,
          ended: true
        }
      ],
      filters: {
        my: false,
        name: ""
      }
    }
  },
  actions: {
    getTournaments
  }
})

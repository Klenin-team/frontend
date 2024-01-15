function getTournaments() {
  console.log(this.filters)
  this.tournaments = [
    {
      id: "meowmeowmeow",
      title: "Официальный контест",
      start_date: "29.09.23 8.30",
      end_date: "18.19.25 34.25",
      official: true,
      ended: false
    },
    {
      id: "meowmeowmeowmeow",
      title: "Не официальный контест",
      start_date: "29.09.23 8.30",
      end_date: "18.19.25 34.25",
      official: false,
      ended: false
    },
    {
      id: "meowmeowmeowmeowmeow",
      title: "Закончившийся контест",
      start_date: "29.09.23 8.30",
      end_date: "18.19.25 34.25",
      official: false,
      ended: true
    }
  ]
}

export { getTournaments }

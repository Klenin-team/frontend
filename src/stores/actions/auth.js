async function auth(login, password) {
  let response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": login,
      "password": password
    })
  })
  if (response.ok == false) {
    return false
  }
  let json = await response.json()
  this.access = json["access_token"]
  localStorage.setItem("access_token", this.access)
  return true
}

async function register(login, password, real_name) {
  let response = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": login,
      "password": password,
      "real_name": real_name
    })
  })
  if (response.ok == false) {
    return false
  }
  return await this.auth(login, password)
}

export { auth, register }

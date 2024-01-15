<script setup>
  import { useAuthStore } from '@/stores/auth'
  let authStore = useAuthStore()

  function checkAuth() {
    authStore.auth(login.value, password.value)
  }

  const login = defineModel("login")
  const password = defineModel("password")
</script>
<style scoped>
  @import '../assets/login.css';
</style>

<template>
  <div class="container">
    <div class="login">
      <div class="welcome">
        <h1>Добро пожаловать!</h1>
        <div id="logo"></div>
        <a href="" class="button fefu">
          Войти через ДВФУ
        </a>
      </div>

      <div class="sign-in-lines">
        <div id="line"></div>
        <p>Или войдите по паролю</p>
        <div id="line"></div>
      </div>

      <div class="form">
        <div class="group text">
          <label for="email">Адрес электронной почты</label>
          <input type="email" id="email" v-model="login">
        </div>
        <div class="group text">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="group">
          <input type=submit value="Войти" @click="checkAuth" class="button" />
        </div>
        <p class="register-link">
          или
          <router-link to="/register">зарегистрируйтесь</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

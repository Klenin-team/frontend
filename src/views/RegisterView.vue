<script setup>
  import { useAuthStore } from '@/stores/auth'
  let authStore = useAuthStore()

  function register() {
    authStore.register(login.value, password.value, real_name.value)
  }

  const login = defineModel("login")
  const password = defineModel("password")
  const real_name = defineModel("real_name")
</script>
<style scoped>
  @import '../assets/login.css';
</style>

<template>
  <div class="container">
    <div class="login register">
      <div class="welcome">
        <h1>Зарегистрируйтесь</h1>
      </div>
  
  
      <div class="form">
        <div class="group text">
          <label for="name">Имя</label>
          <input type="text" id="name" v-model="real_name">
        </div>
  
        <div class="group text">
          <label for="email">Адрес электронной почты</label>
          <input type="email" id="email" v-model="login">
        </div>
        <div class="group text">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="group">
          <input type="submit" value="Зарегистрироваться" class="button" @click="register">
        </div>
        <p class="register-link">
          или
          <router-link to="/login">войдите</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

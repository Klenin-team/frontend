<script setup>
  import '../assets/login.css'
</script>

<template>
  <div class="login register">
    <div class="welcome">
      <h1>Зарегистрируйтесь</h1>
    </div>


    <div class="form">
      <div class="group text">
        <label for="name">Имя</label>
        <input type="text" id="name">
      </div>

      <div class="group text">
        <label for="email">Адрес электронной почты</label>
        <input type="email" id="email">
      </div>
      <div class="group text">
        <label for="password">Пароль</label>
        <input type="password" id="password">
      </div>
      <div class="group">
        <input type="submit" value="Зарегистрироваться" class="button">
      </div>
      <p class="register-link">
        или
        <router-link to="login">войдите</router-link>
      </p>
    </div>
  </div>
</template>

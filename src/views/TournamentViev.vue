<script setup>
  import { ref } from 'vue'
  let tasks = [
    {
      id: "1",
      name: "Wow, such an easy task",
      verdict: "OK"
    },
    {
      id: "2",
      name: "Task with wrong tests",
      verdict: "WA"
    },
    {
      id: "3",
      name: "Very long task",
      verdict: "TL"
    },
    {
      id: "4",
      name: "Massive task",
      verdict: "ML"
    },
    {
      id: "5",
      name: "RE",
      verdict: "RE"
    },
    {
      id: "6",
      name: "task, that cannot be solved with python",
      verdict: "CE"
    },
    {
      id: "7",
      name: "cats-like task",
      verdict: "SE"
    }
  ];
</script>

<style scoped>
  @import '../assets/tournament/nav.css';
  @import '../assets/tournament/layout.css';
</style>

<template>
  <div id="container">
    <nav :class="{ mobile_hidden: $route.params.task_id }">
      <h1>{{ $route.params.tournament_id }}</h1>
      <button>Filters</button>
      <ul>
        <li v-for="task in tasks" :class="task.verdict" class="task">
          <router-link :to="task.id">{{ task.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view :class="{ mobile_hidden: !$route.params.task_id }"/>
  </div>
</template>

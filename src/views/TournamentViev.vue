<script setup>
  import { storeToRefs } from 'pinia'
  import { useTaskStore } from '@/stores/task.js'

  const taskStore = useTaskStore()
  let { tasksList } = storeToRefs(taskStore);
</script>

<style scoped>
  @import '../assets/tournament/nav.css';
  @import '../assets/tournament/layout.css';
</style>

<template>
  <div id="container" :class="{ fullwidth_container: taskStore.taskListClosed }">
    <nav :class="{ mobile_hidden: $route.params.task_id, hidden: taskStore.taskListClosed }" class="taskList">
      <h1>{{ $route.params.tournament_id }}</h1>
      <button>Filters</button>
      <ul>
        <li v-for="task in tasksList" :class="task.verdict" class="task" >
          <router-link :to="task.id">{{ task.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view :class="{ mobile_hidden: !$route.params.task_id }"/>
  </div>
</template>

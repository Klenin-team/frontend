<script setup>
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  import { useTaskStore } from '@/stores/task.js'
  import { useLayoutStore } from '@/stores/layout.js'

  const taskStore = useTaskStore()
  const layoutStore = useLayoutStore()

  let { tasksList } = storeToRefs(taskStore)

  const route = useRoute()

  taskStore.getTask(route.params.task_id)
  taskStore.getTasks(route.params.tournament_id)
</script>

<style scoped>
  @import '../assets/tournament/nav.css';
  @import '../assets/tournament/layout.css';
</style>

<template>
  {{ $route.params.task_id }}
  <div id="container" :class="{ fullwidth_container: layoutStore.taskListClosed }">
    <nav :class="{ mobile_hidden: $route.params.task_id, hidden: layoutStore.taskListClosed }" class="taskList">
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

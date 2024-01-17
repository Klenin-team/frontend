<script setup>
  import { computed, ref } from 'vue'

  import { useTaskStore } from '@/stores/task.js'
  import { useLayoutStore } from '@/stores/layout.js'
  import { storeToRefs } from 'pinia'

  import { toHumanReadableTime, toHumanReadableMemory } from '@/functions/toHumanReadable'
  import { getFirstError } from '@/functions/getFirstError'

  import TestInformation from '@/components/TestInformation.vue'

  let taskStore = useTaskStore()
  let layoutStore = useLayoutStore()

  let { verdicts } = storeToRefs(taskStore)

  let closedTests = ref(Array(true * verdicts.value.length).fill(true))

  const firstError = computed(() => {
    return getFirstError(verdicts.value)
  })
</script>

<style scoped>
  @import '@/assets/tournament/verdicts.css';
  @import '@/assets/tournament/popup.css';
</style>

<template>
  <div class="invisible-background" @click="() => { layoutStore.toggleVerdicts() }"></div>
  <div class="verdicts-popup-container">
    <button class="close" @click="() => { layoutStore.toggleVerdicts() }">x</button>
    <div class="verdicts-container">
      <div v-if="firstError">
        <h1>Первая ошибка</h1>
        <TestInformation :verdict="firstError" />
      </div>
      <h1>Все тесты</h1>
      <ul>
        <li v-for="(verdict, i) in verdicts" :class="verdict.verdict"
              @click="() => { closedTests[i] = !closedTests[i] }">
          <span class="time-and-memory">
            {{ toHumanReadableTime(verdict.time, taskStore.currentTask.time_limitation) }},
            {{ toHumanReadableMemory(verdict.memory, taskStore.currentTask.memory_limitation) }}
          </span>
          <TestInformation v-if="verdict.verdict != 'OK'"
              :verdict="verdict" :closed="closedTests[i]" />
        </li>
      </ul>
    </div>
  </div>
  
</template>

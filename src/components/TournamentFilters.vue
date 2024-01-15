<script setup>
  import { useLayoutStore } from '@/stores/layout.js'
  const layoutStore = useLayoutStore()

  let verdicts = [
    {
      verdict: "OK",
      name: "Зачтено"
    },
    {
      verdict: "WA",
      name: "Неправильный ответ"
    },
    {
      verdict: "RE",
      name: "Ошибка выполнения"
    },
    {
      verdict: "TL",
      name: "Лимит времени"
    },
    {
      verdict: "ML",
      name: "Лимит памяти"
    },
    {
      verdict: "CE",
      name: "Ошибка компиляции"
    },
    {
      verdict: "SE",
      name: "Остальные"
    },
  ]
</script>

<style scoped>
  @import '@/assets/tournament/filters.css';
</style>

<template>
  <div class="invisible-background" @click="() => { layoutStore.toggleFilters() }"></div>
  <div class="filters">
    <div class="checkbox-container" v-for="verdict in verdicts">
      <input type="checkbox" :id="verdict.verdict" v-model="layoutStore.filters[verdict.verdict]" />
      <label :for="verdict.verdict">
        <span class="verdict-name">{{ verdict.name }}</span>
        <span :class="verdict.verdict"></span>
      </label>
    </div>
  </div>
</template>

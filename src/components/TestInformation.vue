<script setup>
  const props = defineProps(['verdict', 'closed'])

  function copy(code) {
    navigator.clipboard.writeText(code)
  }
</script>

<style scoped>
  @import '@/assets/tournament/test-information.css';
</style>

<template>
  <div class="info-inline" :class="{ hidden: closed }">
    {{ opened }}
    <div v-if="verdict.test">
      <div class="container" v-if="verdict.test.input">
        <h2>Ввод</h2>
        <code @click="copy(verdict.test.input)">
          {{ verdict.test.input }}
        </code>
      </div>
      <div class="container" v-if="verdict.test.output">
        <h2>Ожидаемый вывод</h2>
        <code @click="copy(verdict.test.output)">
          {{ verdict.test.output }}
        </code>
      </div>
    </div>
    <div class="container" v-if="verdict.compilation_output">
      <h2>Вывод компилятора</h2>
      <code @click="copy(verdict.compilation_output)">
        {{ verdict.compilation_output }}
      </code>
    </div>
    <div class="container" v-if="verdict.runtime_output">
      <h2>Вывод программы</h2>
      <code @click="copy(verdict.runtime_output)">
        {{ verdict.runtime_output }}
      </code>
    </div>
  </div>
</template>

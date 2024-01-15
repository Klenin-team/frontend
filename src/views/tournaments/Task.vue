<script setup>
  import { onMounted, ref } from 'vue'

  import Editor from '@/components/Editor.vue'

  import { storeToRefs } from 'pinia'
  import { useTaskStore } from '@/stores/task.js'
  import { useLayoutStore } from '@/stores/layout.js'

  import "katex/dist/katex.min.css"

  let taskStore = useTaskStore()
  let layoutStore = useLayoutStore()

  let { 
    currentTask,
    renderedTaskText, 
    humanReadableTime, 
    humanReadableMemory,
  } = storeToRefs(taskStore)
  let {
    editorClosed,
    clipboardAvaliable
  } = storeToRefs(layoutStore)

  onMounted(() => {
    document.querySelectorAll('table').forEach((table) => {
      let header = table.rows[0].children
      let firstRow = table.rows[1].children
      for (let i = 0; i < header.length; i++) {
        header[i].onclick = () => {
          navigator.clipboard.writeText(firstRow[i].innerHTML)
        }
      }
    })

    document.addEventListener("keydown", async (e) => {
      if (e.ctrlKey && e.keyCode == 86) { // ctrl-v
        navigator.clipboard.read().then(async (e) => {
          console.log(e)
          e.forEach(async (item) => {
            let blob = await item.getType("text/plain")
            layoutStore.code = await blob.text()
            layoutStore.editorClosed = false
          })
        }).catch((err) => {
          console.log(err)
          layoutStore.clipboardAvaliable = false
        })
      } else if (e.keyCode == 27) { // Escape
        layoutStore.editorClosed = true;
      }
    })
  })

  function copyCode() {
    navigator.clipboard.writeText(layoutStore.code)
  }
  
</script>

<style>
  @import '../../assets/tournament/task.css';
</style>
<style scoped>
  @import '../../assets/tournament/task-navbar.css';
</style>

<template>
  <article class="task">
    <header>
      <router-link class="mobile-only button" to=".">Назад</router-link>
      <button class="desktop-only" @click="() => { layoutStore.toggleMenu() }">Задачи</button>
      <div :class="currentTask.verdict"></div>
      <h1>{{ $route.params.task_id }}</h1>
      <div id="align-right" class="big-desktop-only">
        <button @click="() => { copyCode() }">Копировать код</button>
        <button @click="layoutStore.toggleEditor">Открыть редактор</button>
      </div>
    </header>
    <div class="info">
      <p v-if="currentTask.memory_limitation">
        Ограничение памяти: {{ humanReadableTime }}
      </p>
      <p v-if="currentTask.time_limitation">
        Ограничение времени: {{ humanReadableMemory }}
      </p>
      <p v-if="currentTask.input_file">Входной файл: {{ currentTask.input_file }}</p>
      <p v-if="currentTask.output_file">Выходной файл: {{ currentTask.output_file }}</p>
    </div>
    <div v-html="renderedTaskText"></div>
    <footer>
        <p v-if="clipboardAvaliable" class="big-desktop-only send-on-ctrl-v">Нажмите Ctrl-V, чтобы отправить решние</p>
        <button class="button not-big-desktop-only editor-mobile-button"
          @click="layoutStore.toggleEditor">Редактор</button>
    </footer>
  </article>
  <div :class="{ hidden: editorClosed }">
    <Editor/>
  </div>
</template>

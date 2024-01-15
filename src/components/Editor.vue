<script setup>
  import { computed, reactive } from 'vue'
  import { Codemirror } from 'vue-codemirror'

  import { catppuccin } from '@/assets/codemirror-theme.js'

  import { useLayoutStore } from '@/stores/layout.js';
  import { storeToRefs } from 'pinia'

  import { python } from '@codemirror/lang-python'
  import { cpp } from '@codemirror/lang-cpp'
  import { rust } from '@codemirror/lang-rust'
  import { StreamLanguage } from '@codemirror/language'
  import { pascal } from '@codemirror/legacy-modes/mode/pascal'

  let layoutStore = useLayoutStore()
  let { selectedLanguage, code } = storeToRefs(layoutStore)

  const syntaxHighlighter = computed(() => {
    if (selectedLanguage.value === undefined) {
      return null
    }
    switch (selectedLanguage.value) {
      case "python":
      case "pypy":
        return python
      case "gcc":
      case "g++":
      case"clang":
      case "clang++":
        return cpp
      case "rust":
        return rust
      case "pascal":
        return StreamLanguage.define(pascal)
    }
  })

  const config = computed(() => {
    let out = []
    if (syntaxHighlighter.value != null) {
      out.push(syntaxHighlighter.value())
    }
    out.push(catppuccin)
    return out
  })
</script>
<style scoped>
  @import '@/assets/tournament/editor.css';
</style>
<template>
  <div class="invisible-background" @click="() => { layoutStore.toggleEditor() }"></div>
  <div class="editor-container">
    <button class="close" @click="() => { layoutStore.toggleEditor() }">x</button>
    <codemirror 
      class="editor"
      :extensions="config"
      v-model="code"
      placeholder="Сюда писать код" />
    <div class="submit-menu">
      <select v-model="selectedLanguage" @change="changeSyntaxHighlighter">
        <option value="">выберете компилятор</option>
        <option value="python">Python</option>
        <option value="pypy">PyPy</option>
        <option value="gcc">GNU C</option>
        <option value="g++">GNU C++</option>
        <option value="clang">Clang</option>
        <option value="clang++">Clang++</option>
        <option value="rust">Rust</option>
        <option value="pascal">Pascal</option>
      </select>
      <label for="select-what-send">или выберете файл</label>
      <input type="file" id="select-what-send" />
      <button class="send">Отправить</button>
    </div>
  </div>
</template>

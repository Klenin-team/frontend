<script setup>
  import { onMounted } from 'vue'

  import { marked } from 'marked'
  import katex from 'katex'
  import "katex/dist/katex.min.css"

  let task = {
    title: "Meowmeowmeow",
    verdict: "OK",
    text: `
# Statement
meow meow *meow meow* meow meow meow meow meow, __meow meow__ meow:

$meow = (\\frac{meow}{meow})^{meow}$

meow meow \`meow\` or $meow$ meow
# Input file format
\`\`\`
meow meow meow meow
\`\`\`
# Output file format
meow \`mew\` meow $meow$ meow **meow**
# Examples
| Input | Output |
| --- | --- |
| meow | meow |

| Input | Output |
| --- | --- |
| meow | meow |
`,
    memory_limitation: 134217728,
    time_limitation: 60000,
    input_file: 'Стандартный ввод',
    output_file: 'input.txt'
  }

  onMounted(() => {
    document.querySelectorAll('table').forEach((table) => {
      console.log(table.rows[0].children)
      let header = table.rows[0].children
      let firstRow = table.rows[1].children
      for (let i = 0; i < header.length; i++) {
        console.log(firstRow[0].innerHTML, i)
        header[i].onclick = () => {
          navigator.clipboard.writeText(firstRow[i].innerHTML)
        }
      }
    })
  })

  function bytesConverter () {
    let bytes = task.memory_limitation
    const sizes = [
      'Б',
      'КиБ',
      'МиБ',
      'Гиб'
    ]
    let size_pointer = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      size_pointer += 1;
    } 
    return `${bytes} ${sizes[size_pointer]}`
  }

  function timeConverter() {
    let milliseconds = task.time_limitation
    const sizes = [
      {
        size: 1,
        name: 'мс'
      },
      {
        size: 1000,
        name: 'сек.'
      },
      {
        size: 60,
        name: 'мин.'
      },
      {
        size: 60,
        name: 'ч.'
      },
    ]
    let size_pointer = 0;
    while (milliseconds >= sizes[size_pointer + 1].size) {
      milliseconds /= sizes[size_pointer + 1].size
      size_pointer += 1
    }
    return `${milliseconds} ${sizes[size_pointer].name}`
  }

  function compiledMarkdown () {
    let rendered = marked(task.text, { sanitize: true })
    let math_regex = /\$(.*)\$/
    while (math_regex.test(rendered)) {
      let math = rendered.match(math_regex)[1]
      let renderd_math = katex.renderToString(math)
      rendered = rendered.replace(math_regex, renderd_math)
    }
    return rendered;
  }
</script>

<style>
  @import '../../assets/tournament/task.css';
</style>

<template>
  <article class="task">
    <header>
      <router-link to="." class="mobile_only">Back</router-link>
      <h1 :class="task.verdict">{{ $route.params.task_id }}</h1>
    </header>
    <div class="info">
      <p v-if="task.memory_limitation">
        Ограничение памяти: {{ bytesConverter() }}
      </p>
      <p v-if="task.time_limitation">
        Ограничение времени: {{ timeConverter() }}
      </p>
      <p v-if="task.input_file">Входной файл: {{ task.input_file }}</p>
      <p v-if="task.output_file">Выходной файл: {{ task.output_file }}</p>
    </div>
    <p v-html="compiledMarkdown()"></p>
  </article>
</template>

import { marked } from 'marked'
import katex from 'katex'

function renderedTaskText() {
  if (this.currentTask === undefined) {
    return ""
  }
  let rendered = marked(this.currentTask.text, { sanitize: true })
  let math_regex = /\$(.*)\$/
  while (math_regex.test(rendered)) {
    let math = rendered.match(math_regex)[1]
    let renderd_math = katex.renderToString(math)
    rendered = rendered.replace(math_regex, renderd_math)
  }
  return rendered; 
}

function humanReadableMemory () {
  let bytes = this.currentTask.memory_limitation
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

function humanReadableTime() {
  let milliseconds = this.currentTask.time_limitation
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

export { renderedTaskText, humanReadableTime, humanReadableMemory }

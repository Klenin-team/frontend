import { marked } from 'marked'
import katex from 'katex'

import { toHumanReadableTime, toHumanReadableMemory } from '@/functions/toHumanReadable'

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
  return toHumanReadableMemory(this.currentTask.memory_limitation, null)
}

function humanReadableTime() {
  return toHumanReadableTime(this.currentTask.time_limitation, null)
}

export { renderedTaskText, humanReadableTime, humanReadableMemory }

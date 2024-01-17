function toHumanReadableTime(milliseconds: number, limit: number | null) {
  if (limit != null && milliseconds > limit) {
    return `>${toHumanReadableTime(limit, null)}`
  }
  const sizes: Array<{size: number, name: string}> = [
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
  return `${Math.round(milliseconds * 100) / 100} ${sizes[size_pointer].name}`
}

function toHumanReadableMemory(bytes: number, limit: number | null) {
  if (limit != null && bytes > limit) {
    return `>${toHumanReadableMemory(limit, null)}`
  }
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
  return `${Math.round(bytes * 1024) / 1024} ${sizes[size_pointer]}`
}

export { toHumanReadableTime, toHumanReadableMemory }

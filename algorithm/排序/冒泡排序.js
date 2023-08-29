
function sort(list) {
  if (!Array.isArray(list)) throw Error('list is not array')
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[i], list[j]] = [list[j], list[i]]
      }
    }
  }
  console.log(list)
  return list
}

sort([3, 2, 1, 6, 4, 4, 6, 8, 0])
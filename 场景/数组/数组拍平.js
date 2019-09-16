function flat(ary) {
  return ary.reduce((pre, cur) => Array.isArray(cur) ? [...pre, ...flat(cur)] : pre.concat(cur), [])
}
console.log(flat([12, 2, [3, 2, [7, 4, 9]], [1, 11], 9]))




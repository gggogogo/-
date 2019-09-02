function majorityElement(ary) {
  let cur, count = 0
  for (let val of ary) {
    if (count === 0) {
      cur = val
    }
    if (cur === val) {
      count++
    }
    else {
      count--
    }
  }
  return cur
}
/**
 * @description: 考虑有不存在出现次数超过一半的数
 * @param {type} 
 * @return: 
 */
function MoreThanHalfNum_Solution(ary) {
  // write code here
  let cur, count = 0,
    len = ary.length
  for (let val of ary) {
    if (count === 0) {
      cur = val
    }
    if (cur === val) {
      count++
    }
    else {
      count--
    }
  }
  count = 0
  ary.forEach(item => {
    if (item === cur) count++
  })
  return count > (len / 2) ? cur : 0
}
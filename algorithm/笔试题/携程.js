/**
 * @description: 最长公共连续子串
 * @param {type} 
 * @return: 
 */
function longestSubStrLength(s1, s2) {

  let ss = "",
    L1 = s1.length,
    L2 = s2.length;
  if (L1 > L2) {
    let s3 = s1;
    (s1 = s2), (s2 = s3), (L1 = s2.length);
  }
  for (let j = L1; j > 0; j--)
    for (let i = 0; i <= L1 - j; i++) {
      ss = s1.substr(i, j);
      if (s2.indexOf(ss) >= 0) return ss.length;
    }
  return 0;
}
/**
 * @description: 版本号比较
 * @param {type} 
 * @return: 
 */
function sortVersion(s1, s2) {
  let arr1 = s1.split("."),
    arr2 = s2.split("."),
    len = Math.min(arr1.length, arr2.length),
    i = 0,
    diff = 0
  while (i < len) {
    diff = parseInt(arr1[i]) - parseInt(arr2[i]);
    if (diff != 0) {
      break;
    }
    i++;
  }
  return diff < 0 ? s1 + "," + s2 : s2 + "," + s1;
}

/**
 * @description: 乘积最大子序列 leetcode 152
 * @param {type} 
 * @return: 
 */
function maxProduct(str) {
  let nums = str.split(' '),
    max = min = nums[0],
    maxres = max;
  for (let i = 1; i < nums.length; i++) {
    let tmp = max * nums[i];
    max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]));
    min = Math.min(nums[i], Math.min(tmp, min * nums[i]));

    maxres = Math.max(maxres, max);
  }
  return maxres;
}
console.log(maxProduct('2 0 3 0 2 0 4'))
console.log(maxProduct(' 1'))
console.log(maxProduct(' '))
console.log(maxProduct(' -1 '))
console.log(maxProduct(' -1 -2 -3'))
console.log(maxProduct(' -1 4'))
// let str = '2 3 -2 4'
// console.log(str.trim().split(' '))



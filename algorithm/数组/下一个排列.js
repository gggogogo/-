/*
 * @Author: GuoWei
 * @Date: 2019-09-23 10:05:21
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-23 10:15:58
 * @Description: leetcode 31
 * 
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

var nextPermutation = function (nums) {
  let len = nums.length
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      return nums.slice(0, i - 1).concat(nums.slice(i - 1, len).sort((a, b) => {
        return b - a
      }))
    }
  }

  return nums.sort()
};
// console.log(
//   nextPermutation([3, 2, 1])
// )
console.log(
  nextPermutation([1, 2, 3])
)
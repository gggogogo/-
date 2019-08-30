/*
 * @Author: GuoWei
 * @Date: 2019-08-29 20:53:00
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-29 21:43:10
 * @Description: leetcode 53. Maximum Subarray
 */
var maxSubArray = function (nums) {
  let max = cur = nums[0],
    len = nums.length
  for (let i = 1; i < len; i++) {
    cur = cur > 0 ? cur + nums[i] : nums[i]
    max = max > cur ? max : cur
  }
  return max
};
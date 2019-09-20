/*
 * @Author: GuoWei
 * @Date: 2019-09-16 15:02:53
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-16 15:13:16
 * @Description:  盛最多水的容器
 */

// 双指针法,O(n)
function maxArea(height) {
  let max = 0,
    start = 0,
    end = height.length - 1

  while (start < end) {
    max = Math.max(max, (end - start) * Math.min(height[start], height[end]))
    // 每次计算完移动较小的一个边
    if (height[start] < height[end]) {
      start++
    } else {
      end--
    }
  }
  return max
}


// 暴力
var maxArea = function (height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    }
  }
  return max
};
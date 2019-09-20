/*
 * @Author: GuoWei
 * @Date: 2019-09-20 14:45:03
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-09-20 15:01:55
 * @Description: 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）,
 *  其中有些元素出现两次而其他元素出现一次。
*  找到所有出现两次的元素。
*  你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 */
var findDuplicates = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
     debugger
    let index = Math.abs(nums[i])
    if (nums[index - 1] > 0) {
      nums[index - 1] = -nums[index - 1]
    } else {
      res.push(index)
    }
  }
  return res
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
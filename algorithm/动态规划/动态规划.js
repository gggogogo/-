/*
 * @Author: GuoWei
 * @Date: 2019-06-04 20:43:21
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-06-05 10:03:34
 * @Description:  动态规划——01背包问题 
 * @Reference： https://blog.csdn.net/mu399/article/details/7722810
 */


 /**
  * 
  * @param {NUmber} maxWeight 表示背包最大重量
  * @param {Array} weights 单个元素重量数组
  * @param {Array} values 单个元素价值数组
  */
function fn(maxWeight, weights, values) {
    let len = weights.length,                      // 元素数量
        arr = new Array(len * (maxWeight + 1))     // 采用一维数组来承载规划结果
    arr.fill(0)
    for (let i = 1; i <= maxWeight; i++) {  // 表示最大重量
        for (let j = 0; j < len; j++) {     // 元素数量
            if (weights[j] > i) {
                if (j !== 0) {
                    arr[len * i + j] = arr[len * i + j - 1]
                }
            }
            else {
                if (j === 0) {
                    arr[len * i + j] = values[j]
                } else {
                    arr[len * i + j] = Math.max(arr[len * i + j - 1], arr[len * (i - weights[j]) + j - 1] + values[j])
                }
            }
        }
    }
    return arr.pop()
}
weights = [2, 2, 6, 5, 4]  
// weights = [4,5,6,2,2]
values = [6, 3, 5, 4, 6]
// values = [6,4,5,3,6]
maxWeight = 10


fn(1000, [200,600,100,180,300,450], [6,10,3,4,5,8])   // 21
/*
 * @Author: GuoWei
 * @Date: 2019-08-30 21:38:05
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-30 21:39:09
 * @Description: 对异步的函数进行限流，减轻服务器压力（网易云音乐总监面）
 */
async function limitWrapper(func, maxAllowedRequest) {
  const queue = [];
  const counter = 0;
  return async function () {
    if (counter > maxAllowedRequest) {
      await new Promise((resolve, reject) => {
        queue.push(resolve);
      });
    }
    counter++;
    const result = await func();
    counter--;
    queue.shift()();
    return result;
  }
}
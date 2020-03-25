/*
 * @Author: GuoWei
 * @Date: 2020-03-25 15:18:04
 * @LastEditors: GuoWei
 * @LastEditTime: 2020-03-25 17:12:38
 * @Description: https://zh.javascript.info/js-animation
 */

function animate({ timing, draw, duration }) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 计算当前动画状态
    let progress = timing(timeFraction);

    draw(progress); // 绘制

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

// 各种时序函数
const timing = {

  //线性
  linear(timeFraction) {
    return timeFraction;
  },

  //2次函数
  quad(timeFraction) {
    return Math.pow(timeFraction, 2)
  },

  // 圆弧
  circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
  },
  // 往返
  back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
  },
  //弹跳
  bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  },
  //伸缩
  elastic(x, timeFraction) {
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
  }
}

//  示例：let bounceEaseOut = makeEaseOut(bounce);

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2;
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2;
  }
}





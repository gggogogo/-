/*
 * @Author: GuoWei
 * @Date: 2020-07-29 23:55:02
 * @LastEditors: GuoWei
 * @LastEditTime: 2020-07-30 00:39:12
 * @Description: 
 */ 

import module1 from './module2.js'
console.log(module1)

const { fn1, fn2 } = module1
fn1();
fn2();

export {}
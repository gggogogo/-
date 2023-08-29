/*
 * @Author: GuoWei
 * @Date: 2021-11-19 00:22:48
 * @LastEditors: GuoWei
 * @LastEditTime: 2021-11-19 00:26:06
 * @Description: 
 */

var fork = require('child_process').fork

var cpus = require('os').cpus()

for (var i = 0;i < cpus.length;i++) {
  fork('./worker.js')
 }
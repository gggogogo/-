/*
 * @Author: GuoWei
 * @Date: 2021-11-19 00:20:33
 * @LastEditors: GuoWei
 * @LastEditTime: 2021-11-19 00:24:27
 * @Description: 
 */

var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(Math.round((1 + Math.random()) * 1000))
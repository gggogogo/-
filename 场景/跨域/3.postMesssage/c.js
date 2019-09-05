const koa = require('koa');
const Route = require('koa-route')
const path = require('path')
const serve = require('koa-static')
let app = new koa();

app.use(serve(path.join(__dirname)))
app.use(Route.get('/test', ctx => {
  ctx.response.type = 'json'
  ctx.response.body = {
    message: 1
  }
}))
app.listen(5000);
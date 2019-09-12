
const koa = require('koa');
const Route = require('koa-route')
const path = require('path')
const serve = require('koa-static')
let app = new koa();

app.use(serve(path.join(__dirname)))
app.use(Route.get('/test', ctx => {
  ctx.response.type = 'json'
  ctx.response.body = {
    message: 'Congratulations!  you get the data'
  }
}))
app.listen(4000);
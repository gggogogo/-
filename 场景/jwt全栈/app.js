const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-bodyparser')
const jwt = require('jsonwebtoken')
//bcrypt

let app = new Koa()
let router = new Router()

app.use(body())

const SECRET = 'LINCANCAN'
//错误处理

// 获取请求中的token
const auth = (ctx, next) => {
  //这一步为了拿到请求中的token
  let raw = String(ctx.headers.authorization).split(' ').pop()
  let {id}=jwt.verify(raw,SECRET)
  ctx.user = await User.findById(id)
  next()
}
//注册
router.post('/api/register', async ctx => {
  let { username, password } = ctx.request.body
  let user = await user.create({
    username,
    password
  })
  //?
  ctx.body = user
})
//登陆
router.post('/api/login', async ctx => {
  let { username, password } = ctx.request.body
  let user = await user.findOne({
    username
  })
  //用户不存在
  if (!user) {

  }
  //验证密码
  if (!bcrype.compareSync(password, user.password)) {
    return ctx.body({
      status: 401,
      message: '用户名或密码错误'
    })
  }

  let token = jwt.sign({
    id: String(user._id),
    exp: 67200
  }, SECRET)

  ctx.body = {
    status: 200,
    message: '登陆成功',
    toekn
  }
})

// 验证token
router.get('/api/', auth, async ctx => {
  ctx.body = ctx.user
})

app.use(router.routes())
app.listen(3000)
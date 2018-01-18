const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const routers = require('./routers/index')

// error handler
onerror(app)

// 连接mongodb数据库
mongoose.connect('mongodb://localhost:27017/koala-blog',{useMongoClient: true});

mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=>{
    console.log('MongoDB has connected');
});

mongoose.connection.on('error',()=>{
    console.log('MongoDB connected fail');
});

mongoose.connection.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

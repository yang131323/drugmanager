const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('nunjucks');

nunjucks.configure('/views', {
  autoescape: true,
  throwOnUndefined: true,
  watch: true
})

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/', async (ctx, next) => {
  console.log('hello word!');
  console.log('ctx: ', ctx);
  ctx.response.body = '<h1>医院药品进销管理系统</h1>';
  await next();
})

app.use(router.routes());

app.listen(3300);
console.log('Please open localhost:3300/')

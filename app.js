const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const { templating } = require('./template');
const controller = require('./controller');
const { staticFiles } = require('./staticFile')

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('hospital drug manager system start:' + ctx.request.url + ', method: ' + ctx.request.method + ', path: ' + ctx.path);
  await next();
})

app.use(bodyParser());

app.use(staticFiles('/static/', __dirname));

app.use(templating({
  autoescape: true,
  throwOnUndefined: true,
  noCache: true,
  watch: true
}));

app.use(controller());

app.listen(3300);
console.log('Please open localhost:3300/')

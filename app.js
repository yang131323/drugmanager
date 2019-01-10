const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const { templating } = require('./template');
const controller = require('./controller');
const { staticFiles } = require('./staticFile')

const app = new Koa();

/* 这是为了完成任务赶出来的demo，写的比较烂，有时间在整理重构
*  注意所有列表的“导出csv”按钮是在服务器端生成csv格式文件，对客户端并没有什么用处
*  因此为了修复此缺陷又在后面加了在客户端导出Excel的功能，
*  导出csv这个功能的主要文件涉及exportCsv.js和/routers/getData.js两个文件，在getData.js主要就是对export路径的处理
*/

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

const fs = require('fs');
const nunjucks = require('nunjucks');

const createEnv = function (path, {autoescape = true, throwOnUndefined = true, noCache = true, watch = true}) {
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path, {
    watch,
    noCache
  }), {
    autoescape,
    throwOnUndefined
  });
  return env;
};

const templating = function (opts, dir = 'views') {
  const ENV = createEnv(dir, opts);
  return async (ctx, next) => {
    ctx.render = function (view, model) {
      ctx.response.body = ENV.render(view, Object.assign({}, model));
      ctx.response.type = 'text/html';
    };
    await next();
  }
};

module.exports = { templating }
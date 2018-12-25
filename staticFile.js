const path = require('path');
const mime = require('mime');
const fs = require('fs');

const staticFiles = function (flag, dir) {
  console.log('flag: ' + flag + ', dir:' + dir);
  return async (ctx, next) => {
    const reqPath = ctx.request.path;
    if (reqPath.startsWith(flag)) {
      const rp = path.join(dir, reqPath);
      if (await fs.existsSync(rp)) {
        ctx.response.type = mime.lookup(reqPath);
        ctx.response.body = fs.readFileSync(rp, 'utf8');
      } else {
          ctx.response.status = 404;
          console.log('file not found');
      }
    }
    await next();
  };
}

module.exports = { staticFiles }
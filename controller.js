const fs = require('fs');

const addMapping = function (router, mapping) {
  try {
    for (let x in mapping) {
      if (x.startsWith('GET ')) {
        router.get(x.substr(4), mapping[x]);
      } else if (x.startsWith('POST ')) {
        router.post(x.substr(5), mapping[x]);
      } else if (x.startsWith('PUT ')) {
        router.put(x.substr(4), mapping[x]);
      } else if (x.startsWith('DELETE ')) {
        router.del(x.substr(7), mapping[x]);
      } else if (x.startsWith('PATCH ')) {
        router.patch(x.substr(6), mapping[x]);
      } else {
        throw new ('暂不支持该方法');
      }
    }
  } catch (e) {
    console.log('addMapping: ' + e.message);
  }
};

const addController = function (router, dir = 'routers') {
  try {
    const dire = __dirname + '/' + dir;
    fs.readdirSync(dire).filter((f) => {
      return f.endsWith('.js');
    }).forEach((x) => {
      const mapping = require(dire + '/' + x);
      addMapping(router, mapping);
    })
  } catch (e) {
    console.log('addController: ' + e.message);
  }
};

module.exports = function (dir) {
  const mapDir = dir || 'routers';
  const router = require('koa-router')();
  addController(router, mapDir);
  return router.routes();
}
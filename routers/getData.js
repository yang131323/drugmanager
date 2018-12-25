const indexPage = async (ctx, next) => {
  try {
    ctx.render('index.html', {});
    await next();
  } catch (e) {
    console.log('indexPage:' + e.message);
  }
};

const addPage = async (ctx, next) => {
  try {
    ctx.render('addDrug.html', {});
    await next();
  } catch (e) {
    console.log('addDfug:' + e.message);
  }
};

const expiredPage = async (ctx, next) => {
  try {
    ctx.render('expired.html', {});
    await next();
  } catch (e) {
    console.log('expiredPage:' + e.message);
  }
};

const outputPage = async (ctx, next) => {
  try {
    ctx.render('output.html', {});
    await next();
  } catch (e) {
    console.log('outputPage: ' + e.message);
  }
};

const purchasePage = async (ctx, next) => {
  try {
    ctx.render('purchase.html', {});
    await next();
  } catch (e) {
    console.log('purchasePage: ' + e.message);
  }
};

const storagePage = async (ctx, next) => {
  try {
    ctx.render('storage.html', {});
    await next();
  } catch (e) {
    console.log('storagePage: ' + e.message);
  }
};

module.exports = {
  'GET /reserve': indexPage,
  'GET /addDrug': addPage,
  'GET /expired': expiredPage,
  'GET /output': outputPage,
  'GET /purchase': purchasePage,
  'GET /storage': storagePage
}
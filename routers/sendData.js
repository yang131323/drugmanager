const { dealDrug, dealPurchase, dealSupplier } = require('../dataProcess');
const { Drug, Supplier, Store, Purchase, OutRecord } = require('../db');

const drugDatas = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    datas.price = Number(datas.price);
    datas.quantity = Number(datas.quantity);
    const {name, vender, specification, usag, edate, quantity:reserve, price} = datas;
    const data1 = dealDrug({name, vender, specification, usag, edate, reserve, price});
    await Drug.create(data1);
    const {linkman, phone, address} = datas;
    const data2 = dealSupplier({linkman, phone, address});
    await Supplier.create(data2);
    const {quantity, pdate} = datas;
    const data3 = dealPurchase({quantity, pdate});
    await Purchase.create(data3);
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('drugDatas: ' + e.message);
  }
};

const deleteDrug = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const drug = await Drug.findById(datas.id);
    await drug.destroy();
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
};

const updateDrug = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const drug = await Drug.findById(datas.id);
    delete datas.id;
    await drug.update(datas)
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
};

const deleteOutput = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const out = await OutRecord.findById(datas.id);
    await out.destroy();
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteOutput: ' + e.message);
  }
};

const updateOutput = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const out = await OutRecord.findById(datas.id);
    delete datas.id;
    await out.update(datas)
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
};

const deletePurchase = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const pur = await Purchase.findById(datas.id);
    await pur.destroy();
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteOutput: ' + e.message);
  }
};

const updatePurchase = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const pur = await OutRecord.findById(datas.id);
    delete datas.id;
    await pur.update(datas)
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
};

const deleteStore = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const store = await Store.findById(datas.id);
    await store.destroy();
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteOutput: ' + e.message);
  }
};

const updateStore = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const store = await Store.findById(datas.id);
    delete datas.id;
    await store.update(datas)
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
};

const saleDrug = async (ctx, next) => {
  try {
    const datas = ctx.request.query;
    const drug = await Drug.findById(datas.id);
    const content = { reserve: drug.dataValues.reserve - 1}
    await drug.update(content)
    ctx.response.status = 200;
    ctx.response.redirect('/reserve');
    await next();
  } catch (e) {
    ctx.response.status = 404;
    ctx.response.body = '<h1 style="margin: 8% 40% 0 40%;">网页丢失了！</h1>';
    console.log('deleteDrug: ' + e.message);
  }
}

module.exports = {
  'GET /drug/detail': drugDatas,
  'GET /delete/drug': deleteDrug,
  'GET /put/drug': updateDrug,
  'GET /delete/expire': deleteDrug,
  'GET /put/expire': updateDrug,
  'GET /delete/output': deleteOutput,
  'GET /put/output': updateOutput,
  'GET /delete/purchase': deletePurchase,
  'GET /put/purchase': updatePurchase,
  'GET /delete/store': deleteStore,
  'GET /put/store': updateStore,
  'GET /sale/drug': saleDrug
}
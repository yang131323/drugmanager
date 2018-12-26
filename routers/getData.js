const { Drug, Supplier, Store, Purchase, OutRecord } = require('../db');
const { DRUG, OUTPUT, STORE, PURCHASE, EXPIRED } = require('../tableMap');
const { convert } = require('../common');

const indexPage = async (ctx, next) => {
  try {
    const drugs = await Drug.findAll();
    const datas = [];
    for (let i = 0; i < drugs.length; i++) {
      let data = drugs[i].dataValues;
      const drug = await Supplier.findOne({
        where: {id: data.sno},
        attributes: ['linkman', 'address', 'phone']
      });
      data['edate'] = convert(data['edate'], 'yyyymmdd', 'hhmmss')._global;
      datas.push(Object.assign(data, drug.dataValues, {del: '删除', edit: '编辑'}));
    }
    ctx.render('index.html', {data: datas, label: DRUG.label, order: DRUG.order, title: '库存状态'});
    await next();
  } catch (e) {
    console.log('indexPage:' + e.message);
  }
};

const addPage = async (ctx, next) => {
  try {
    ctx.render('addDrug.html', {title: '添加药品'});
    await next();
  } catch (e) {
    console.log('addDfug:' + e.message);
  }
};

const expiredPage = async (ctx, next) => {
  try {
    const outputs = await OutRecord.findAll();
    const datas = [];
    for (let i = 0; i < outputs.length; i++) {
      let data = outputs[i].dataValues;
      const drug = await Drug.findOne({
        where: {id: data.dno},
        attributes: ['id', 'name', 'vender', 'specification']
      });
      data['odate'] = convert(data['odate'], 'yyyymmdd', 'hhmmss')._global;
      datas.push(Object.assign(data, drug.dataValues, {del: '删除', edit: '编辑'}));
    }
    ctx.render('expired.html', {data: datas, label: EXPIRED.label, order: EXPIRED.order, title: '过期药品'});
    await next();
  } catch (e) {
    console.log('expiredPage:' + e.message);
  }
};

const outputPage = async (ctx, next) => {
  try {
    const outputs = await OutRecord.findAll();
    const datas = [];
    for (let i = 0; i < outputs.length; i++) {
      let data = outputs[i].dataValues;
      const drug = await Drug.findOne({
        where: {id: data.dno},
        attributes: ['name', 'vender', 'specification']
      });
      data['odate'] = convert(data['odate'], 'yyyymmdd', 'hhmmss')._global;
      datas.push(Object.assign(data, drug.dataValues, {del: '删除', edit: '编辑'}));
    }
    ctx.render('output.html', {data: datas, label: OUTPUT.label, order: OUTPUT.order, title: '出库记录'});
    await next();
  } catch (e) {
    console.log('outputPage: ' + e.message);
  }
};

const purchasePage = async (ctx, next) => {
  try {
    const purchases = await Purchase.findAll();
    const datas = [];
    for (let i = 0; i < purchases.length; i++) {
      let data = purchases[i].dataValues;
      const drug = await Drug.findOne({
        where: {id: data.dno},
        attributes: ['name', 'vender', 'specification']
      });
      const sup = await Supplier.findOne({
        where: {id: data.sno},
        attributes: ['linkman', 'address', 'phone']
      });
      data['pdate'] = convert(data['pdate'], 'yyyymmdd', 'hhmmss')._global;
      datas.push(Object.assign(data, drug.dataValues, sup.dataValues, {del: '删除', edit: '编辑'}));
    }
    console.log('purchases:', datas);
    ctx.render('purchase.html', {data: datas, label: PURCHASE.label, order: PURCHASE.order, title: '采购记录'});
    await next();
  } catch (e) {
    console.log('purchasePage: ' + e.message);
  }
};

const storagePage = async (ctx, next) => {
  try {
    const stores = await Store.findAll();
    const datas = [];
    for (let i = 0; i < stores.length; i++) {
      let data = stores[i].dataValues;
      const drug = await Drug.findOne({
        where: {id: data.dno},
        attributes: ['name', 'vender', 'specification']
      });
      data['sdate'] = convert(data['sdate'], 'yyyymmdd', 'hhmmss')._global;
      datas.push(Object.assign(data, drug.dataValues, {del: '删除', edit: '编辑'}));
    }
    console.log('storage:', datas);
    ctx.render('storage.html', {data: datas, label: STORE.label, order: STORE.order, title: '入库记录'});
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
const fs = require('fs');

let DRUGID = Number('1000000106');
let SUPPLIERID = Number('0000000036');
let OUTRECORDID = Number('15457852321766');
let STOREID = Number('16457852321766');
let PURCHASEID = Number('2018082905');
const MAXNUM = 899999;
const MINNUM = 100000;

const basePath = 'F:\\TestList\\log\\';

const fileResult = fs.createWriteStream(basePath + 'log.txt', {encoding: 'utf8', autoClose: true});

fileResult.on('error', (e) => {
    console.log(e.message)
    throw new Error(e);
});

const changeRecord = function () {
  const createdAt = Date.now();
  const updatedAt = Date.now();
  const version = '0.1.0';
  return {createdAt, updatedAt, version};
};

const dealDrug = function (data, type = 'random') {
  try {
    data.price = data.price || 0.00;
    let id = '0000000000';
    if (type !== 'random') {
      id = (DRUGID++).toString().padStart(10, '0');
    } else {
      id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-4);
    }
    const sno = Math.ceil(Math.random() * (SUPPLIERID - 1)).toString().padStart(10, '0');
    const version = changeRecord();
    const drug = {id, sno, ...data, ...version};
    fileResult.write(new Date() + '\nDRUGID: ' + DRUGID + '\nSUPPLIERID: ' + SUPPLIERID + '\nOUTRECORDID: ' + OUTRECORDID + '\nSTOREID: ' + STOREID + '\n PURCHASEID: ' + PURCHASEID + '\n');
    return drug;
  } catch (e) {
    console.log('dealDrug: ' + e.message);
  }
};

const dealSupplier = function (data, type = 'random') {
  try {
    let id = '0000000000';
    if (type !== 'random') {
      id = (SUPPLIERID++).toString().padStart(10, '0');
    } else {
      id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-4);
    }
    const version = changeRecord();
    const supplier = {id, ...data, ...version};
    fileResult.write(new Date() + '\nDRUGID: ' + DRUGID + '\nSUPPLIERID: ' + SUPPLIERID + '\nOUTRECORDID: ' + OUTRECORDID + '\nSTOREID: ' + STOREID + '\n PURCHASEID: ' + PURCHASEID + '\n');
    return supplier;
  } catch (e) {
    console.log('dealSupplier: ' + e.message);
  }
};

const dealPurchase = function (data, type = 'random') {
  try {
    let id = '0000000000';
    if (type !== 'random') {
      id = (PURCHASEID++).toString().padStart(10, '0');
    } else {
      id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-4);
    }
    const sno = Math.ceil(Math.random() * (SUPPLIERID - 1)).toString().padStart(10, '0');
    const dno = (1000000000 + Math.ceil(Math.random() * (DRUGID % 1000000000 - 1))).toString().padStart(10, '0');
    const version = changeRecord();
    const purchase = {id, sno, dno, ...data, ...version};
    fileResult.write(new Date() + '\nDRUGID: ' + DRUGID + '\nSUPPLIERID: ' + SUPPLIERID + '\nOUTRECORDID: ' + OUTRECORDID + '\nSTOREID: ' + STOREID + '\n PURCHASEID: ' + PURCHASEID + '\n');
    return purchase;
  } catch (e) {
    console.log('dealPurchase: ' + e.message);
  }
};

const dealStore = function (data, type = 'random') {
  try {
    let id = '0000000000';
    if (type !== 'random') {
      id = (STOREID++).toString().padStart(10, '0');
    } else {
      id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-4);
    }
    id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-8);
    const dno = (1000000000 + Math.ceil(Math.random() * (DRUGID % 1000000000 - 1))).toString().padStart(10, '0');
    const version = changeRecord();
    const store = {id, dno, ...data, ...version};
    fileResult.write(new Date() + '\nDRUGID: ' + DRUGID + '\nSUPPLIERID: ' + SUPPLIERID + '\nOUTRECORDID: ' + OUTRECORDID + '\nSTOREID: ' + STOREID + '\n PURCHASEID: ' + PURCHASEID + '\n');
    return store;
  } catch (e) {
    console.log('dealStore: ' + e.message);
  }
};

const dealOut = function (data, type = 'random') {
  try {
    let id = '0000000000';
    if (type !== 'random') {
      id = (OUTRECORDID++).toString().padStart(10, '0');
    } else {
      id = `${Math.floor(Math.random() * MAXNUM) + MINNUM}` + Date.now().toString().substr(-8);
    }
    const dno = (1000000000 + Math.ceil(Math.random() * (DRUGID % 1000000000 - 1))).toString().padStart(10, '0');
    const version = changeRecord();
    const out = {id, dno, ...data, ...version};
    fileResult.write(new Date() + '\nDRUGID: ' + DRUGID + '\nSUPPLIERID: ' + SUPPLIERID + '\nOUTRECORDID: ' + OUTRECORDID + '\nSTOREID: ' + STOREID + '\n PURCHASEID: ' + PURCHASEID + '\n');
    return out;
  } catch (e) {
    console.log('dealOut: ' + e.message);
  }
};

module.exports = {
  dealDrug,
  dealOut,
  dealStore,
  dealPurchase,
  dealSupplier
}
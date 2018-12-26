const Drug = require('./models/drug');

const OutRecord = require('./models/outRecord');

const Purchase = require('./models/purchase');

const Store = require('./models/storage');

const Supplier = require('./models/supplier');

const current = new Date();
const opts = {
  createdAt: Date.now(),
  updatedAt: Date.now(),
  version: '0.1.0'
}

const drs = [
  {
    id: '1000000001',
    sno: '0000000002',
    name: '云南白药',
    vender: '深圳市欧豪有限公司',
    specification: '20ml',
    usag: '外敷于患处',
    edate: current,
    reserve: 60,
    price: 15.6,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  },
  {
    id: '1000000002',
    sno: '0000000001',
    name: '酒精',
    vender: '深圳市欧豪有限公司',
    specification: '50ml',
    usag: '外敷于患处',
    edate: current,
    reserve: 60,
    price: 15.6,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  },
  {
    id: '1000000003',
    sno: '0000000004',
    name: '儿童浆口服液',
    vender: '深圳市欧豪有限公司',
    specification: '70ml',
    usag: '外敷于患处',
    edate: current,
    reserve: 60,
    price: 15.6,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  },
  {
    id: '1000000004',
    sno: '0000000005',
    name: '碘酒',
    vender: '深圳市欧豪有限公司',
    specification: '40ml',
    usag: '外敷于患处',
    edate: current,
    reserve: 60,
    price: 15.6,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }
]

const sups = [
  {
    id: '0000000001',
    address: '湖南文理学院12舍708',
    linkman: '曾培培',
    phone: '15287834790',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }, {
    id: '0000000002',
    address: '湖南文理学院10舍809',
    linkman: '廖朵朵',
    phone: '15287834790',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }, {
    id: '0000000003',
    address: '湖南应用学院11舍008',
    linkman: '巧克力',
    phone: '15287834790',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }, {
    id: '0000000004',
    address: '湖南工业大学13栋108',
    linkman: '罗小新',
    phone: '15287834790',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }, {
    id: '0000000005',
    address: '深圳市罗湖区豪宅区668区',
    linkman: '欧小',
    phone: '15287834790',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: '0.1.0'
  }
]

const purs = [
  {
    id: '2018082901',
    sno: '0000000003',
    dno: '1000000002',
    quantity: 90,
    pdate: current,
    ...opts
  }, {
    id: '2018082902',
    sno: '0000000001',
    dno: '1000000003',
    quantity: 40,
    pdate: current,
    ...opts
  }, {
    id: '2018082903',
    sno: '0000000004',
    dno: '1000000001',
    quantity: 45,
    pdate: current,
    ...opts
  }, {
    id: '2018082904',
    sno: '0000000002',
    dno: '1000000003',
    quantity: 26,
    pdate: current,
    ...opts
  }
]

const stos = [
  {
    id: `${Date.now()}1`,
    dno: '1000000003',
    quantity: 14,
    sdate: current,
    ...opts
  }, {
    id: `${Date.now()}2`,
    dno: '1000000002',
    quantity: 8,
    sdate: current,
    ...opts
  }, {
    id: `${Date.now()}3`,
    dno: '1000000001',
    quantity: 6,
    sdate: current,
    ...opts
  }, {
    id: `${Date.now()}4`,
    dno: '1000000004',
    quantity: 12,
    sdate: current,
    ...opts
  }, {
    id: `${Date.now()}5`,
    dno: '1000000002',
    quantity: 13,
    sdate: current,
    ...opts
  }
]

const outs = [
  {
    id: `${Date.now()}1`,
    dno: '1000000002',
    quantity: 2,
    odate: current,
    ...opts
  }, {
    id: `${Date.now()}2`,
    dno: '1000000001',
    quantity: 1,
    odate: current,
    ...opts
  }, {
    id: `${Date.now()}3`,
    dno: '1000000003',
    quantity: 4,
    odate: current,
    ...opts
  }, {
    id: `${Date.now()}4`,
    dno: '1000000004',
    quantity: 3,
    odate: current,
    ...opts
  }, {
    id: `${Date.now()}5`,
    dno: '1000000002',
    quantity: 3,
    odate: current,
    ...opts
  }
];

const relateTable = [
 {
    ins: Supplier,
    data: sups
  },  {
    ins: Drug,
    data: drs
  }, {
    ins: Purchase,
    data: purs
  }, {
    ins: Store,
    data: stos
  }, {
    ins: OutRecord,
    data: outs
  }
];

const initTable = async function () {
  try {
    for (let i = 0; i < relateTable.length; i++) {
      const data = await relateTable[i].ins.bulkCreate(relateTable[i].data);
      console.log(`${i}:`, data);
    }
  } catch (e) {
    console.log(e.message);
  }
};

// initTable();

module.exports = {
  Drug,
  Store,
  Supplier,
  Purchase,
  OutRecord,
}
const DRUG = {
  order: ['name', 'vender', 'specification', 'edate', 'reserve', 'price', 'linkman', 'address', 'phone', 'usag'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'edate': '生产日期',
    'reserve': '库存',
    'price': '价格',
    'linkman': '供货商',
    'address': '供货地址',
    'phone': '供货联系方式',
    'usag': '使用方法'
  }
};

const OUTPUT = {
  order: ['name', 'vender', 'specification', 'odate', 'quantity'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'odate': '出库时间',
    'quantity': '出库数量'
  }
};

const STORE = {
  order: ['name', 'vender', 'specification', 'sdate', 'quantity'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'sdate': '入库时间',
    'quantity': '入库数量'
  }
};

const PURCHASE = {
  order: ['name', 'vender', 'specification', 'pdate', 'linkman', 'address', 'phone', 'quantity'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'pdate': '采购时间',
    'linkman': '供货商',
    'address': '供货地址',
    'phone': '供货联系方式',
    'quantity': '采购数量'
  }
};

const EXPIRED = {
  order: ['name', 'vender', 'specification', 'odate', 'quantity'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'odate': '过期时间',
    'quantity': '过期数量'
  }
};

module.exports = { DRUG, OUTPUT, STORE, EXPIRED, PURCHASE }
const DRUG = {
  order: ['name', 'vender', 'specification', 'edate', 'reserve', 'price', 'linkman', 'address', 'phone', 'usag', 'id', 'edit', 'del'],
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
    'usag': '使用方法',
    'del': '删除药品',
    'edit': '编辑药品',
    'id': '药品编号'
  }
};

const OUTPUT = {
  order: ['name', 'vender', 'specification', 'odate', 'quantity', 'id', 'edit', 'del'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'odate': '出库时间',
    'quantity': '出库数量',
    'del': '删除记录',
    'edit': '编辑记录',
    'id': '出库编号'
  }
};

const STORE = {
  order: ['name', 'vender', 'specification', 'sdate', 'quantity', 'id', 'edit', 'del'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'sdate': '入库时间',
    'quantity': '入库数量',
    'del': '删除记录',
    'edit': '编辑记录',
    'id': '入库编号'
  }
};

const PURCHASE = {
  order: ['name', 'vender', 'specification', 'pdate', 'linkman', 'address', 'phone', 'quantity', 'id', 'edit', 'del'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'pdate': '采购时间',
    'linkman': '供货商',
    'address': '供货地址',
    'phone': '供货联系方式',
    'quantity': '采购数量',
    'del': '删除记录',
    'edit': '编辑记录',
    'id': '采购编号'
  }
};

const EXPIRED = {
  order: ['name', 'vender', 'specification', 'odate', 'quantity', 'id', 'edit', 'del'],
  label: {
    'name': '药名',
    'vender': '厂家',
    'specification': '规格',
    'odate': '过期时间',
    'quantity': '过期数量',
    'del': '删除药品',
    'edit': '编辑药品',
    'id': '药品编号'
  }
};

module.exports = { DRUG, OUTPUT, STORE, EXPIRED, PURCHASE }
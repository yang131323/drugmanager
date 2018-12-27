const { dealDrug, dealOut, dealStore, dealPurchase, dealSupplier } = require('./dataProcess');
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

const NAMAE = ['羚翘解毒丸', '人参益母丸', '启脾丸', '板兰根', '三九感冒灵', '牛黄上清丸', '华佗再造丸', '知柏地黄丸', '板兰根', '天王补心丹', '火胆丸', '西黄丸 ', '才胡舒肝丸', ' 大活络丹(北) ', '麝香接骨丹', '六神丸', '西黄丸', '明目地黄丸', '大活络丹', '益心复脉冲剂', '乌鸡白凤丸', '木香顺气丸', '速效救心丸', '补肾益脑片', '风油精', '白凤校囊', '牛黄降压丸', '人参健脾丸', '前列康', '仲筋丹', '回天再造丸', '二母宁嗽丸', '速效感冒胶囊', '沈阳红药', '肾康宁', '消渴丸', '石斛夜光丸', '壮骨关节丸', '红药气雾剂', '心脑宁', '舒肝和胃丸', '冠心苏合丸', '加味逍遥丸', '红药贴膏', '小儿宣肺颗粒', '柏子养心丸', '人参归脾丸', '正天丸', '三七总甙', '胆石利通', '骨质增生片', '山楂丸', '补脾益肠丸', '九龙丹', '排石冲剂', '全贵肾气丸', '壮腰健肾丸', '麻仁滋脾丸', '骨刺消痛液', '颈复康颗粒', '龙胆泻肝丸', '补中益气丸', '追风透骨丸', '元胡止痛片', '障眼明', '牛黄清心丸', '羚羊感冒片', '黄氏响声丸', '复方丹参片 ', '消炎利胆片', '牛黄清心丸', '附子理中丸', '定坤丹', '丹参片', '足光粉', '安宫丸', '化毒丸', '月月舒', '天麻头痛片', '牛磺酸颗粒', '安宫丸', '防风通圣丸', '牛黄清胃丸', '云南白药', '鼻炎康', '疏风再造丸', '霍香正气丸', '清音丸', '乳癖消', '龙牡壮骨冲剂', '六味地黄丸', '霍香正气口服液', '通宣理肺丸', '养血生发胶囊', '健胃消食片', '杞菊地黄丸', '蛤蚧啶喘丸', '治癫灵', '气滞胃痛冲剂', '咳特灵胶囊', '朱砂安神丸 ', '百合固金丸 ', '三九胃泰冲剂', '中成药', ' 牛黄解毒片', '金胆片', '产妇康', '黄芪精', '金嗓子散结片', '马应龙痔疮膏', '银翘片', '一清胶囊', '新清宁', '肝胆结石片', '关节止痛膏', '血栓心脉宁', '松龄血脉康', '肝达', '脉栓通', '止痛透骨膏', '冠脉宁', '春血安', '前列舒乐', '肾石通', '麝香壮骨膏', '大川芎口服液', '心通口服液', '逐瘀通脉胶囊', '胃溃宁 ', '急支糖浆', '化积口服液', '银黄含化片', '尿感宁', '胃溃宁'];
const VENDER = ['热火朝天', '和风细雨', '不由自主', '取长补短', '冷言冷语', '青山绿水', '一言为定', '十字路口', '瓜田李下', '先入为主', '五花八门', '火烧眉毛', '自以为是', '春风化雨', '白日做梦', '东山再起', '众多非一', '十指连心', '一表人才', '风和日丽', '安居乐业', '舍己为人', '答非所问', '快言快语', '一事无成', '风平浪静', '面目全非', '你追我赶', '古往今来', '千人一面'];
const FIRST = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章'];
const SECOND = ["还", "不", "包", "括", "元", "代", "清", "代", "移", "居", "中", "原", "的", "蒙", "族", "满", "族", "人", "译", "改", "的", "汉", "字", "姓", "边", "疆", "少", "数", "名", "族", "译", "成", "汉", "字", "的", "姓", "也", "没", "有", "计", "算", "在", "内", "宋", "代", "百", "家", "姓", "收", "入", "个", "姓", "氏", "明", "代", "千", "家", "姓", "收", "入", "个", "姓", "氏", "解", "放", "以", "来", "在", "北", "京", "市", "的", "户", "口", "档", "案", "中", "就", "有", "二", "千", "二"];
const SPECIFICATION = ['20g', '30g', '50g', '37g', '45g', '36g', '48g', '18g', '34g', '36g','19g','26g', '67g', '35g', '66g', '18g', '28g', '94g', '39g','23g','46g'];
const QUANTITY = [10, 20, 30, 40, 50 ,60 ,70 , 80, 90, 15, 25, 35, 45, 55, 65, 75, 85, 95];

const randomData = function (entity) {
  if (typeof entity !== 'number') {
    return Math.floor(Math.random() * (entity.length));
  } 
  return Math.floor(Math.random() * entity);
}

const supplierData = function (num = 2, type = 'random') {
  let suppliers = [];
  let linkman, phone, address;
  for (let i = 0; i < num; i ++) {
    linkman = `${FIRST[Math.floor(Math.random() * (FIRST.length))]}${SECOND[Math.floor(Math.random() * (SECOND.length))]}`;
    phone = `1${Math.floor(Math.random() * 7999999999) + 1111111111}`;
    address = VENDER[Math.floor(Math.random() * (VENDER.length))] + '景区';
    const data = dealSupplier({linkman, phone, address}, type);
    suppliers.push(data);
  }
  return suppliers;
};

const drugData = function (num = 2, type = 'random') {
  let drugs = [];
  let name, vender, specification, usag, edate, reserve, price;
  for (let i = 0; i < num; i ++) {
    name = NAMAE[Math.floor(Math.random() * (NAMAE.length))];
    vender = VENDER[Math.floor(Math.random() * (VENDER.length))] + '药品种植基地';
    specification = SPECIFICATION[Math.floor(Math.random() * (SPECIFICATION.length))];
    usag = VENDER[Math.floor(Math.random() * (VENDER.length))] + '使用';
    edate = new Date();
    reserve = QUANTITY[Math.floor(Math.random() * (QUANTITY.length))];
    price = QUANTITY[randomData(QUANTITY)];
    const data = dealDrug({name, vender, specification, usag, edate, reserve, price}, type);
    drugs.push(data);
  }
  return drugs;
};

const purchaseData = function (num = 2, type = 'random') {
  let purchases = [];
  let quantity, pdate;
  for (let i = 0; i < num; i ++) {
    pdate = new Date();
    quantity = QUANTITY[randomData(QUANTITY)];
    const data = dealPurchase({pdate, quantity}, type);
    purchases.push(data);
  }
  return purchases;
};

const storeData = function (num = 2, type = 'random') {
  let stores = [];
  let quantity, sdate;
  for (let i = 0; i < num; i ++) {
    sdate = new Date();
    quantity = QUANTITY[randomData(QUANTITY)];
    const data = dealStore({sdate, quantity}, type);
    stores.push(data);
  }
  return stores;
};

const outputData = function (num = 2, type = 'random') {
  let outputs = [];
  let quantity, odate;
  for (let i = 0; i < num; i ++) {
    odate = new Date();
    quantity = QUANTITY[randomData(QUANTITY)];
    const data = dealOut({odate, quantity}, type);
    outputs.push(data);
  }
  return outputs;
};

const initTable = async function () {
  try {
    await Supplier.bulkCreate(supplierData(100));
    await Drug.bulkCreate(drugData(100));
    await Purchase.bulkCreate(purchaseData(100));
    await Store.bulkCreate(storeData(100));
    await OutRecord.bulkCreate(outputData(100));
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
  OutRecord
}
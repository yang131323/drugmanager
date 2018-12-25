
const { sequelize, Sequelize } = require('../config');

const drugAttrs = {
  id: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  linkman: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING(11),
    allowNull: true
  },
  createdAt: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  version: {
    type: Sequelize.STRING,
    allowNull: false
  }
}

const Supplier = sequelize.define('supplier', drugAttrs);

module.exports = Supplier;
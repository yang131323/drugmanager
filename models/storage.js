
const { sequelize, Sequelize } = require('../config');

const drugAttrs = {
  id: {
    type: Sequelize.STRING(20),
    primaryKey: true,
    autoIncrement: true
  },
  dno: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  sdate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  quantity: {
    type: Sequelize.INTEGER(6),
    allowNull: false
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
};

const Store = sequelize.define('storage', drugAttrs);

module.exports = Store;
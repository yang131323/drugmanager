
const { sequelize, Sequelize } = require('../config');

const drugAttrs = {
  id: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  vender: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  specification: {
    type: Sequelize.STRING(10),
    allowNull: true
  },
  usage: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  edate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  reserve: {
    type: Sequelize.INTEGER(6),
    allowNull: true
  },
  price: {
    type: Sequelize.FLOAT(6, 2),
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

const Drug = sequelize.define('drug', drugAttrs);

module.exports = Drug;
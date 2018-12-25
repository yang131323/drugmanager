
const { sequelize, Sequelize } = require('../config');

const drugAttrs = {
  id: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    autoIncrement: true
  },
  sno: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  dno: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  pdate: {
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

const Purchase = sequelize.define('purchase', drugAttrs);

module.exports = Purchase;
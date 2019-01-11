const Sequelize = require('Sequelize');

const OPTS = {
  max: 10,
  min: 0,
  idle: 10000
}

const testConfig = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3600,
  database: 'test',
  username: 'test', // 你自己的mysql用户名
  password: '123456789', // 用户名密码
  opt: OPTS
};

const devConfig = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3600,
  database: 'hospitalbackup',
  username: 'test',
  password: '123456789',
  opt: OPTS
};

const proConfig = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3600,
  database: 'hospital',
  username: 'test',
  password: '123456789',
  opt: OPTS
};

const CONFIG = process.env.NODE_ENV === 'production' ? proConfig : devConfig;

const sequelize = new Sequelize(CONFIG.database, CONFIG.username, CONFIG.password, {
  host: CONFIG.host,
  dialect: CONFIG.dialect,
  pool: CONFIG.opt
})

module.exports = { sequelize, Sequelize }

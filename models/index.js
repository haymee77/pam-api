const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Class = require('./class')(sequelize, Sequelize);
db.Teacher = require('./teacher')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// DB 관계 정의(1:1)
db.Teacher.belongsTo(db.User, {forignKey: 'user_uid'});

// DB 관계 정의(1:N)
db.Teacher.hasMany(db.Class);
db.Class.belongsTo(db.Teacher);

module.exports = db;
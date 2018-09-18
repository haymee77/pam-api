const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Teacher = require('./teacher')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Class = require('./class')(sequelize, Sequelize);
db.Level = require('./level')(sequelize, Sequelize);

// 테스트용 테이블
db.Test = require('./test')(sequelize, Sequelize);

// DB 관계 정의(1:1)
db.Teacher.belongsTo(db.User, {foreignKey: 'user_id'});

// DB 관계 정의(1:N)
db.Teacher.hasMany(db.Class, {as: 'techer', foreignKey: 'teacher_id'});

module.exports = db;
module.exports = (sequelize, Sequelize) => (
    sequelize.define('LEVEL_TB', {
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        group: {
            type: Sequelize.ENUM('USER', 'CONTENTS', 'TEACHER', 'AUTH', 'CLASS'),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(200),
            allowNull: false
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        freezeTableName: true,
        crateAt: 'created_dt',
        updatedAt: 'updated_dt',
        deletedAt: 'deleted_dt',
        timestamp: true,
        paranoid: true, // 삭제일(복구용)),
        underscored: true,  // (sanke_case) 컬럼명 convention
    })
);

module.exports = (sequelize, Sequelize) => (
    sequelize.define('TEACHERS_TB', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        level_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
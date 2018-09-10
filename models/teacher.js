module.exports = (sequelize, Sequelize) => (
    sequelize.define('TEACHERS_TB', {
        uid: {
            type: Sequelize.UUID,
            allowNull: false,
            comment: 'Unique id'
        },
        level: {
            type: Sequelize.STRING(20),
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
module.exports = (sequelize, Sequelize) => (
    sequelize.define('TEST_TB', {
        name: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '이름'
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: true,
            comment: '나이'
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        freezeTableName: true,
        createdAt: 'created_dt',
        updatedAt: 'updated_dt',
        deletedAt: 'deleted_dt',
        timestamp: true,
        paranoid: true, // 삭제일(복구용))
        underscored: true,  // (sanke_case) 컬럼명 convention
    })
);
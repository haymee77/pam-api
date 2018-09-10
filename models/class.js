module.exports = (sequelize, Sequelize) => (
    sequelize.define('CLASSES_TB', {
        name: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '수업 이름'
        },
        capacity: {
            type: Sequelize.INTEGER,
            allowNull: true,
            comment: '수업 참가 가능 정원'
        },
        level: {
            type: Sequelize.STRING(20),
            allowNull: true,
            comment: 'LEVEL_TB(group=user)의 code 값'
        },
        location: {
            type: Sequelize.STRING(200),
            allowNull: true,
            comment: '수업 장소'
        },
        timetable: {
            type: Sequelize.JSON,
            allowNull: true,
            comment: '수업 시간표(key(요일):value(시간))'
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
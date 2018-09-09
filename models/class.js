module.exports = (sequelize, Sequelize) => (
    sequelize.define('CLASSES_TB', {
        uid: {
            type: Sequelize.UUID,
            allowNull: false,
            comment: 'Unique id'
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '수업 이름'
        },
        capacity: {
            type: Sequelize.INTEGER,
            allowNull: ture,
            comment: '수업 참가 가능 정원'
        },
        level: {
            type: Sequelize.STRING(20),
            allowNull: true,
            comment: 'LEVEL_TB(group=user)의 code 값'
        },
        location: {
            typw: Sequelize.STRING(200),
            allowNull: true,
            comment: '수업 장소'
        },
        timetable: {
            type: Sequelize.JSON,
            allowNull: ture,
            comment: '수업 시간표(key(요일):value(시간))'
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        freezeTableName: true,
        crateAt: 'created_dt',
        updatedAt: 'updated_dt',
        deletedAt: 'deleted_dt',
        timestamp: true,
        paranoid: true, // 삭제일(복구용))
    })
);
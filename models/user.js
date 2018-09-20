module.exports = (sequelize, Sequelize) => (
    sequelize.define('USERS_TB', {
        name: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '이름'
        },
        password: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '비밀번호'
        },
        email: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '이메일',
            unique: true
        },
        mobile: {
            type: Sequelize.STRING(20),
            allowNull: true,
            comment: '핸드폰 번호'
        },
        nick: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '별명'
        },
        level_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        sns_provider: {
            type: Sequelize.STRING(45),
            allowNull: true,
            comment: '소셜로그인 제공처'
        },
        sns_id: {
            type: Sequelize.STRING(30),
            allowNull: true,
            comment: '소셜로그인 id'
        },
        sns_connect_dt: {
            type: Sequelize.DATE,
            allowNull: true,
            comment: '소셜가입일'
        },
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
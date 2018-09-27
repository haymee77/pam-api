function Init() {}

Init.prototype.initLevelTB = function () {
    const { Level } = require('../models');
    
    // 각 그룹별로 디폴트 레벨 생성(없을경우)
    Level.findOrCreate({
        where: {code: 10000},
        defaults: {group: 'USER', description: '사용자의 default 레벨'}
    });

    Level.findOrCreate({
        where: {code: 20000},
        defaults: {group: 'CONTENTS', description: '수업자료의 default 레벨'},
    });

    Level.findOrCreate({
        where: {code: 30000},
        defaults: {group: 'TEACHER', description: '선생님의 default 레벨'}
    });

    Level.findOrCreate({
        where: {code: 40000},
        defaults: {group: 'AUTH', description: '권한의 default 레벨'}
    });

    Level.findOrCreate({
        where: {code: 50000},
        defaults: {group: 'CLASS', description: '수업의 default 레벨'}
    });
}

module.exports = new Init();
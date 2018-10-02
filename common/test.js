function Init() {}

Init.prototype.initLevelTB = function () {
    const { Level } = require('../models');
    
    // 각 그룹별로 디폴트 레벨 생성(없을경우)
    Level.findOrCreate({
        where: {group: 'USER'},
        defaults: {description: '사용자의 default 레벨'}
    });

    Level.findOrCreate({
        where: {group: 'CONTENTS'},
        defaults: {description: '수업자료의 default 레벨'},
    });

    Level.findOrCreate({
        where: {group: 'TEACHER'},
        defaults: {description: '선생님의 default 레벨'}
    });

    Level.findOrCreate({
        where: {group: 'AUTH'},
        defaults: {description: '권한의 default 레벨'}
    });

    Level.findOrCreate({
        where: {group: 'CLASS'},
        defaults: {description: '수업의 default 레벨'}
    });
}

module.exports = new Init();
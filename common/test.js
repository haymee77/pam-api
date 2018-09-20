function Init() {}

Init.prototype.initLevelTB = function () {
    const { Level } = require('../models');
    
    Level.bulkCreate([
        {code: 10000, group: 'USER', description: '사용자의 default 레벨'},
        {code: 20000, group: 'CONTENTS', description: '수업자료의 default 레벨'},
        {code: 30000, group: 'TEACHER', description: '선생님의 default 레벨'},
        {code: 40000, group: 'AUTH', description: '권한의 default 레벨'},
        {code: 50000, group: 'CLASS', description: '수업의 default 레벨'},
    ]);
}

module.exports = new Init();
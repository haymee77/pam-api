'use strict';

const { Teacher, User } = require("../../models");

module.exports = {
    createTeacher : createTeacher
}

function createTeacher(req, res) {
    
    // 이메일로 user_id 검색하여 있으면 생성
    User.findOne({
        where: {email: req.swagger.params.email.value},
        attributes: ['id']
    }).then(user => {
        if (!user) {
            console.log('없음');
        } else {
            console.log(user.dataValues.id);
        }

        return res.status(200).json({success:true});
    });
    /*
    Teacher.create({

        user_id: req.swagger.params.userId.value,
        level_id: req.swagger.params.levelId.value

    }).then((teacher) => {

        teacher.success = true;

        return res.json(teacher);
    }).catch((err) => {
        return res.status(555).json(false);
    })
    */
}
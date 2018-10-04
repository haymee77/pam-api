'use strict';

const { Teacher, User } = require("../../models");

module.exports = {
    createTeacher : createTeacher
}

function createTeacher(req, res) {
    
    // 이메일로 user_id 검색하여 USER_TB에 있으면 생성
    User.findOne({
        where: {email: req.swagger.params.email.value},
        attributes: ['id']
    }).then(user => {

        // TEACHER_TB 검색하여 없는 경우에만 생성
        Teacher.findOrCreate({
            where: {user_id: user.dataValues.id},
            default: {
                level_id:req.swagger.params.levelId.value
            }
        }).spread((teacher, created) => {
            if (created) {
                const result = {
                    success: true,
                    teacherId: teacher.dataValues.id                   
                }
                res.status(200).json(result);
            } else {
                console.log('1');
                res.status(409).json("이미 등록된 선생님입니다.");
            }
        }).catch((err) => {
            res.status(555).json(false);
        });
    });
}
'use strict';

const { Teacher } = require("../../models");

module.exports = {
    createTeacher : createTeacher
}

function createTeacher(req, res) {

    Teacher.create({

        user_id: req.swagger.params.userId.value,
        level_id: req.swagger.params.levelId.value

    }).then((teacher) => {

        teacher.success = true;

        return res.json(teacher);
    }).catch((err) => {
        return res.status(555).json(false);
    })

}
'use strict';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const util = require('util');
const { Class } = require('../../models');

module.exports = {
    getClasses : getClasses,
    postClass : postClass
};

function getClasses(req, res) {
    Class.findAndCountAll({
        where: {deleted_dt: null}
    }).then(result => {

        if (result.count > 0) {
            const rs = {
                count: result.count,
                classList: []
            };
            
            result.rows.forEach(data => {
                console.log(data.dataValues.timetable);
                const jsonTimeTable = JSON.parse(data.dataValues.timetable);

                console.log(jsonTimeTable);

                rs.classList[data.id] = {
                    name: data.dataValues.name,
                    capacity: data.dataValues.capacity,
                    levelId: data.dataValues.level_id,
                    location: data.dataValues.location,
                    timetable: jsonTimeTable,
                    teacher: data.dataValues.teacher_id
                };
            });

            console.log(rs);

            res.status(200).json(rs);
        } else {
            res.status(204).json("No Contents");
        }

    }).catch(err => {
        console.log(err);
        res.status(555).json("DB ERROR");
    })
}

function postClass(req, res) {

    const name = req.swagger.params.name.value || '';
    const capacity = req.swagger.params.capacity.value || '';
    const levelId = req.swagger.params.levelId.value || '';
    const location = req.swagger.params.location.value || '';
    const timetable = JSON.parse(req.swagger.params.timetable.value) || '';
    const teacherId = req.swagger.params.teacherId.value || '';

    Class.findOrCreate({
        where: {name: name},
        defaults: {
            capacity: capacity,
            level_id: levelId,
            location: location,
            timetable: timetable,
            teacher_id: teacherId
        }
    }).spread((newClass, created) => {
        if (created) {
            const result = {
                success: true,
                classId: newClass.dataValues.id
            }

            res.status(200).json(result);
        } else {
            res.status(409).json("동일한 이름의 클래스가 존재합니다.");
        }
    }).catch((err) => {
        res.status(555).json();
    });
}
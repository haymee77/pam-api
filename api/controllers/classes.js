'use strict';

const util = require('util');
const { Class } = require('../../models');

module.exports = {
    getClasses : getClasses,
    postClass : postClass
};

function getClasses(req, res) {
    const name = req.swagger.params.name.value || 'BB';
    const hello = util.format('Hello, %s', name);

    res.json(hello);
}

function postClass(req, res) {
    const name = req.swagger.params.name.value || '';
    const capacity = req.swagger.params.capacity.value || '';
    const levelId = req.swagger.params.levelId.value || '';
    const location = req.swagger.params.location.value || '';
    const timetable = req.swagger.params.timetable.value || '';
    const teacherId = req.swagger.params.teacherId.value || '';

    console.log(req.swagger.params);

    Class.create({
        name: name,
        capacity: capacity,
        level_id: levelId,
        location: location,
        timetable: timetable,
        teacher_id: teacherId
    }).then((new_class) => res.status(201).json(new_class))
    .catch((err) => console.error(err));    
}
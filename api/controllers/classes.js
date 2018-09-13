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
    const level = req.swagger.params.level.value || '';
    const location = req.swagger.params.location.value || '';
    const timetable = req.swagger.params.timetable.value || '';
    const teacher_id = req.swagger.params.teacher_id || '';

    console.log(teacher_id);

    Class.create({
        name: name,
        capacity: capacity,
        level: level,
        location: location,
        timetable: timetable,
        teacher_id: teacher_id
    }).then((new_class) => res.status(201).json(new_class))
    .catch((err) => console.error(err));    
}
'use strict';

const util = require('util');
const { Test } = require('../../models');

module.exports = {
    postTest : postTest,
};

function postTest(req, res) {
    const name = req.swagger.params.name.value || 'stranger';
    const age = parseInt(req.swagger.params.age.value) || 0;

    // this sends back a JSON response which is a single string
    Test.create({
        name: name,
        age: age
    }).then((test) => res.status(200).json(test));
}

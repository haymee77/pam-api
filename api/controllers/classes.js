'use strict';

var util = require('util');

module.exports = {
    classes : classes
};

function classes(req, res) {
    var name = req.swagger.params.name.value || 'BB';
    var hello = util.format('Hello, %s', name);

    res.json(hello);
}
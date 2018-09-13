'use strict';
const { User } = require("../../models");
const dateFormat = require("dateformat");

module.exports = {
    createUser : createUser
};

function createUser(req, res) {
    const result = {
        success: false
    }

    const name = req.swagger.params.name.value || '';
    const password = req.swagger.params.password.value || '';
    const email = req.swagger.params.email.value || '';
    const mobile = req.swagger.params.mobile.value || '';
    const nick = req.swagger.params.nick.value || '';
    const level = req.swagger.params.level.value || '';
    const snsProvider = req.swagger.params.snsProvider.value || '';
    const snsId = req.swagger.params.snsId.value || '';

    if (snsId !== '') {
        const snsConnectedDate = dateFormat(now);
    }    

    User.create({
        name: name,
        password: password,
        email: email,
        mobile: mobile,
        nick: nick,
        level: level,
        sns_provider: snsProvider,
        sns_id: snsId,
        sns_connect_dt: snsConnectedDate
    }).then((user) => {
        result.success = true;

        res.json(result);
    });

    res.json(result);
}
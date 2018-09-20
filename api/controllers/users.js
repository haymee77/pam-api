'use strict';
const { User } = require("../../models");
const dateFormat = require("dateformat");

module.exports = {
    createUser : createUser
};

function createUser(req, res) {

    const name = req.swagger.params.name.value || '';
    const password = req.swagger.params.password.value || '';
    const email = req.swagger.params.email.value || '';
    const mobile = req.swagger.params.mobile.value || '';
    const nick = req.swagger.params.nick.value || '';
    const levelId = req.swagger.params.levelId.value || '';
    const snsProvider = req.swagger.params.snsProvider.value || '';
    const snsId = req.swagger.params.snsId.value || '';
    const snsConnectedDate = dateFormat(new Date());

    User.findOrCreate({where: {email: email},
        defaults: {
            name: name,
            password: password,
            email: email,
            mobile: mobile,
            nick: nick,
            level_id: levelId,
            sns_provider: snsProvider,
            sns_id: snsId,
            sns_connect_dt: (snsId ? snsConnectedDate : null)
        }        
    }).spread((user, created) => {
        if (created) {
            const result = {
                success: true,
                userId: user.dataValues.id
            }
            res.status(200).json(result);
        } else {
            res.status(409).json("이미 가입된 이메일 주소입니다.");
        }
    }).catch((err) => {
        res.status(500).json();
    });
}
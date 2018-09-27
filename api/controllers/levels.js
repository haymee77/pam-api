'use strict';

const { Level } = require("../../models");

module.exports = {
    getLevelList : getLevelList
}

function getLevelList(req, res) {
    Level.findAll({
        raw: true,
        where: {
            deleted_dt: null
        },
        attributes: ['code', 'group', 'description']
    }).then(levelList => {
        const returnList = {};

        levelList.forEach(level => {

            if (!(level.group in returnList)) {
                returnList[level.group] = new Array(level);
            } else {
                returnList[level.group].push(level);
            }
        });

        console.log(returnList);

        return res.json(returnList);
    });
}
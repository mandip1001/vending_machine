'use strict';
const appMiddleware = {};
const { coins } = require('../configs/applicationConfig');
const responseHelper = require('../helpers/responseMessageHelper');
const httpStatus = require('http-status');

appMiddleware.checkCoin = async(req, res, next) => {
    if(coins <= 0) {
        return responseHelper.sendResponse(res, httpStatus.BAD_GATEWAY, 'Machine is out of Coins')
    }
    next();
}


module.exports = appMiddleware;
'use strict';
const config = require('./config');
const httpStatus = require('http-status');
const applicationConfig = require('../../configs/applicationConfig');
const responseHelper = require('../../helpers/responseMessageHelper');
const refundController = {};


refundController.refund = async (req, res, next) => {
    try {   
        const {item_name} = req.body
        if(!item_name){
            return responseHelper.sendResponse(res, httpStatus.BAD_REQUEST, config.message.productNameRequired);
        }
        let {item_details, coins} = applicationConfig
        let {price, stock} = item_details[item_name]
        if(coins < price) {
            return responseHelper.sendResponse(res, httpStatus.BAD_REQUEST, config.message.outOfCoins);
        }
        applicationConfig.coins = coins - price
        applicationConfig.item_details[item_name].stock = stock + 1
        return responseHelper.sendResponse(res, httpStatus.CREATED, config.message.success);
    } catch(err){ 
        return next(err);
    }
}

module.exports = refundController;
 
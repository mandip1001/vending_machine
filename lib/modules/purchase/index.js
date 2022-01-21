'use strict';
const config = require('./config');
const httpStatus = require('http-status');
const applicationConfig = require('../../configs/applicationConfig');
const responseHelper = require('../../helpers/responseMessageHelper');

const purchaseCtrl = {};

purchaseCtrl.purchaseItem = async(req, res, next) => {
 try {
    const {item_name, coins} = req.body
    let total_coins = applicationConfig.coins
    if(!item_name || !coins) {
        return responseHelper.sendResponse(res, httpStatus.BAD_REQUEST, config.message.parametersNotProvided);
    }
    const productDetail = applicationConfig.item_details[item_name];
    if(!productDetail){
        return responseHelper.sendResponse(res, httpStatus.NOT_FOUND, config.message.productNotAvailable);
    }
    let { id, price, stock } = productDetail
    if(stock === 0){
        return responseHelper.sendResponse(res, httpStatus.BAD_GATEWAY, config.message.outOfStock);
    }
    if(coins < price) {
        return responseHelper.sendResponse(res, httpStatus.BAD_REQUEST, config.message.lessPrice);
    }

    const change = coins - price > 0 ? coins - price : 0
    stock = stock - 1;
    total_coins = total_coins + price

    applicationConfig.coins = total_coins
    applicationConfig.item_details[item_name].stock = stock

    const purchaseObj = {
        productDetail:{
            product_id: id,
            product_name: item_name,
            product_price: price
        },
        paid_amount: coins,
        change: change
    }

    return responseHelper.sendResponse(res, httpStatus.CREATED,config.message.purchaseSuccessful, {change})
    } catch(err){
        return next(err);
    }
}


module.exports = purchaseCtrl;
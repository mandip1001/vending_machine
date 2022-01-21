'use strict';
const config = require('./config');
const httpStatus = require('http-status');
const applicationConfig = require('../../configs/applicationConfig');
const responseHelper = require('../../helpers/responseMessageHelper');

const purchaseCtrl = {};

purchaseCtrl.purchaseItem = async(req, res, next) => {
 try {
    } catch(err){
        return next(err);
    }
}


module.exports = purchaseCtrl;
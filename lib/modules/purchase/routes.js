'use strict';
const express = require('express');
const purchaseCtrl = require('./index');
const purchaseRouter = express.Router();
const appMiddleware = require('../../middleware/appMiddleware');


purchaseRouter.route('/').post(appMiddleware.checkCoin, purchaseCtrl.purchaseItem);

module.exports = purchaseRouter;
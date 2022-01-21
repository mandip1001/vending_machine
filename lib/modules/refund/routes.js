'use strict';
const express = require('express');
const refundRouter = express.Router();
const refundController = require('./index');
const appMiddleware = require('../../middleware/appMiddleware');

refundRouter.route('/').post(appMiddleware.checkCoin, refundController.refund);


module.exports = refundRouter;
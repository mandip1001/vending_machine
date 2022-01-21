'use strict'

const responseHelper = {};

responseHelper.sendResponse = async(res, status, message, data) => {
    return res.status(status).json({
        status,
        message,
        data
    })
}



module.exports = responseHelper;
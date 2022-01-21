'use strict';
const express = require('express');
require('dotenv').config();
const httpStatus = require('http-status');
const applicationRoutes = require('./lib/routes/index');

const app = express();

app.use(express.json());


applicationRoutes.init(app);

app.get('/', (req, res,next) => {
    res.send('Vending Machine')
})

app.use((err, req, res, next) => {
    if(err){
        console.log('errr==>', err);
        next();
    }
})


module.exports = app;
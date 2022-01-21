'use strict';

const applicationRoutes = {};

applicationRoutes.init = (app) => {
    
  const purchaseRouter = require('../modules/purchase/routes');
  app.use('/api/purchase', purchaseRouter);

  const refundRouter = require('../modules/refund/routes');
  app.use('/api/refund', refundRouter);
  
}



module.exports = applicationRoutes;
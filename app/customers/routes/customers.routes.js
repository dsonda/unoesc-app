'use strict';

var auth = require('../../users/controllers/auth.controller');

module.exports = function(api) {
  var customers = require('../controllers/customers.controller');

  api.use(auth.validateToken); // usa a autenticação em todas as rotas

  api.route('/customers')
    .get(customers.findAll)
    .post(customers.create);

  api.route('/customers/:customerId')
    .get(customers.find)
    .put(customers.update)
    .delete(customers.delete);

  api.param('customerId', customers.customerById);
};
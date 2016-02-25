'use strict';

module.exports = function(api) {
  var customers = require('../controllers/customers.controller');

  api.route('/customers')
    .get(customers.findAll)
    .post(customers.create);

  api.route('/customers/:customerId')
    .get(customers.find)
    .put(customers.update)
    .delete(customers.delete);

  api.param('customerId', customers.customerById);
};
'use strict';

var auth = require('../../users/controllers/auth.controller');

module.exports = function(api) {
  var breweries = require('../controllers/breweries.controller');

  api.use(auth.validateToken); // usa a autenticação em todas as rotas

  api.route('/breweries')
    //.all(auth.validateToken) // usa autenticação em todos os métodos desta rota
    .get(breweries.findAll)
    .post(breweries.create);

  api.route('/breweries/:breweryId')
    //.all(auth.validateToken) // usa autenticação em todos os métodos desta rota
    .get(breweries.find)
    .put(breweries.update)
    .delete(breweries.delete);

  api.param('breweryId', breweries.breweryById);
};
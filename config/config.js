'use strict'; // melhorar representação dos erros - stack trace

var _ = require('lodash');

module.exports = _.extend(
  require('./env/all'),
  require('./env/' + process.env.NODE_ENV) || {}
);
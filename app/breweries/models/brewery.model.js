'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewerySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String
  },
  creationDate: {
    type: Date
  },
  updateDate: {
    type: Date
  }
});

module.exports = mongoose.model('Brewery', BrewerySchema);
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

BrewerySchema.pre('save', function(next) {
  var brewery = this;
  if (brewery.isNew) {
    brewery.creationDate = new Date();
  }
  brewery.updateDate  = new Date();
  next();
});

module.exports = mongoose.model('Brewery', BrewerySchema);
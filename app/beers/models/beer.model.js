'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
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
  },
  brewery: {
    type: Schema.ObjectId,
    ref: 'Brewery'
  }
});

BeerSchema.pre('save', function(next) {
  var beer = this;
  if (beer.isNew) {
    beer.creationDate = new Date();
  }
  beer.updateDate  = new Date();
  next();
});

module.exports = mongoose.model('Beer', BeerSchema);
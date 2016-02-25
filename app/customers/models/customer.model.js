'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  creationDate: {
    type: Date
  },
  updateDate: {
    type: Date
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
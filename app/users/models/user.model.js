'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  creationDate: {
    type: Date
  },
  updateDate: {
    type: Date
  }
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (user.isNew) {
    user.creationDate = new Date();
  }
  user.updateDate  = new Date();
  next();
});

module.exports = mongoose.model('User', UserSchema);
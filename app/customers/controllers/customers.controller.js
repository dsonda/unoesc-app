'use strict';

var mongoose = require('mongoose'),
    Customer = require('../models/customer.model');

exports.findAll = function(req, res) {
  Customer.find([]).exec(function(err, customers) {
    if (err) {
      console.error(err);
      res.status(400).json(err);
    } else {
      res.json(customers);
    }
  });
};

exports.find = function(req, res) {
  res.json(req.customer);
}

exports.create = function(req, res) {
  var customer = new Customer(req.body);
  customer.creationDate = Date();
  customer.save(function(err) {
    if (err) {
      res.status(400).json({
        message: err
      });
    } else {
      res.json({
        message: 'Cliente criado com sucesso',
        customer: customer
      });
    }
  });
};

exports.update = function(req, res) {
  var customer = req.customer;
  customer.name = req.body.name;
  customer.address = req.body.address;
  customer.phoneNumber = req.body.phoneNumber
  customer.updateDate = Date();
  customer.save(function(err) {
    if (err) {
      res.status(400).json({
        message: err
      });
    } else {
      res.json({
        message: 'Cliente alterado com sucesso',
        customer: customer
      });
    }
  });
}

exports.delete = function(req, res) {
  var customer = req.customer;
  customer.remove(function(err) {
    if (err) {
      res.status(400).json({
        message: err
      });
    } else {
      res.json({
        message: 'Cliente removido com sucesso',
        customer: customer
      });
    }
  });  
}

// middleware para consulta no DB via ID, reutilizável em diferentes métodos
exports.customerById = function(req, res, next, customerId) {
  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    res.status(400).json({ message: 'Cliente inválido'})
  }
  Customer.findById(customerId).exec(function(err, customer) {
    if (err) {
      res.status(404).json(err)
    }
    req.customer = customer;
    next();    
  })
};
const customerRouter = require('express').Router();
const validate = require('./productValidator')
const actions = require('./productAction')
const service = require('./productService');
const customerDao = require('./productDao');

module.exports = customerRouter;
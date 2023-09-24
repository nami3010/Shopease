const customerRouter = require('express').Router();
const validate = require('./customerValidator')
const actions = require('./customerAction')
const service = require('./customerService');
const customerDao = require('./customerDao');

module.exports = customerRouter;
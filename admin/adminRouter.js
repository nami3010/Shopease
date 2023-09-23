const adminRouter = require('express').Router();
const validate = require('./adminValidator')
const actions = require('./adminAction')


actions.createadmin()

module.exports = adminRouter;
const categoryRouter = require('express').Router();
const validate = require('./categoryValidator')
const actions = require('./categoryAction')



    
categoryRouter.route('/add')
.post([
], (req, res) => {
    actions.add(req, res)
});
categoryRouter.route('/list')
.get([
], (req, res) => {
    actions.list(req, res)
});
module.exports = categoryRouter;
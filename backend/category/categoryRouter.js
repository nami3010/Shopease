const categoryRouter = require('express').Router();
const validate = require('./categoryValidator')
const actions = require('./categoryAction')


categoryRouter.get('/test',(req, res, next) => {
console.log("Hello from category ")
    });
    
categoryRouter.route('/add')
.post([
    // validate.verifyAccess
], (req, res) => {
    actions.add(req, res)
});
module.exports = categoryRouter;
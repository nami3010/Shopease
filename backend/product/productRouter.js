const productRouter = require('express').Router();
const validate = require('./productValidator')
const actions = require('./productAction')



    
productRouter.route('/add')
.post([
], (req, res) => {
    actions.add(req, res)
});
productRouter.route('/list')
.get([
], (req, res) => {
    actions.list(req, res)
});
productRouter.route('/edit/:id')
.put([
], (req, res) => {
    actions.edit(req, res)
});
productRouter.route('/delete/:id')
.put([validate.verifyAccess], (req, res) => {
    actions.deleteProduct(req, res)
});
module.exports = productRouter;
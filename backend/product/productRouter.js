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

productRouter.route("/productbyCatId/:carId").put([], (req, res) => {
  console.log('cat-id', req.body)
    actions.getProductByCatId(req, res);
  });

productRouter.route("/delete/:id").put([validate.verifyAccess], (req, res) => {
  actions.deleteProduct(req, res);
});
productRouter.route('/get/:id')
.get([
], (req, res) => {
    actions.getById(req, res)
});
productRouter.route('/getByCat/:id')
.get([
], (req, res) => {
    actions.getByCatId(req, res)
});
module.exports = productRouter;
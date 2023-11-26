const service = require("./productService");

function add(req, res, next) {
  service.add(req, res, next);
}

function list(req, res, next) {
  service.list(req, res, next);
}

function edit(req, res, next) {
  service.edit(req, res, next);
}

function deleteProduct(req, res, next) {
  service.deleteProduct(req, res, next);
}

function getProductByCatId(req, res, next) {
  service.getProductsByCatId(req, res, next);
}

module.exports = {
  add,
  list,
  edit,
  deleteProduct,
  getProductByCatId
};

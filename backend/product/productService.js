const code = require("../constants").http_codes;
const msg = require("../constants").messages;
const productdao = require("./productDao");
const util = require("../app util/util");

function add(req, res) {
  let token = req.headers["authorization"];
  console.log("🚀 ~ file: productService.js:9 ~ add ~ token:", token);
  let obj = util.decodeToken(token);
  req.body.createdBy = obj.id;
  const data = req.body;
  return productdao
    .create(data)
    .then((result) => {
      res.json({ code: code.ok, result: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

getProductsByCatId=(req, res)=>{
    console.log(
        "🚀 ~ file: getProductsByCatId~ add ~ req.query.id:",
        req.params.id
      );
}

function list(req, res) {
  let query = { isDeleted: "false" };
  return productdao
    .find(query)
    .then((result) => {
      res.json({ code: code.ok, data: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function edit(req, res) {
  let token = req.headers["authorization"];
  console.log(
    "🚀 ~ file: productService.js:9 ~ add ~ req.query.id:",
    req.params.id
  );
  let obj = util.decodeToken(token);
  req.body.updatedBy = obj.id;
  let query = { _id: req.params.id },
    update = req.body,
    options = { new: true };
  return productdao
    .findOneAndUpdate(query, update, options)
    .then((result) => {
      res.json({ code: code.ok, msg: msg.updateProduct, result: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function deleteProduct(req, res) {
  let query = { _id: req.params.id },
    update = { isDeleted: "true" },
    options = { new: true };
  return productdao
    .findOneAndUpdate(query, update, options)
    .then((result) => {
      res.json({ code: code.ok, message: msg.prodeleted });
    })
    .catch((err) => {
      res.json({ code: code.ineternalError, message: msg.internalServerError });
    });
}

module.exports = {
  add,
  list,
  edit,
  deleteProduct,
};

const code = require("../constants").http_codes;
const msg = require("../constants").messages;
const categorydao = require("./categoryDao");
const util = require("../app util/util");

function add(req, res) {
  let token = req.headers["authorization"];
  let obj = util.decodeToken(token);
  req.body.createdBy = obj.id;
  const data = req.body;
  return categorydao
    .create(data)
    .then((result) => {
      res.json({ code: code.ok, data: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function list(req, res) {
  // let token = req.headers['authorization']
  // let obj = util.decodeToken(token)
  return categorydao
    .find()
    .then((result) => {
      res.json({ code: code.ok, data: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

module.exports = {
  add,
  list,
};

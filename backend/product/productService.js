const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const productdao = require('./productDao');
const util = require('../app util/util');


add=async (req, res)=> {
    
    let token = req.headers['authorization']
    console.log("🚀 ~ file: productService.js:9 ~ add ~ token:", token)
    console.log("🚀 ~ file: productService.js:9 ~ req ~ token:", req)

    let obj = util.decodeToken(token)
    req.body.createdBy = obj.id;
    const data = req.body;
    console.log("data is---->",typeof(data));
    const result = await productdao.create(data);
        console.log("success result is---->",result);
        //res.json({ code: code.ok, result: result })
        if(result){
            res.json({ code: code.ok, data: result })
          }
    
}

function list(req, res) {
    let query = { isDeleted: "false" }
    return productdao.find(query).then((result) => {
        res.json({ code: code.ok, data: result })

    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}

function edit(req, res) {
    let token = req.headers['authorization']
    console.log("🚀 ~ file: productService.js:9 ~ add ~ req.query.id:", req.params.id)
    let obj = util.decodeToken(token)
    req.body.updatedBy = obj.id;
    let query = { _id: req.params.id },
        update = req.body,
        options = { new: true };
    return productdao.findOneAndUpdate(query, update, options).then((result) => {
        res.json({ code: code.ok, msg: msg.updateProduct, result: result })

    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}

function deleteProduct(req, res) {

    let query = { _id: req.params.id },
        update = { isDeleted: "true" },
        options = { new: true };
    return productdao.findOneAndUpdate(query, update, options).then((result) => {
        res.json({ code: code.ok, message: msg.prodeleted })
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })

    })
}
function getById(req, res) {

    let query = { _id: req.params.id }

    return productdao.findOne(query).then((result) => {
        res.json({ code: code.ok,data:result })
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })

    })
}
function getByCatId(req, res) {

    let query = { category: req.params.id }

    return productdao.find(query).then((result) => {
        res.json({ code: code.ok,data:result })
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })

    })
}
module.exports = {
    add,
    list,
    edit,
    deleteProduct,
    getByCatId,
    getById
}
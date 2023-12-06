const service = require('./categoryService')


function add(req, res,next) {
    service.add(req, res,next)
}
function list(req, res,next) {
    service.list(req, res,next)
}
module.exports={
    add,
    list
}
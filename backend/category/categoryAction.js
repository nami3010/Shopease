const service = require('./categoryService')


function add(req, res,next) {
    service.add(req, res,next)
}
module.exports={
    add
}
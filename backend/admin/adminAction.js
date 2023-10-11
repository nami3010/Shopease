const service = require('./adminService')


function login(req, res,next) {
    service.authenticateUser(req, res,next)
}
function createadmin(req, res,next) {
    service.createadmin(req, res,next)
}
module.exports={
    login,
    createadmin
}
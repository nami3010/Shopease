const service = require('./userService')


function login(req, res,next) {
    service.login(req, res,next)
}
function signup(req, res,next) {
    service.signup(req, res,next)
}
module.exports={
    login,
    signup
}
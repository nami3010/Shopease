const service = require('./userService')


function login(req, res,next) {
    service.login(req, res,next)
}
function signup(req, res,next) {
    service.signup(req, res,next)
}
function add(req, res,next) {
    service.add(req, res,next)
}
function list(req, res,next) {
    service.list(req, res,next)
}
function edit(req, res,next) {
    service.edit(req, res,next)
}
function deleteUser(req, res,next) {
    service.deleteUser(req, res,next)
}
module.exports={
    login,
    signup,
    add,
    list,
    edit,
    deleteUser
}

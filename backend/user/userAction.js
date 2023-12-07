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
function payment(req, res,next) {
    service.payment(req, res,next)
}
function addToCart(req, res,next) {
    service.addToCart(req, res,next)
}
function removefromcart(req, res,next) {
    service.removefromcart(req, res,next)
}
function uploadPhoto(req, res,next) {
    service.uploadPhoto(req, res,next)
}
function getfromcart(req, res,next) {
    service.getfromcart(req, res,next)
}
function updateCart(req, res,next) {
    service.updateCart(req, res,next)
}
module.exports={
    login,
    signup,
    add,
    list,
    edit,
    deleteUser,
    payment,
    addToCart,
    removefromcart,
    uploadPhoto,
    getfromcart,
    updateCart
}
